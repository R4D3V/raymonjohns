"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import ProductCard from "@/components/product-card";
import SearchInput from "@/components/search-input";
import { ButtonLink } from "@/components/neu-button";
import { shuffleProducts, type Product } from "@/lib/products";

const PAGE_SIZE = 10;

type Props = {
  initialProducts: Product[];
  initialCategories: string[];
};

export default function ShopBrowser({ initialProducts, initialCategories }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [displayProducts, setDisplayProducts] = useState(initialProducts);
  const [shuffleSeed, setShuffleSeed] = useState<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Shuffle on first mount (client-only to avoid SSR mismatch)
  useEffect(() => {
    const seed = Date.now();
    setShuffleSeed(seed);
    setDisplayProducts(shuffleProducts(initialProducts, seed));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return displayProducts.filter((p) => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const matchesQuery = q
        ? p.name.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory, displayProducts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // reset to page 1 whenever the filters change
  useEffect(() => {
    setPage(1);
  }, [query, activeCategory, displayProducts]);

  // keep page in range if filtering shrinks the result set
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  // scroll back to the top of the product grid whenever the page changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function goToPage(n: number) {
    setPage(n);
  }

  return (
    <>
      <div ref={topRef} />

      {/* search + reshuffle row */}
      <div className="flex flex-wrap items-center gap-3">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search for a product..."
          className="max-w-lg flex-1"
        />
        <button
          type="button"
          title="Reshuffle products"
          onClick={() => {
            const seed = Date.now();
            setShuffleSeed(seed);
            setDisplayProducts(shuffleProducts(initialProducts, seed));
            setPage(1);
          }}
          className="neu-raised neu-pressable neu-focus flex shrink-0 items-center gap-2 px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-accent-blue"
        >
          <Shuffle size={13} />
          Shuffle
        </button>
      </div>
      {shuffleSeed !== null && (
        <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
          Arrangement #{(shuffleSeed % 100000).toString().padStart(5, "0")} — changes every visit
        </p>
      )}

      {/* category chips — clickable filters */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`neu-pressable neu-focus px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors ${
            activeCategory === null
              ? "neu-inset text-accent-blue"
              : "neu-inset-sm text-ink-muted hover:text-accent-blue"
          }`}
        >
          All
        </button>
        {initialCategories.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
            className={`neu-pressable neu-focus px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors ${
              activeCategory === cat
                ? "neu-inset text-accent-blue"
                : "neu-inset-sm text-ink-muted hover:text-accent-blue"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* no results */}
      {filtered.length === 0 && (
        <div className="neu-inset flex flex-col items-center gap-2 rounded-neu-lg p-10 text-center">
          <p className="text-ink">No products match &quot;{query}&quot;.</p>
          <p className="text-sm text-ink-muted">Try a different word, or clear the search.</p>
        </div>
      )}

      {/* paginated product grid */}
      {filtered.length > 0 && (
        <section>
          <SectionHeading
            eyebrow={`${filtered.length} item${filtered.length === 1 ? "" : "s"}`}
            title={activeCategory ?? "All products"}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* pagination controls */}
          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(Math.max(1, page - 1))}
                disabled={page === 1}
                aria-label="Previous page"
                className="neu-pressable neu-focus flex items-center justify-center rounded-neu-sm p-2 text-ink-muted hover:text-accent-blue disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => goToPage(n)}
                  aria-current={page === n ? "page" : undefined}
                  className={`neu-pressable neu-focus min-w-9 rounded-neu-sm px-3 py-2 font-mono text-xs transition-colors ${
                    page === n
                      ? "neu-inset text-accent-blue"
                      : "neu-inset-sm text-ink-muted hover:text-accent-blue"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
                className="neu-pressable neu-focus flex items-center justify-center rounded-neu-sm p-2 text-ink-muted hover:text-accent-blue disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </section>
      )}

      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Don&apos;t see what you need?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Ask before you assume it&apos;s not in stock — most parts can be sourced.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </div>
    </>
  );
}
