/**
 * lib/db/queries.ts
 *
 * All database interactions live here. Components and server actions import
 * from this file — never touching Supabase directly. This makes it easy to
 * swap the database later if needed.
 */

import { createServerClient, createAdminClient } from "./supabase";
import type { ProductRow, CategoryRow, ProductImageRow } from "./types";
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
  const { data: maxRow } = (await supabase
    .from("products")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .single()) as unknown as { data: { sort_order: number } | null };

  const sort_order = (maxRow?.sort_order ?? 0) + 1;

  const { error } = await (supabase.from("products") as any).insert({
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
  }) as { error: { message: string } | null };

  if (error) throw new Error(`Failed to create product: ${error.message}`);
  return product.slug;
}

/** Update an existing product by its original slug. */
export async function updateProduct(
  originalSlug: string,
  product: Product
): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await (supabase.from("products") as any)
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
    .eq("slug", originalSlug) as unknown as { error: { message: string } | null };

  if (error) throw new Error(`Failed to update product: ${error.message}`);
}

/** Delete a single product by slug. */
export async function deleteProductBySlug(slug: string): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await (supabase.from("products") as any)
    .delete()
    .eq("slug", slug) as unknown as { error: { message: string } | null };

  if (error) throw new Error(`Failed to delete product: ${error.message}`);
}

/** Delete multiple products by slug. Returns count of deleted rows. */
export async function deleteProductsBySlugs(
  slugs: string[]
): Promise<number> {
  const supabase = createAdminClient();
  const { data, error } = await (supabase.from("products") as any)
    .delete()
    .in("slug", slugs)
    .select("slug") as unknown as { data: { slug: string }[] | null; error: { message: string } | null };

  if (error) throw new Error(`Failed to delete products: ${error.message}`);
  return data?.length ?? 0;
}

// ─── Category queries ────────────────────────────────────────────────────────

/** Fetch all categories ordered by sort_order. Returns name strings. */
export async function getAllCategories(): Promise<string[]> {
  const supabase = await createServerClient();
  const { data, error } = await (supabase.from("categories") as any)
    .select("name")
    .order("sort_order", { ascending: true }) as unknown as {
    data: Pick<CategoryRow, "name">[] | null;
    error: { message: string } | null;
  };

  if (error) throw new Error(`Failed to fetch categories: ${error.message}`);
  return (data ?? []).map((r) => r.name);
}

/** Replace the full categories list. Validates none of the removed
 *  categories are still in use by products. */
export async function setCategories(categories: string[]): Promise<void> {
  const supabase = createAdminClient();

  // check for categories still used by products
  const { data: existing } = (await supabase
    .from("categories")
    .select("name")) as unknown as { data: Pick<CategoryRow, "name">[] | null };
  const existingNames = (existing ?? []).map((r) => r.name);
  const removed = existingNames.filter((n) => !categories.includes(n));

  if (removed.length > 0) {
    const { data: inUse } = (await supabase
      .from("products")
      .select("category")
      .in("category", removed)) as unknown as {
      data: Pick<ProductRow, "category">[] | null;
    };

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
  await (supabase.from("categories") as any).delete().not("id", "is", null);
  if (categories.length === 0) return;

  const rows = categories.map((name, i) => ({ name, sort_order: i }));
  const { error } = await (supabase.from("categories") as any).insert(rows) as unknown as { error: { message: string } | null };
  if (error) throw new Error(`Failed to save categories: ${error.message}`);
}

/** Delete specific categories by name. Validates none are in use. */
export async function deleteCategoriesByName(names: string[]): Promise<number> {
  const supabase = createAdminClient();

  const { data: inUse } = (await supabase
    .from("products")
    .select("category")
    .in("category", names)) as unknown as {
    data: Pick<ProductRow, "category">[] | null;
  };

  const inUseNames = [...new Set((inUse ?? []).map((r) => r.category))];
  if (inUseNames.length > 0) {
    throw new Error(
      `Cannot remove ${inUseNames.join(", ")} — products still use ${
        inUseNames.length > 1 ? "these categories" : "this category"
      }. Reassign or delete those products first.`
    );
  }

  const { data, error } = await (supabase.from("categories") as any)
    .delete()
    .in("name", names)
    .select("id") as unknown as { data: Pick<CategoryRow, "id">[] | null; error: { message: string } | null };

  if (error) throw new Error(`Failed to delete categories: ${error.message}`);
  return data?.length ?? 0;
}

// ─── Product image queries ─────────────────────────────────────────────

/**
 * Returns an array of up to 4 base64 data-URI strings for a product,
 * ordered by position (0 = primary image).
 * Returns empty array if the product has no images.
 */
export async function getProductImages(slug: string): Promise<string[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("product_images")
    .select("position, data")
    .eq("product_slug", slug)
    .order("position", { ascending: true });

  if (error) throw new Error(`Failed to fetch images: ${error.message}`);
  return (data as Pick<ProductImageRow, "position" | "data">[]).map((r) => r.data);
}

/**
 * Returns a map of slug -> primary image (position 0) for a list of slugs.
 * Used by the shop page to display product card thumbnails efficiently.
 */
export async function getPrimaryImages(
  slugs: string[]
): Promise<Record<string, string>> {
  if (slugs.length === 0) return {};
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("product_images")
    .select("product_slug, data")
    .in("product_slug", slugs)
    .eq("position", 0);

  if (error) throw new Error(`Failed to fetch primary images: ${error.message}`);
  const map: Record<string, string> = {};
  for (const row of (data as Pick<ProductImageRow, "product_slug" | "data">[]) ?? []) {
    map[row.product_slug] = row.data;
  }
  return map;
}

/**
 * Saves images for a product. `images` is an array of up to 4 entries:
 * - a base64 data URI string → upsert at that position
 * - null / undefined → delete that position
 */
export async function saveProductImages(
  slug: string,
  images: (string | null | undefined)[]
): Promise<void> {
  const supabase = createAdminClient();

  // Build upsert rows and positions to delete
  const upsertRows: { product_slug: string; position: number; data: string }[] = [];
  const deletePositions: number[] = [];

  for (let i = 0; i < 4; i++) {
    const img = images[i];
    if (img) {
      upsertRows.push({ product_slug: slug, position: i, data: img });
    } else {
      deletePositions.push(i);
    }
  }

  if (deletePositions.length > 0) {
    const { error } = await (supabase.from("product_images") as any)
      .delete()
      .eq("product_slug", slug)
      .in("position", deletePositions) as unknown as { error: { message: string } | null };
    if (error) throw new Error(`Failed to delete images: ${error.message}`);
  }

  if (upsertRows.length > 0) {
    const { error } = await (supabase.from("product_images") as any)
      .upsert(upsertRows, { onConflict: "product_slug,position" }) as unknown as { error: { message: string } | null };
    if (error) throw new Error(`Failed to save images: ${error.message}`);
  }
}
