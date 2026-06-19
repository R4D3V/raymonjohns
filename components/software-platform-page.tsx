"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import SoftwareThumbnail from "@/components/software-thumbnail";
import PlatformIcon from "@/components/platform-icon";
import SectionHeading from "@/components/section-heading";
import SearchInput from "@/components/search-input";
import type { SoftwarePlatform } from "@/lib/data";
import { accentText } from "@/lib/accent";

type Props = { platform: SoftwarePlatform };

const categoryOrder = ["Development", "Design", "Device Tools", "Productivity", "Utilities"];

export default function SoftwarePlatformPage({ platform }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = categoryOrder.filter((cat) =>
    platform.items.some((item) => item.category === cat)
  );

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return platform.items.filter((item) => {
      const matchesCategory = activeCategory ? item.category === activeCategory : true;
      const matchesQuery = q
        ? item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [platform.items, query, activeCategory]);

  const categoriesToShow = activeCategory ? [activeCategory] : categories;

  return (
    <div className="flex flex-col gap-14 py-12 sm:py-16">
      {/* back */}
      <Link
        href="/software"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <ArrowLeft size={14} /> All platforms
      </Link>

      {/* banner */}
      <div className="neu-raised-lg aspect-[21/6] w-full overflow-hidden rounded-neu-lg">
        <SoftwareThumbnail slug={platform.slug} className="h-full w-full rounded-neu-lg" />
      </div>

      {/* header */}
      <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className={`neu-inset-sm flex h-12 w-12 items-center justify-center ${accentText[platform.accent]}`}>
              <PlatformIcon slug={platform.slug} className="h-6 w-6" />
            </div>
            <p className={`eyebrow ${accentText[platform.accent]}`}>{platform.label}</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {platform.label} Software
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-muted">
            {platform.description}
          </p>
        </div>

        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Total picks</dt>
              <dd className={`mt-1 font-display text-2xl font-bold ${accentText[platform.accent]}`}>
                {platform.items.length}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Categories</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                    className={`neu-pressable neu-focus px-3 py-1 font-mono text-[10px] uppercase tracking-wide transition-colors ${
                      activeCategory === cat
                        ? `neu-inset ${accentText[platform.accent]}`
                        : "neu-inset-sm text-ink-muted hover:text-accent-blue"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Paid tools</dt>
              <dd className="mt-1 text-sm text-ink">
                {platform.items.filter((i) => !i.free).length === 0
                  ? "None — all free"
                  : `${platform.items.filter((i) => !i.free).length} paid`}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* search */}
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder={`Search ${platform.label} tools...`}
        className="max-w-lg"
      />

      {/* no results */}
      {filteredItems.length === 0 && (
        <div className="neu-inset flex flex-col items-center gap-2 rounded-neu-lg p-10 text-center">
          <p className="text-ink">No tools match &quot;{query}&quot;.</p>
          <p className="text-sm text-ink-muted">Try a different word, or clear the search.</p>
        </div>
      )}

      {/* product list, grouped by category */}
      {filteredItems.length > 0 &&
        categoriesToShow.map((cat) => {
        const catItems = filteredItems.filter((item) => item.category === cat);
        if (catItems.length === 0) return null;
        return (
          <section key={cat}>
            <SectionHeading eyebrow={cat} title={cat} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {catItems.map((item) => (
                <div
                  key={item.id}
                  className="neu-raised flex flex-col gap-4 p-6"
                >
                  {/* card header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className={`neu-inset-sm flex h-11 w-11 shrink-0 items-center justify-center font-display text-base font-bold ${accentText[platform.accent]}`}>
                      {item.name.charAt(0)}
                    </div>
                    <div className="flex items-center gap-2">
                      {!item.free && (
                        <span className="neu-inset-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-coral">
                          Paid
                        </span>
                      )}
                      <span className="font-mono text-[10px] text-ink-faint">
                        v{item.version}
                      </span>
                    </div>
                  </div>

                  {/* name + description */}
                  <div className="flex-1">
                    <h3 className="font-display text-base font-bold text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>

                  {/* meta row */}
                  <div className="flex items-center gap-3">
                    <span className="neu-inset-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                      {item.size}
                    </span>
                    <span className={`neu-inset-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${accentText[platform.accent]}`}>
                      {item.free ? "Free" : "Paid"}
                    </span>
                  </div>

                  {/* download button */}
                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`neu-pressable neu-focus mt-1 flex w-full items-center justify-center gap-2 rounded-neu-pill px-4 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${accentText[platform.accent]} neu-raised hover:opacity-80`}
                  >
                    <Download size={13} />
                    Download
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* nav to other platforms */}
      <div className="neu-raised flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
        <div>
          <p className="eyebrow">Other platforms</p>
          <p className="mt-1 text-sm text-ink-muted">Browse picks for the other two.</p>
        </div>
        <div className="flex gap-3">
          {(["windows", "macos", "android"] as const)
            .filter((s) => s !== platform.slug)
            .map((s) => (
              <Link
                key={s}
                href={`/software/${s}`}
                className="neu-raised-sm neu-pressable neu-focus px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue capitalize"
              >
                {s === "macos" ? "macOS" : s}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
