import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, LayoutGrid } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "App Installation — RaymonJohns",
  description:
    "Getting the right software onto your Windows or macOS machine — productivity suites, creative apps, developer toolchains, and everything in between.",
};

const process = [
  {
    step: "01",
    title: "Requirements Gathering",
    body: "We start by understanding what you actually need the machine to do — work, design, development, or general use — so the software list makes sense for your workflow rather than just ticking boxes.",
  },
  {
    step: "02",
    title: "Source & Verify",
    body: "Every application is downloaded from its official source or a verified distribution channel. No cracked software, no bundled toolbars, no surprise installs alongside what you asked for.",
  },
  {
    step: "03",
    title: "Install & Configure",
    body: "Applications are installed with the right settings for your use case — not just default-clicked through. File associations, default apps, startup behaviour, and user preferences are all set correctly.",
  },
  {
    step: "04",
    title: "Activation & Handover",
    body: "Licensed software is activated against your keys or accounts. You're walked through what was installed, where everything lives, and any first-run steps you'll need to know.",
  },
];

const deliverables = [
  "Productivity suite setup (Microsoft 365, LibreOffice, Google Drive)",
  "Creative app installation (Adobe CC, Figma, DaVinci Resolve, Canva)",
  "Browser setup with profile, extensions & sync",
  "Antivirus & security software installation",
  "Developer toolchain setup (VS Code, Git, Node.js, Docker)",
  "Communication apps (Zoom, Teams, Slack, WhatsApp Desktop)",
  "Media & entertainment apps",
  "Software activation & licence management",
];

const suited = [
  "Fresh Windows or macOS install that needs all the software set up from scratch",
  "New laptop or PC where everything needs to be installed and configured",
  "Switching from Windows to Mac (or vice versa) and need the equivalent apps",
  "Business setting where multiple machines need the same software stack",
  "Someone who knows what they want installed but not how to configure it correctly",
  "Developer environment setup — Node, Git, Docker, VS Code, extensions and all",
];

export default function AppInstallationPage() {
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
              <LayoutGrid size={22} />
            </div>
            <p className="eyebrow text-accent-coral">Service 09</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            App Installation
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Getting the right software onto your Windows or macOS machine — installed from official sources, configured correctly, activated, and ready to use. For individuals, developers, and businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" withArrow>
              Book a setup session
            </ButtonLink>
          </div>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Platforms</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Windows · macOS</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical turnaround</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">1 – 3 hours</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Use cases</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Personal · Business · Developer
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Sources</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Official only — no cracks or bundles</dd>
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
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-coral" />
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
        <SectionHeading eyebrow="Right fit" title="This is for you if…" />
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
        <p className="eyebrow">Need software sorted?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me what you need on your machine — we&apos;ll get it set up properly.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
