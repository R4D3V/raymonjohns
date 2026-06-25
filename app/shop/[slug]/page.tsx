import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle, Package } from "lucide-react";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/db/queries";
import { formatPrice } from "@/lib/products";
import { accentText } from "@/lib/accent";
import { ButtonLink } from "@/components/neu-button";
import ProductThumbnail from "@/components/product-thumbnail";
import ProductCard from "@/components/product-card";
import SectionHeading from "@/components/section-heading";

type Params = { slug: string };

const stockLabel: Record<string, string> = {
  "in-stock": "In stock — ready today",
  "low-stock": "Low stock — a few left",
  preorder: "Order-in — confirmed on enquiry",
};

export const revalidate = 60;

export async function generateStaticParams() {
  // Uses the static product list at build time — no DB needed during build.
  // At runtime, the DB is the source of truth.
  const { products } = await import("@/lib/products");
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product not found — RaymonJohns" };
  return {
    title: `${product.name} — Shop — RaymonJohns`,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product);

  return (
    <div className="flex flex-col gap-14 py-12 sm:py-16">
      {/* back */}
      <Link
        href="/shop"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <ArrowLeft size={14} /> Back to shop
      </Link>

      {/* main grid */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* thumbnail */}
        <div className="neu-raised-lg aspect-square w-full overflow-hidden rounded-neu-lg">
          <ProductThumbnail
            slug={product.slug}
            className="h-full w-full rounded-neu-lg"
          />
        </div>

        {/* details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className={`eyebrow ${accentText[product.accent]}`}>
              {product.category}
            </p>
            {product.badge && (
              <span
                className={`neu-inset-sm mt-2 inline-block px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${accentText[product.accent]}`}
              >
                {product.badge}
              </span>
            )}
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {product.summary}
            </p>
          </div>

          {/* price */}
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-ink">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-ink-faint line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          {/* stock */}
          <div className="flex items-center gap-2">
            <Package
              size={14}
              className={
                product.stock === "in-stock"
                  ? "text-accent-green"
                  : product.stock === "low-stock"
                    ? "text-accent-coral"
                    : "text-ink-faint"
              }
            />
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              {stockLabel[product.stock]}
            </span>
          </div>

          {/* CTA */}
          <ButtonLink href="/contact" withArrow>
            <MessageCircle size={14} />
            Enquire to order
          </ButtonLink>

          {/* specs */}
          {product.specs.length > 0 && (
            <div className="neu-inset p-5">
              <p className="eyebrow mb-4">Specs</p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                {product.specs.map((s) => (
                  <div key={s.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                      {s.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* features */}
          {product.features.length > 0 && (
            <ul className="flex flex-col gap-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                  <CheckCircle2
                    size={14}
                    className={`mt-0.5 shrink-0 ${accentText[product.accent]}`}
                  />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* description */}
      {product.description.length > 0 && (
        <section className="max-w-2xl">
          <SectionHeading eyebrow="Details" title="About this product" />
          <div className="mt-6 flex flex-col gap-4">
            {product.description.map((para, i) => (
              <p key={i} className="leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* related */}
      {related.length > 0 && (
        <section>
          <SectionHeading eyebrow="More picks" title="Related products" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
