import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Paintbrush } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "Brand Identity — RaymonJohns",
  description:
    "Logo systems, color and type direction, and brand guidelines built to last — not just look good in a presentation.",
};

const process = [
  {
    step: "01",
    title: "Brand Discovery",
    body: "We dig into your business — what you do, who you serve, and how you want to be perceived. Competitor mapping and positioning exercises surface what makes you distinct, before a single mark is drawn.",
  },
  {
    step: "02",
    title: "Direction & Exploration",
    body: "Two or three distinct directions are explored — different takes on tone, form, and visual language. Each is presented with rationale so you understand the thinking, not just the output.",
  },
  {
    step: "03",
    title: "Refinement",
    body: "The chosen direction is pushed further: logo lockups, responsive mark variations, color palette refinement, and typeface pairing. Feedback rounds focus on specifics, not vibes.",
  },
  {
    step: "04",
    title: "Guidelines & Handoff",
    body: "Everything is packaged into a brand guideline document covering usage rules, color values, type specs, and do/don't examples. You get source files plus export-ready formats for every context.",
  },
];

const deliverables = [
  "Primary logo & responsive mark variations",
  "Monogram or icon system",
  "Primary and secondary color palette with values",
  "Typeface pairing and type hierarchy",
  "Brand voice and tone notes",
  "Brand guideline document (PDF + editable source)",
  "Export-ready file package (SVG, PNG, PDF)",
];

const suited = [
  "New businesses that need an identity built from scratch, not picked from a template",
  "Existing brands that have outgrown their original mark and need a considered refresh",
  "Founders who want their visual identity to reflect the quality of their actual product",
  "Companies building a site or collateral who need the brand system to exist first",
];

export default function BrandIdentityPage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      {/* Back */}
      <Link
        href="/services"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-violet"
      >
        <ArrowLeft size={14} /> All services
      </Link>

      {/* Hero */}
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="neu-inset-sm flex h-12 w-12 items-center justify-center text-accent-violet">
              <Paintbrush size={22} />
            </div>
            <p className="eyebrow text-accent-violet">Service 02</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Brand<br />Identity
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            A logo is not a brand — but it&apos;s where most people look first. What you get here is the whole system: a mark that works at every size, a color palette with intent, type choices that carry voice, and the rules to use all of it consistently.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" withArrow>
              Start a project
            </ButtonLink>
            <ButtonLink href="/projects" variant="inset">
              See past work
            </ButtonLink>
          </div>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Tools</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Figma · Illustrator
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical timeline</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">2 – 4 weeks</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Best for</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                New businesses · Rebrands · Pre-launch
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Deliverable format</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">SVG · PNG · PDF + guidelines</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Deliverables */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Deliverables" title="What's included" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {deliverables.map((d) => (
            <li key={d} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-violet" />
              <span className="text-sm leading-relaxed text-ink-muted">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="How it works" title="The process" />
        <div className="grid gap-6 sm:grid-cols-2">
          {process.map(({ step, title, body }) => (
            <div key={step} className="neu-raised flex flex-col gap-3 p-6 sm:p-8">
              <span className="gradient-number text-sm">{step}</span>
              <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Right fit" title="Who this is for" />
        <ul className="flex flex-col gap-3">
          {suited.map((s) => (
            <li key={s} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-violet" />
              <span className="text-sm leading-relaxed text-ink-muted">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Ready to build your brand?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me what you&apos;re building — we&apos;ll give it a mark worth carrying.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Start a conversation
        </ButtonLink>
      </div>
    </div>
  );
}
