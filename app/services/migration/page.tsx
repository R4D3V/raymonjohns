import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRightLeft } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "Site Migration & Performance — RaymonJohns",
  description:
    "Moving legacy builds onto a modern stack — Vite or CRA into Next.js, Tailwind v3 into v4 — without losing what already worked.",
};

const migrationTypes = [
  {
    from: "Vite / CRA",
    to: "Next.js 15+",
    notes: "Move to a production-grade framework with SSR, App Router, and built-in image optimisation without rebuilding the whole product.",
  },
  {
    from: "Tailwind CSS v3",
    to: "Tailwind CSS v4",
    notes: "Upgrade to v4&apos;s CSS-first theming, new utility layer, and improved performance — cleanly, without carrying old patterns forward.",
  },
  {
    from: "Legacy React",
    to: "React 18 / 19",
    notes: "Update to concurrent features, the new JSX transform, and modern hooks patterns — resolving the dependency warnings that build up over time.",
  },
  {
    from: "Shared hosting / cPanel",
    to: "Vercel / modern hosting",
    notes: "Move off slow, constrained shared hosting to a CDN-backed platform with preview deployments, automatic HTTPS, and zero-config CI.",
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Dependency Map",
    body: "The existing build is reviewed end to end — routes, components, dependencies, and any patterns that are tightly coupled to the old stack. This surfaces what migrates cleanly and what needs to be rethought.",
  },
  {
    step: "02",
    title: "Staged Migration Plan",
    body: "Migration is broken into stages so the site remains functional throughout. No big-bang rewrites — we move one layer at a time, testing at each boundary.",
  },
  {
    step: "03",
    title: "Build & Test",
    body: "The migration is executed with the original content, routes, and logic preserved. Behaviour differences between old and new stack are caught early, before they become production bugs.",
  },
  {
    step: "04",
    title: "Performance Audit & Ship",
    body: "Once the build is clean, a Lighthouse audit identifies any remaining gains — image formats, font loading strategy, bundle size. Then it ships, with a clear handoff so you can keep it current.",
  },
];

const deliverables = [
  "Pre-migration audit report",
  "Clean Next.js App Router codebase",
  "Tailwind v4 upgrade (if applicable)",
  "Dependency updates & security patches",
  "Vercel deployment configuration",
  "Lighthouse performance audit",
  "Post-migration handoff notes",
];

const suited = [
  "Teams running a Vite or CRA build that needs the routing and rendering benefits of Next.js",
  "Projects blocked on Tailwind v3 patterns that need a clean path to v4",
  "Sites on shared hosting that are slow, hitting limits, or getting in the way of dev workflow",
  "Codebases with dependency debt that has been building for a year or more",
];

export default function MigrationPage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      {/* Back */}
      <Link
        href="/services"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-green"
      >
        <ArrowLeft size={14} /> All services
      </Link>

      {/* Hero */}
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="neu-inset-sm flex h-12 w-12 items-center justify-center text-accent-green">
              <ArrowRightLeft size={22} />
            </div>
            <p className="eyebrow text-accent-green">Service 04</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Site Migration &<br />Performance
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Moving legacy builds onto a modern stack without losing what already worked. Whether it&apos;s Vite to Next.js, Tailwind v3 to v4, or a dependency overhaul — the goal is a clean, fast, maintainable codebase on the other side.
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
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Primary stack target</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Next.js 15 · Tailwind v4 · React 19
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical timeline</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">1 – 3 weeks</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Best for</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Legacy rebuilds · Dependency upgrades · Hosting moves
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Hosting target</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Vercel (recommended)</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Migration types */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="What I migrate" title="Common migration paths" />
        <div className="grid gap-4 sm:grid-cols-2">
          {migrationTypes.map(({ from, to, notes }) => (
            <div key={from} className="neu-raised flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-ink-muted line-through">{from}</span>
                <ArrowRightLeft size={14} className="shrink-0 text-accent-green" />
                <span className="font-mono text-sm font-bold text-accent-green">{to}</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Deliverables" title="What's included" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {deliverables.map((d) => (
            <li key={d} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-green" />
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
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-green" />
              <span className="text-sm leading-relaxed text-ink-muted">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Ready to modernise your stack?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Share your current setup — we&apos;ll map out a clean path forward.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Start a conversation
        </ButtonLink>
      </div>
    </div>
  );
}
