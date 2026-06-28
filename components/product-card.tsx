import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { accentText } from "@/lib/accent";
import ProductThumbnail from "@/components/product-thumbnail";

type Props = {
  product: Product;
  primaryImage?: string; // base64 data URI — if present, shown instead of the SVG
};

const stockLabel: Record<Product["stock"], string> = {
  "in-stock": "In stock",
  "low-stock": "Low stock",
  preorder: "Order-in",
};

export default function ProductCard({ product, primaryImage }: Props) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="neu-raised neu-pressable neu-focus group flex flex-col gap-5 p-6 sm:p-7"
    >
      <div className="flex items-start justify-between">
        <span className={`eyebrow ${accentText[product.accent]}`}>
          {product.category}
        </span>
        <ArrowUpRight
          size={18}
          className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-blue"
        />
      </div>

      <div className="neu-inset h-36 overflow-hidden rounded-neu-md">
        {primaryImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={primaryImage}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <ProductThumbnail
            slug={product.slug}
            className="h-full w-full rounded-neu-md"
          />
        )}
      </div>

      <div>
        {product.badge && (
          <span
            className={`neu-inset-sm mb-2 inline-block px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${accentText[product.accent]}`}
          >
            {product.badge}
          </span>
        )}
        <h3 className="font-display text-lg font-bold text-ink">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {product.summary}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-1">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-ink">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-ink-faint line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
          {stockLabel[product.stock]}
        </span>
      </div>
    </Link>
  );
}

