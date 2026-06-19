import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle, Package } from "lucide-react";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
} from "@/lib/products";
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

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
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
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);

  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      <Link
        href="/shop"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <ArrowLeft size={14} /> All products
      </Link>

      <section className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
        <div className="neu-raised-lg aspect-[4/3] w-full overflow-hidden rounded-neu-lg">
          <ProductThumbnail
            slug={product.slug}
            className="h-full w-full rounded-neu-lg"
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className={`eyebrow ${accentText[product.accent]}`}>
              {product.category}
            </span>
            {product.badge && (
              <span className="neu-inset-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted">
                {product.badge}
              </span>
            )}
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
            {product.summary}
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-ink">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-base text-ink-faint line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
            <Package size={15} className={accentText[product.accent]} />
            {stockLabel[product.stock]}
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <ButtonLink href="/contact" withArrow>
              Enquire about this
            </ButtonLink>
            <a
              href={`https://wa.me/256751621506?text=${encodeURIComponent(
                `Hi! I'd like to ask about: ${product.name}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="neu-pressable neu-focus neu-inset inline-flex items-center gap-2 rounded-neu-pill px-6 py-3 font-mono text-xs uppercase tracking-wider text-accent-green"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-5">
          {product.description.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}

          <div className="neu-raised mt-2 p-6 sm:p-8">
            <p className="eyebrow">Why it&apos;s worth it</p>
            <ul className="mt-4 space-y-3">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-ink-muted"
                >
                  <CheckCircle2
                    size={16}
                    className={`mt-0.5 shrink-0 ${accentText[product.accent]}`}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="neu-raised h-fit p-6">
          <p className="eyebrow">Specs</p>
          <dl className="mt-4 space-y-4">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <SectionHeading eyebrow="You might also need" title="Related products" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <section className="neu-raised flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
        <div>
          <p className="eyebrow">Not sure if this fits your device?</p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            Ask before you buy — happy to confirm compatibility.
          </p>
        </div>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </section>
    </div>
  );
}
