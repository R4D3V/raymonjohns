import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Apple } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "macOS Installation — RaymonJohns",
  description:
    "Fresh macOS installs, reinstalls, and system recovery — including Hackintosh setups and migration from an old Mac to a new one.",
};

const process = [
  {
    step: "01",
    title: "System Check",
    body: "The Mac's hardware is checked against Apple's compatibility list for the target macOS version. For Hackintosh builds, the CPU, GPU, and chipset are verified for OpenCore compatibility before any work starts.",
  },
  {
    step: "02",
    title: "Backup & Prepare",
    body: "Time Machine or a manual backup is created if there's data to preserve. The target volume is erased and formatted correctly — APFS for modern Macs, HFS+ where required for older hardware.",
  },
  {
    step: "03",
    title: "Install",
    body: "A clean macOS install via a bootable USB installer — not a migration, not an upgrade over a broken system. Full installation from scratch, correct for your hardware and the macOS version you need.",
  },
  {
    step: "04",
    title: "Setup & Migration",
    body: "iCloud sign-in, system preferences configured, and — if migrating from another Mac — Migration Assistant run to bring over your data, apps, and settings cleanly.",
  },
];

const deliverables = [
  "Clean macOS installation (Ventura, Sonoma, Sequoia)",
  "APFS volume setup & formatting",
  "Bootable USB installer creation",
  "Hackintosh EFI & OpenCore setup",
  "Mac-to-Mac data migration via Migration Assistant",
  "iCloud, Apple ID & system preferences setup",
  "macOS Recovery & Internet Recovery troubleshooting",
  "Post-install updates & verification",
];

const suited = [
  "Mac running slowly or behaving erratically after years of updates",
  "Failed macOS update that left the system in a broken state",
  "Second-hand Mac you want wiped clean before use",
  "Non-Apple hardware you want to run macOS on (Hackintosh)",
  "Migrating from an old Mac to a new one and want the transfer done properly",
  "macOS Recovery not working and you need an external installer",
];

export default function MacOSInstallationPage() {
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
              <Apple size={22} />
            </div>
            <p className="eyebrow text-accent-green">Service 08</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            macOS<br />Installation
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Clean installs, system recovery, Hackintosh setups, and Mac-to-Mac migrations — done correctly from a bootable installer, not patched over a broken system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" withArrow>
              Book an install
            </ButtonLink>
          </div>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Versions</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Ventura · Sonoma · Sequoia</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical turnaround</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">2 – 5 hours</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Hackintosh</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">OpenCore · EFI configuration</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Migration</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Mac-to-Mac via Migration Assistant</dd>
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
        <SectionHeading eyebrow="Right fit" title="This is for you if…" />
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
        <p className="eyebrow">Need macOS sorted?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me the Mac and what&apos;s going on — we&apos;ll take it from there.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
