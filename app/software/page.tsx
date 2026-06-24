import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SoftwareThumbnail from "@/components/software-thumbnail";
import PlatformIcon from "@/components/platform-icon";
import { softwarePlatforms } from "@/lib/data";
import { accentText } from "@/lib/accent";

export const metadata: Metadata = {
  title: "Software — RaymonJohns",
  description:
    "Curated software picks for Windows, macOS, and Android — tools I actually use.",
};

export default function SoftwarePage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      <SectionHeading
        eyebrow="Software"
        title="Tools worth keeping on every machine"
        description="Four platform lists — Windows, macOS, Android, and Linux — covering development, design, productivity, and the device-repair utilities I reach for regularly. Every pick is something I actually use."
      />

      <div className="grid gap-8 sm:grid-cols-3">
        {softwarePlatforms.map((platform) => (
          <Link
            key={platform.slug}
            href={`/software/${platform.slug}`}
            className="neu-raised neu-pressable neu-focus group flex flex-col gap-0 overflow-hidden"
          >
            {/* thumbnail */}
            <div className="h-44 w-full overflow-hidden">
              <SoftwareThumbnail
                slug={platform.slug}
                className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* card body */}
            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <div
                  className={`neu-inset-sm flex h-12 w-12 items-center justify-center ${accentText[platform.accent]}`}
                >
                  <PlatformIcon slug={platform.slug} className="h-6 w-6" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-blue"
                />
              </div>

              <div>
                <p className={`eyebrow ${accentText[platform.accent]}`}>
                  {platform.items.length} picks
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                  {platform.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {platform.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {Array.from(new Set(platform.items.map((i) => i.category))).map(
                  (cat) => (
                    <span
                      key={cat}
                      className="neu-inset-sm px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted"
                    >
                      {cat}
                    </span>
                  )
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* callout */}
      <div className="neu-inset p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">A note on these lists: </span>
          downloads link directly to the official source or the most reliable
          mirror I know of. Free tools are marked — nothing here requires a
          paid license to get real use out of it.
        </p>
      </div>
    </div>
  );
}
