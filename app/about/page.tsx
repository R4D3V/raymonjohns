import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";
import AboutIllustration from "@/components/about-illustration";
import RadialGauge from "@/components/radial-gauge";
import SkillIcon from "@/components/skill-icon";
import { skillGroups } from "@/lib/data";
import { accentText } from "@/lib/accent";

export const metadata: Metadata = {
  title: "About — RaymonJohns",
  description: "Frontend developer based in Entebbe, Uganda.",
};

const timeline = [
  {
    year: "2023",
    title: "Started building for fun",
    body: "this was my first foray into frontend development.",
  },
  {
    year: "2024",
    title: "Started building client sites full-time",
    body: "Moved from one-off projects into a steady freelance practice — web design, brand identity, and graphic design under Freelance.",
  },
  {
    year: "2025",
    title: "Standardised on the App Router",
    body: "Settled into a consistent stack: Next.js App Router, Tailwind CSS, Framer Motion, pnpm — and started treating migrations as their own service line.",
  },
  {
    year: "2026",
    title: "Tailwind v4 and the editorial rebuild era",
    body: "Rebuilt the RaymonJohns portfolio from the ground up, took on Kings Key Tech's full site and certificate system, and pushed Mbuni Safaris through two major framework upgrades.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 py-12 sm:py-16">
      <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            I build the kind of interfaces I&apos;d want to use myself.
          </h1>
          <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
            <p>
              I&apos;m a frontend developer and designer based in Entebbe,
              Uganda, running design and development for direct clients.
            </p>
            <p>
              I care about interfaces that feel considered rather than assembled
              — consistent type scales, motion that has a reason to exist, and
              components that hold up once real content lands in them instead of
              placeholder text.
            </p>
            <p>
              Off-screen, I spend a fair amount of time flashing and repairing
              Android and iOS devices. It scratches a different itch than the
              browser: same patience for debugging, very different feedback
              loop.
            </p>
          </div>
        </div>

        <div className="neu-raised p-6 sm:p-8">
          <p className="eyebrow">Currently</p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <span className="neu-inset-sm mt-0.5 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-sm text-ink-muted">
                Freelance from{" "}
                <span className="text-ink font-medium">RaymonJohns</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="neu-inset-sm mt-0.5 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-sm text-ink-muted">
                Building on{" "}
                <span className="text-ink font-medium">
                  Next.js 16 &amp; Tailwind CSS v4 + other technologies I enjoy
                  using.
                </span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="neu-inset-sm mt-0.5 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-sm text-ink-muted">
                Open to{" "}
                <span className="text-ink font-medium">
                  new freelance projects
                </span>
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <ButtonLink
              href="/contact"
              withArrow
              className="w-full justify-center"
            >
              Say hello
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="neu-raised-lg overflow-hidden p-6 sm:p-10">
        <AboutIllustration className="w-full" />
      </div>

      <section>
        <SectionHeading
          eyebrow="How I got here"
          title="A short, honest timeline"
          description="Not a highlight reel — the actual order things happened in."
        />
        <div className="mt-10 space-y-6">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className="neu-raised grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:items-start sm:p-8"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                <span className="gradient-number text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {item.year}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I actually spend time on"
          description="Self-rated, not benchmarked — a rough guide to where I'm strongest versus where I'm still building reps."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="neu-raised flex gap-6 p-6 sm:p-8">
              <RadialGauge value={group.value} accent={group.accent} size={104} />
              <div>
                <div
                  className={`neu-inset-sm mb-3 flex h-11 w-11 items-center justify-center ${accentText[group.accent]}`}
                >
                  <SkillIcon label={group.label} />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {group.label}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`font-mono text-xs ${accentText[group.accent]}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="neu-inset p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-ink-muted">
            <span className="font-semibold text-ink">A note on the numbers: </span>
            these are deliberately conservative — a working snapshot rather
            than a sales pitch. They move as the work does.
          </p>
        </div>
      </section>
    </div>
  );
}
