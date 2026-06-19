import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Monitor } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "Windows Installation — RaymonJohns",
  description:
    "Clean Windows installs, driver setup, activation, and optimisation — leaving you with a fast, bloat-free system ready from day one.",
};

const process = [
  {
    step: "01",
    title: "Hardware Assessment",
    body: "Before the install, the machine's specs are checked — CPU, RAM, storage, and TPM version — to confirm whether Windows 10 or 11 is appropriate and what drivers will be needed.",
  },
  {
    step: "02",
    title: "Data Backup",
    body: "If there's anything worth saving on the existing system, it gets backed up before anything is wiped. You tell us what matters; we make sure it's safe.",
  },
  {
    step: "03",
    title: "Clean Installation",
    body: "A genuine clean install — not a reset, not an upgrade over a broken system. Fresh Windows, partitioned correctly, with no leftover junk from the previous install.",
  },
  {
    step: "04",
    title: "Drivers, Updates & Optimisation",
    body: "All device drivers installed, Windows Update run to completion, unnecessary startup items and telemetry trimmed back. You get a machine that boots fast and stays that way.",
  },
];

const deliverables = [
  "Clean Windows 10 or Windows 11 installation",
  "Correct partitioning (MBR or GPT as appropriate)",
  "Full driver installation (GPU, network, audio, chipset)",
  "Windows activation",
  "Windows Update to current patch level",
  "Startup optimisation & bloatware removal",
  "Essential software setup (browser, antivirus, Office if licensed)",
  "Post-install performance check",
];

const suited = [
  "Laptop or desktop running slow and a reset hasn't helped",
  "New build or second-hand machine that needs a clean starting point",
  "System corrupted by a virus, failed update, or bad driver",
  "Upgrading from Windows 10 to Windows 11 on compatible hardware",
  "Machine that came with a heavily customised OEM install you want replaced",
  "Any situation where you just want a clean, working Windows from scratch",
];

export default function WindowsInstallationPage() {
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
              <Monitor size={22} />
            </div>
            <p className="eyebrow text-accent-violet">Service 07</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Windows<br />Installation
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            A proper clean install — not a reset over a broken system. Windows 10 or 11, correctly configured, with all drivers in place, activation sorted, and the bloat trimmed. Fast from day one.
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
              <dd className="mt-1 font-display text-sm font-bold text-ink">Windows 10 · Windows 11</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical turnaround</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">2 – 4 hours</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Devices</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Laptops · Desktops · All-in-ones
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Activation</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Included (licence required)</dd>
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
        <SectionHeading eyebrow="Right fit" title="This is for you if…" />
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
        <p className="eyebrow">Need a clean install?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me about the machine — we&apos;ll get Windows running properly.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
