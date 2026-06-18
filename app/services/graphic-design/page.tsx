import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Image } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "Graphic Design — RaymonJohns",
  description:
    "Print and digital collateral — certificates, social assets, and presentation decks — built to match the brand, not just fill space.",
};

const categories = [
  {
    label: "Print & Documents",
    items: [
      "Completion certificates and diplomas",
      "Letterheads and branded stationery",
      "Brochures and tri-fold leaflets",
      "ID cards and lanyards",
      "Banners and event signage",
    ],
  },
  {
    label: "Digital & Social",
    items: [
      "Social media post templates (IG, Facebook, LinkedIn)",
      "Cover images and profile assets",
      "Email headers and newsletter layouts",
      "Digital flyers and event cards",
      "YouTube thumbnails and channel art",
    ],
  },
  {
    label: "Presentations",
    items: [
      "Pitch decks and investor presentations",
      "Company profile slide decks",
      "Training and course materials",
      "Report and proposal layouts",
      "Annual review presentations",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Brief & Brand Check",
    body: "Every piece starts with a clear brief — purpose, audience, dimensions, and any existing brand assets. If you have a brand system already, everything is built to match it. If not, we establish a consistent visual foundation.",
  },
  {
    step: "02",
    title: "First Draft",
    body: "A first version is produced and shared for feedback. For recurring formats like social templates, this is also where the layout system is locked in so future pieces stay consistent.",
  },
  {
    step: "03",
    title: "Revisions",
    body: "Edits are made in focused rounds. Clear, specific feedback gets faster, better results than general impressions — I&apos;ll prompt the right questions if it helps.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "Files are delivered in the formats you actually need — print-ready PDF, web-optimised PNG, editable source — not just whatever is easiest to export.",
  },
];

const suited = [
  "Training providers who need professional certificates for graduates and students",
  "Small businesses building consistent marketing collateral for the first time",
  "Teams that have a brand identity but need someone to execute it across formats",
  "Founders preparing pitch decks or company profiles for investor or client meetings",
];

export default function GraphicDesignPage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      {/* Back */}
      <Link
        href="/services"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-coral"
      >
        <ArrowLeft size={14} /> All services
      </Link>

      {/* Hero */}
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="neu-inset-sm flex h-12 w-12 items-center justify-center text-accent-coral">
              <Image size={22} />
            </div>
            <p className="eyebrow text-accent-coral">Service 03</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Graphic<br />Design
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Print and digital collateral built to match the brand — not just fill space. From certificates and social templates to pitch decks and event signage, each piece is designed with the same attention to detail as the brand itself.
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
                Figma · Canva (for editable templates)
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical turnaround</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">2 – 5 business days</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Best for</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Certificates · Social assets · Decks
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Deliverable format</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Print-ready PDF · PNG · Editable source</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* What's on offer */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Scope" title="What I design" />
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map(({ label, items }) => (
            <div key={label} className="neu-raised flex flex-col gap-4 p-6">
              <h3 className="font-display text-base font-bold text-ink">{label}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-coral" />
              <span className="text-sm leading-relaxed text-ink-muted">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Have something to design?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Share what you need — a quick brief is all it takes to get started.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Start a conversation
        </ButtonLink>
      </div>
    </div>
  );
}
