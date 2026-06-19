"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { products as currentProducts, productCategories as currentCategories } from "@/lib/products";
import type { Product } from "@/lib/products";
import { serializeProductsFile } from "@/lib/admin/serialize-products";

const PRODUCTS_FILE = path.join(process.cwd(), "lib", "products.ts");

/**
 * Hard safety check: this admin write path must only ever run in local
 * development. On Vercel (and most production hosts) the filesystem is
 * read-only at runtime, so this would fail anyway — but we fail loudly
 * and early rather than silently, in case this ever gets deployed.
 */
function assertLocalWriteAllowed() {
  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    throw new Error(
      "The admin dashboard can only save changes when running locally (pnpm dev). " +
        "It cannot write files on a deployed/production server."
    );
  }
}

export type ProductFormInput = {
  originalSlug?: string; // present when editing, omitted when creating
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  summary: string;
  description: string[];
  specs: { label: string; value: string }[];
  features: string[];
  stock: "in-stock" | "low-stock" | "preorder";
  accent: "blue" | "coral" | "green" | "violet";
  badge?: string;
};

async function writeProductsFile(products: Product[], categories: readonly string[]) {
  assertLocalWriteAllowed();
  const fileContents = serializeProductsFile(products, categories);
  await fs.writeFile(PRODUCTS_FILE, fileContents, "utf8");
  revalidatePath("/shop");
  revalidatePath("/admin/products");
}

function cleanList(items: string[]): string[] {
  return items.map((i) => i.trim()).filter((i) => i.length > 0);
}

function cleanSpecs(specs: { label: string; value: string }[]) {
  return specs
    .map((s) => ({ label: s.label.trim(), value: s.value.trim() }))
    .filter((s) => s.label.length > 0 && s.value.length > 0);
}

export async function saveProduct(input: ProductFormInput) {
  assertLocalWriteAllowed();

  const slug = input.slug.trim();
  if (!slug) throw new Error("Slug is required.");
  if (!input.name.trim()) throw new Error("Name is required.");
  if (!input.category.trim()) throw new Error("Category is required.");
  if (!Number.isFinite(input.price) || input.price < 0) {
    throw new Error("Price must be a valid non-negative number.");
  }

  const isEditing = Boolean(input.originalSlug);
  const slugTaken = currentProducts.some(
    (p) => p.slug === slug && p.slug !== input.originalSlug
  );
  if (slugTaken) {
    throw new Error(`A product with slug "${slug}" already exists.`);
  }

  const cleaned: Product = {
    slug,
    name: input.name.trim(),
    category: input.category.trim(),
    price: Math.round(input.price),
    ...(input.compareAtPrice ? { compareAtPrice: Math.round(input.compareAtPrice) } : {}),
    summary: input.summary.trim(),
    description: cleanList(input.description),
    specs: cleanSpecs(input.specs),
    features: cleanList(input.features),
    stock: input.stock,
    accent: input.accent,
    ...(input.badge?.trim() ? { badge: input.badge.trim() } : {}),
  };

  let next: Product[];
  if (isEditing) {
    next = currentProducts.map((p) => (p.slug === input.originalSlug ? cleaned : p));
  } else {
    next = [...currentProducts, cleaned];
  }

  await writeProductsFile(next, currentCategories);
  return { slug };
}

export async function deleteProduct(slug: string) {
  assertLocalWriteAllowed();
  const next = currentProducts.filter((p) => p.slug !== slug);
  if (next.length === currentProducts.length) {
    throw new Error(`No product found with slug "${slug}".`);
  }
  await writeProductsFile(next, currentCategories);
}

export async function deleteProducts(slugs: string[]) {
  assertLocalWriteAllowed();
  const slugSet = new Set(slugs);
  if (slugSet.size === 0) {
    throw new Error("No products selected.");
  }

  const next = currentProducts.filter((p) => !slugSet.has(p.slug));
  const removedCount = currentProducts.length - next.length;
  if (removedCount === 0) {
    throw new Error("None of the selected products were found.");
  }

  await writeProductsFile(next, currentCategories);
  return { removedCount };
}

export async function saveCategories(categories: string[]) {
  assertLocalWriteAllowed();
  const cleaned = Array.from(
    new Set(categories.map((c) => c.trim()).filter((c) => c.length > 0))
  );
  if (cleaned.length === 0) {
    throw new Error("At least one category is required.");
  }

  const removed = currentCategories.filter((c) => !cleaned.includes(c));
  const inUse = removed.filter((c) => currentProducts.some((p) => p.category === c));
  if (inUse.length > 0) {
    throw new Error(
      `Cannot remove ${inUse.join(", ")} — products still use ${
        inUse.length > 1 ? "these categories" : "this category"
      }. Reassign or delete those products first.`
    );
  }

  await writeProductsFile(currentProducts, cleaned);
}

export async function deleteCategories(categoriesToDelete: string[]) {
  assertLocalWriteAllowed();
  const toDelete = new Set(categoriesToDelete);
  if (toDelete.size === 0) {
    throw new Error("No categories selected.");
  }

  const inUse = [...toDelete].filter((c) =>
    currentProducts.some((p) => p.category === c)
  );
  if (inUse.length > 0) {
    throw new Error(
      `Cannot remove ${inUse.join(", ")} — products still use ${
        inUse.length > 1 ? "these categories" : "this category"
      }. Reassign or delete those products first.`
    );
  }

  const next = currentCategories.filter((c) => !toDelete.has(c));
  if (next.length === 0) {
    throw new Error("At least one category is required.");
  }

  await writeProductsFile(currentProducts, next);
  return { removedCount: currentCategories.length - next.length };
}
