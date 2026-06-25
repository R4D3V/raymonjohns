/**
 * lib/db/queries.ts
 *
 * All database interactions live here. Components and server actions import
 * from this file — never touching Supabase directly. This makes it easy to
 * swap the database later if needed.
 */

import { createServerClient, createAdminClient } from "./supabase";
import type { ProductRow, CategoryRow } from "./types";
import type { Product } from "@/lib/products";

// ─── Type converters ────────────────────────────────────────────────────────

/**
 * Convert a raw Postgres row into the app-level Product shape.
 * The rest of the codebase (components, shop, admin) never sees raw DB rows.
 */
export function rowToProduct(row: ProductRow): Product {
  return {
    slug: row.slug,
    name: row.name,
    category: row.category,
    price: row.price,
    ...(row.compare_at_price !== null
      ? { compareAtPrice: row.compare_at_price }
      : {}),
    summary: row.summary,
    description: row.description,
    specs: row.specs as { label: string; value: string }[],
    features: row.features,
    stock: row.stock,
    accent: row.accent,
    ...(row.badge ? { badge: row.badge } : {}),
  };
}

// ─── Product queries ─────────────────────────────────────────────────────────

/** Fetch all products ordered by sort_order then name. */
export async function getAllProducts(): Promise<Product[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) throw new Error(`Failed to fetch products: ${error.message}`);
  return (data as ProductRow[]).map(rowToProduct);
}

/** Fetch a single product by slug. Returns null if not found. */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // not found
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
  return rowToProduct(data as ProductRow);
}

/** Fetch related products (same category first, then others). */
export async function getRelatedProducts(
  product: Product,
  count = 3
): Promise<Product[]> {
  const supabase = await createServerClient();

  // same category, excluding this product
  const { data: sameCategory, error: e1 } = await supabase
    .from("products")
    .select("*")
    .eq("category", product.category)
    .neq("slug", product.slug)
    .order("sort_order")
    .limit(count);

  if (e1) throw new Error(`Related products error: ${e1.message}`);

  if ((sameCategory?.length ?? 0) >= count) {
    return (sameCategory as ProductRow[]).slice(0, count).map(rowToProduct);
  }

  // fill remaining slots from other categories
  const needed = count - (sameCategory?.length ?? 0);
  const { data: rest, error: e2 } = await supabase
    .from("products")
    .select("*")
    .neq("category", product.category)
    .neq("slug", product.slug)
    .order("sort_order")
    .limit(needed);

  if (e2) throw new Error(`Related products error: ${e2.message}`);

  return [
    ...(sameCategory as ProductRow[]).map(rowToProduct),
    ...(rest as ProductRow[]).map(rowToProduct),
  ];
}

/** Insert a new product. Returns the created row's slug. */
export async function insertProduct(
  product: Omit<Product, never> & { sort_order?: number }
): Promise<string> {
  const supabase = createAdminClient();

  // get current max sort_order so new product goes to the end
  const { data: maxRows } = await supabase
    .from("products")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1);

  const sort_order = ((maxRows as Array<{ sort_order: number }> | null)?.[0]?.sort_order ?? 0) + 1;

  const { error } = await supabase.from("products").insert({
    slug: product.slug,
    name: product.name,
    category: product.category,
    price: product.price,
    compare_at_price: product.compareAtPrice ?? null,
    summary: product.summary,
    description: product.description,
    specs: product.specs,
    features: product.features,
    stock: product.stock,
    accent: product.accent,
    badge: product.badge ?? null,
    sort_order,
  });

  if (error) throw new Error(`Failed to create product: ${error.message}`);
  return product.slug;
}

/** Update an existing product by its original slug. */
export async function updateProduct(
  originalSlug: string,
  product: Product
): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("products")
    .update({
      slug: product.slug,
      name: product.name,
      category: product.category,
      price: product.price,
      compare_at_price: product.compareAtPrice ?? null,
      summary: product.summary,
      description: product.description,
      specs: product.specs,
      features: product.features,
      stock: product.stock,
      accent: product.accent,
      badge: product.badge ?? null,
    })
    .eq("slug", originalSlug);

  if (error) throw new Error(`Failed to update product: ${error.message}`);
}

/** Delete a single product by slug. */
export async function deleteProductBySlug(slug: string): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("slug", slug);

  if (error) throw new Error(`Failed to delete product: ${error.message}`);
}

/** Delete multiple products by slug. Returns count of deleted rows. */
export async function deleteProductsBySlugs(
  slugs: string[]
): Promise<number> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("products")
    .delete()
    .in("slug", slugs)
    .select("slug");

  if (error) throw new Error(`Failed to delete products: ${error.message}`);
  return data?.length ?? 0;
}

// ─── Category queries ────────────────────────────────────────────────────────

/** Fetch all categories ordered by sort_order. Returns name strings. */
export async function getAllCategories(): Promise<string[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("categories")
    .select("name")
    .order("sort_order", { ascending: true });

  if (error) throw new Error(`Failed to fetch categories: ${error.message}`);
  return (data as Pick<CategoryRow, "name">[]).map((r) => r.name);
}

/** Replace the full categories list. Validates none of the removed
 *  categories are still in use by products. */
export async function setCategories(categories: string[]): Promise<void> {
  const supabase = createAdminClient();

  // check for categories still used by products
  const { data: existing } = await supabase
    .from("categories")
    .select("name");
  const existingNames = (existing ?? []).map((r) => r.name);
  const removed = existingNames.filter((n) => !categories.includes(n));

  if (removed.length > 0) {
    const { data: inUse } = await supabase
      .from("products")
      .select("category")
      .in("category", removed);

    const inUseNames = [...new Set((inUse ?? []).map((r) => r.category))];
    if (inUseNames.length > 0) {
      throw new Error(
        `Cannot remove ${inUseNames.join(", ")} — products still use ${
          inUseNames.length > 1 ? "these categories" : "this category"
        }. Reassign or delete those products first.`
      );
    }
  }

  // delete all and re-insert in order (simplest approach for small lists)
  await supabase.from("categories").delete().not("id", "is", null);
  if (categories.length === 0) return;

  const rows = categories.map((name, i) => ({ name, sort_order: i }));
  const { error } = await supabase.from("categories").insert(rows);
  if (error) throw new Error(`Failed to save categories: ${error.message}`);
}

/** Delete specific categories by name. Validates none are in use. */
export async function deleteCategoriesByName(names: string[]): Promise<number> {
  const supabase = createAdminClient();

  const { data: inUse } = await supabase
    .from("products")
    .select("category")
    .in("category", names);

  const inUseNames = [...new Set((inUse ?? []).map((r) => r.category))];
  if (inUseNames.length > 0) {
    throw new Error(
      `Cannot remove ${inUseNames.join(", ")} — products still use ${
        inUseNames.length > 1 ? "these categories" : "this category"
      }. Reassign or delete those products first.`
    );
  }

  const { data, error } = await supabase
    .from("categories")
    .delete()
    .in("name", names)
    .select("id");

  if (error) throw new Error(`Failed to delete categories: ${error.message}`);
  return data?.length ?? 0;
}
