"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus, Loader2 } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { deleteProduct, deleteProducts } from "@/lib/admin/actions";
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
  const [isBulkPending, startBulkTransition] = useTransition();
  const [selected, setSelected] = useState<Set<string>>(new Set());

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

  // After any delete succeeds, products/selected naturally stay in sync
  // because we explicitly remove deleted slugs from selection below —
  // no effect needed to "catch up" stale selection state.

  const allFilteredSelected =
    filtered.length > 0 && filtered.every((p) => selected.has(p.slug));
  const someFilteredSelected = filtered.some((p) => selected.has(p.slug));

  const toggleOne = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const toggleAllFiltered = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allFilteredSelected) {
        filtered.forEach((p) => next.delete(p.slug));
      } else {
        filtered.forEach((p) => next.add(p.slug));
      }
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

  const handleDelete = (slug: string) => {
    if (!window.confirm(`Delete "${slug}"? This can't be undone.`)) return;
    setError(null);
    setPendingSlug(slug);
    startTransition(async () => {
      try {
        await deleteProduct(slug);
        setSelected((prev) => {
          if (!prev.has(slug)) return prev;
          const next = new Set(prev);
          next.delete(slug);
          return next;
        });
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete product.");
      } finally {
        setPendingSlug(null);
      }
    });
  };

  const handleBulkDelete = () => {
    const slugs = [...selected];
    if (slugs.length === 0) return;
    const confirmMsg =
      slugs.length === 1
        ? `Delete "${slugs[0]}"? This can't be undone.`
        : `Delete ${slugs.length} selected products? This can't be undone.`;
    if (!window.confirm(confirmMsg)) return;

    setError(null);
    startBulkTransition(async () => {
      try {
        await deleteProducts(slugs);
        clearSelection();
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete selected products.");
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

      {/* bulk action bar — only shown once something is selected */}
      {selected.size > 0 && (
        <div className="neu-inset flex flex-wrap items-center justify-between gap-3 rounded-neu-md p-4">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            {selected.size} selected
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearSelection}
              className="neu-focus font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleBulkDelete}
              disabled={isBulkPending}
              className="neu-pressable neu-focus flex items-center gap-2 rounded-neu-pill px-4 py-2 font-mono text-xs uppercase tracking-wider text-accent-coral disabled:opacity-50"
            >
              {isBulkPending ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Trash2 size={14} />
              )}
              {isBulkPending ? "Deleting..." : `Delete ${selected.size}`}
            </button>
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="neu-inset flex flex-col items-center gap-2 rounded-neu-lg p-10 text-center">
          <p className="text-ink">No products match.</p>
        </div>
      ) : (
        <div className="neu-raised flex flex-col divide-y divide-[var(--shadow-dark)]/20 overflow-hidden p-2">
          {/* select-all row */}
          <div className="flex items-center gap-3 px-4 py-2">
            <input
              type="checkbox"
              checked={allFilteredSelected}
              ref={(el) => {
                if (el) el.indeterminate = !allFilteredSelected && someFilteredSelected;
              }}
              onChange={toggleAllFiltered}
              aria-label="Select all visible products"
              className="neu-focus h-4 w-4 accent-[var(--accent-blue)]"
            />
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Select all ({filtered.length})
            </span>
          </div>

          {filtered.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selected.has(p.slug)}
                  onChange={() => toggleOne(p.slug)}
                  aria-label={`Select ${p.name}`}
                  className="neu-focus h-4 w-4 shrink-0 accent-[var(--accent-blue)]"
                />
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
