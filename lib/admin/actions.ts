"use server";

import { revalidatePath } from "next/cache";
import type { Product } from "@/lib/products";
import {
  getAllProducts,
  getAllCategories,
  insertProduct,
  updateProduct,
  deleteProductBySlug,
  deleteProductsBySlugs,
  setCategories,
  deleteCategoriesByName,
  getProductImages,
  saveProductImages as dbSaveProductImages,
} from "@/lib/db/queries";

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

function cleanList(items: string[]): string[] {
  return items.map((i) => i.trim()).filter((i) => i.length > 0);
}

function cleanSpecs(specs: { label: string; value: string }[]) {
  return specs
    .map((s) => ({ label: s.label.trim(), value: s.value.trim() }))
    .filter((s) => s.label.length > 0 && s.value.length > 0);
}

export async function saveProduct(input: ProductFormInput) {
  const slug = input.slug.trim();
  if (!slug) throw new Error("Slug is required.");
  if (!input.name.trim()) throw new Error("Name is required.");
  if (!input.category.trim()) throw new Error("Category is required.");
  if (!Number.isFinite(input.price) || input.price < 0) {
    throw new Error("Price must be a valid non-negative number.");
  }

  const isEditing = Boolean(input.originalSlug);

  // slug uniqueness check (skip if slug unchanged while editing)
  if (!isEditing || slug !== input.originalSlug) {
    const existing = await getAllProducts();
    const slugTaken = existing.some(
      (p) => p.slug === slug && p.slug !== input.originalSlug
    );
    if (slugTaken) {
      throw new Error(`A product with slug "${slug}" already exists.`);
    }
  }

  const cleaned: Product = {
    slug,
    name: input.name.trim(),
    category: input.category.trim(),
    price: Math.round(input.price),
    ...(input.compareAtPrice
      ? { compareAtPrice: Math.round(input.compareAtPrice) }
      : {}),
    summary: input.summary.trim(),
    description: cleanList(input.description),
    specs: cleanSpecs(input.specs),
    features: cleanList(input.features),
    stock: input.stock,
    accent: input.accent,
    ...(input.badge?.trim() ? { badge: input.badge.trim() } : {}),
  };

  if (isEditing) {
    await updateProduct(input.originalSlug!, cleaned);
  } else {
    await insertProduct(cleaned);
  }

  revalidatePath("/shop");
  revalidatePath("/admin/products");
  return { slug };
}

export async function deleteProduct(slug: string) {
  await deleteProductBySlug(slug);
  revalidatePath("/shop");
  revalidatePath("/admin/products");
}

export async function deleteProducts(slugs: string[]) {
  if (slugs.length === 0) throw new Error("No products selected.");
  const removedCount = await deleteProductsBySlugs(slugs);
  if (removedCount === 0) {
    throw new Error("None of the selected products were found.");
  }
  revalidatePath("/shop");
  revalidatePath("/admin/products");
  return { removedCount };
}

export async function saveCategories(categories: string[]) {
  const cleaned = Array.from(
    new Set(categories.map((c) => c.trim()).filter((c) => c.length > 0))
  );
  if (cleaned.length === 0) {
    throw new Error("At least one category is required.");
  }
  await setCategories(cleaned);
  revalidatePath("/shop");
  revalidatePath("/admin/products");
  revalidatePath("/admin/categories");
}

export async function deleteCategories(categoriesToDelete: string[]) {
  if (categoriesToDelete.length === 0) {
    throw new Error("No categories selected.");
  }
  const removedCount = await deleteCategoriesByName(categoriesToDelete);
  revalidatePath("/shop");
  revalidatePath("/admin/products");
  revalidatePath("/admin/categories");
  return { removedCount };
}

/**
 * Load current images for a product (for pre-filling the admin form).
 * Returns up to 4 base64 data URIs ordered by position.
 */
export async function loadProductImages(slug: string): Promise<string[]> {
  return getProductImages(slug);
}

/**
 * Persist images for a product from the admin form.
 * `images` is an array of up to 4 entries; null/undefined slots are deleted.
 */
export async function saveProductImagesAction(
  slug: string,
  images: (string | null | undefined)[]
): Promise<void> {
  await dbSaveProductImages(slug, images);
  revalidatePath("/shop");
  revalidatePath(`/shop/${slug}`);
  revalidatePath("/admin/products");
}
