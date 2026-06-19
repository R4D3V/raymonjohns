"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus, Loader2 } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { deleteProduct } from "@/lib/admin/actions";
import { accentText } from "@/lib/accent";
import SearchInput from "@/components/search-input";

type Props = {
  products: Product[];
  categories: readonly string[];
};

const stockLabel: Record<Product["stock"], string> = {
  "in-stock": "In stock",
  "low-stock": "Low stock",
  preorder: "Preorder",
};

export default function ProductsTable({ products, categories }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const matchesQuery = q
        ? p.name.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [products, query, activeCategory]);

  const handleDelete = (slug: string) => {
    if (!window.confirm(`Delete "${slug}"? This can't be undone.`)) return;
    setError(null);
    setPendingSlug(slug);
    startTransition(async () => {
      try {
        await deleteProduct(slug);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete product.");
      } finally {
        setPendingSlug(null);
      }
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {error && (
        <div className="neu-inset rounded-neu-md p-4 text-sm text-accent-coral">{error}</div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchInput value={query} onChange={setQuery} placeholder="Search products..." className="max-w-sm" />
        <Link
          href="/admin/products/new"
          className="neu-pressable neu-focus flex items-center justify-center gap-2 rounded-neu-pill px-5 py-3 font-mono text-xs uppercase tracking-wider text-accent-blue"
        >
          <Plus size={14} /> Add product
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`neu-pressable neu-focus px-3 py-1 font-mono text-[10px] uppercase tracking-wide ${
            activeCategory === null ? "neu-inset text-accent-blue" : "neu-inset-sm text-ink-muted"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActiveCategory(c === activeCategory ? null : c)}
            className={`neu-pressable neu-focus px-3 py-1 font-mono text-[10px] uppercase tracking-wide ${
              activeCategory === c ? "neu-inset text-accent-blue" : "neu-inset-sm text-ink-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="neu-inset flex flex-col items-center gap-2 rounded-neu-lg p-10 text-center">
          <p className="text-ink">No products match.</p>
        </div>
      ) : (
        <div className="neu-raised flex flex-col divide-y divide-[var(--shadow-dark)]/20 overflow-hidden p-2">
          {filtered.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`neu-inset-sm flex h-10 w-10 shrink-0 items-center justify-center font-display text-sm font-bold ${accentText[p.accent]}`}
                >
                  {p.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink">{p.name}</p>
                  <p className="font-mono text-[11px] text-ink-faint">
                    {p.slug} · {p.category}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-ink-muted">{formatPrice(p.price)}</span>
                <span className="neu-inset-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                  {stockLabel[p.stock]}
                </span>
                <Link
                  href={`/admin/products/${p.slug}/edit`}
                  className="neu-pressable neu-focus flex h-9 w-9 items-center justify-center rounded-neu-sm text-ink-muted hover:text-accent-blue"
                  aria-label={`Edit ${p.name}`}
                >
                  <Pencil size={14} />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(p.slug)}
                  disabled={isPending && pendingSlug === p.slug}
                  aria-label={`Delete ${p.name}`}
                  className="neu-pressable neu-focus flex h-9 w-9 items-center justify-center rounded-neu-sm text-ink-muted hover:text-accent-coral disabled:opacity-50"
                >
                  {isPending && pendingSlug === p.slug ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Trash2 size={14} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
