import type { Product } from "@/lib/products";

/**
 * Regenerates the full contents of lib/products.ts from in-memory data.
 * This is intentionally a dedicated serializer (not string patching) so the
 * output is always valid, consistently formatted TypeScript — no matter
 * what was edited through the admin UI.
 */

function esc(str: string): string {
  // Escape for a double-quoted TS string literal.
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

function str(value: string): string {
  return `"${esc(value)}"`;
}

function strArrayLiteral(items: string[], indent: string): string {
  if (items.length === 0) return "[]";
  const lines = items.map((item) => `${indent}  ${str(item)},`);
  return `[\n${lines.join("\n")}\n${indent}]`;
}

function specsLiteral(specs: { label: string; value: string }[], indent: string): string {
  if (specs.length === 0) return "[]";
  const lines = specs.map(
    (s) => `${indent}  { label: ${str(s.label)}, value: ${str(s.value)} },`
  );
  return `[\n${lines.join("\n")}\n${indent}]`;
}

function serializeProduct(p: Product): string {
  const indent = "  ";
  const lines: string[] = [];
  lines.push(`${indent}{`);
  lines.push(`${indent}  slug: ${str(p.slug)},`);
  lines.push(`${indent}  name: ${str(p.name)},`);
  lines.push(`${indent}  category: ${str(p.category)},`);
  lines.push(`${indent}  price: ${p.price},`);
  if (p.compareAtPrice !== undefined) {
    lines.push(`${indent}  compareAtPrice: ${p.compareAtPrice},`);
  }
  lines.push(`${indent}  summary: ${str(p.summary)},`);
  lines.push(`${indent}  description: ${strArrayLiteral(p.description, indent + "  ")},`);
  lines.push(`${indent}  specs: ${specsLiteral(p.specs, indent + "  ")},`);
  lines.push(`${indent}  features: ${strArrayLiteral(p.features, indent + "  ")},`);
  lines.push(`${indent}  stock: ${str(p.stock)},`);
  lines.push(`${indent}  accent: ${str(p.accent)},`);
  if (p.badge !== undefined && p.badge !== "") {
    lines.push(`${indent}  badge: ${str(p.badge)},`);
  }
  lines.push(`${indent}},`);
  return lines.join("\n");
}

export function serializeProductsFile(
  products: Product[],
  categories: readonly string[]
): string {
  const categoriesBlock = categories.map((c) => `  ${str(c)},`).join("\n");
  const productsBlock = products.map(serializeProduct).join("\n");

  return `export type Product = {
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

export const productCategories = [
${categoriesBlock}
] as const;

export const products: Product[] = [
${productsBlock}
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  const rest = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug
  );
  return [...sameCategory, ...rest].slice(0, count);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    maximumFractionDigits: 0,
  }).format(amount);
}
`;
}
