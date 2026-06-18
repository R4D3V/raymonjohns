import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers, Zap, Code2, Globe } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";
import { accentText } from "@/lib/accent";

export const metadata: Metadata = {
  title: "Web Design & Development — RaymonJohns",
  description:
    "Custom-built Next.js sites designed and shipped by one person — from marketing pages to multi-page client portals.",
};

const process = [
  {
    step: "01",
    title: "Discovery & Architecture",
    body: "We start by mapping out what the site needs to do — audience, goals, page structure, and content inventory. This shapes the information architecture before a single component is written.",
  },
  {
    step: "02",
    title: "Design in Code",
    body: "Rather than a handoff from Figma to dev, design decisions happen directly in the build. This keeps visual and functional thinking connected throughout and cuts the round-trip cost of spec-drift.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    body: "Pages are built in Next.js with the App Router, TypeScript, and Tailwind CSS. You get a staging preview early so we can refine in context rather than against a static comp.",
  },
  {
    step: "04",
    title: "Ship & Hand Off",
    body: "Deployment to Vercel, a walkthrough of the codebase, and a clear path for ongoing edits. You leave with a site you can actually maintain.",
  },
];

const deliverables = [
  "Information architecture & page map",
  "Responsive UI — mobile-first, tested across breakpoints",
  "Next.js App Router with TypeScript",
  "Tailwind CSS v4 design system",
  "Framer Motion animations & scroll choreography",
  "Vercel deployment & performance audit",
  "Component documentation for future edits",
];

const suited = [
  "Agencies and studios that need a portfolio site matching the quality of their client work",
  "Startups building a first marketing site that needs to convert, not just look good",
  "Businesses replacing a slow, outdated, or template-constrained site",
  "Existing clients expanding a previous build with new pages or sections",
];

export default function WebDesignPage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      {/* Back */}
      <Link
        href="/services"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <ArrowLeft size={14} /> All services
      </Link>

      {/* Hero */}
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="neu-inset-sm flex h-12 w-12 items-center justify-center text-accent-blue">
              <Code2 size={22} />
            </div>
            <p className="eyebrow text-accent-blue">Service 01</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Web Design &<br />Development
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Custom-built sites on Next.js — designed and shipped by the same person. No design-to-dev handoff, no spec drift, no agency markup. Just a fast, well-crafted site built for your actual goals.
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
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Stack</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Next.js · TypeScript · Tailwind CSS v4
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical timeline</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">2 – 6 weeks</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Best for</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Marketing sites · Portfolios · Client portals
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Hosting</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Vercel (recommended)</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* What's included */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Deliverables" title="What's included" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {deliverables.map((d) => (
            <li key={d} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-blue" />
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
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-blue" />
              <span className="text-sm leading-relaxed text-ink-muted">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Ready to build?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me what you&apos;re trying to build — we&apos;ll work out the rest.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Start a conversation
        </ButtonLink>
      </div>
    </div>
  );
}
