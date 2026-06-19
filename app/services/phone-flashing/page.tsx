import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "Phone Flashing — RaymonJohns",
  description:
    "Stock firmware restoration, custom ROM installation, IMEI repair, and bootloader unlocking — handled with the right tools for your exact device model.",
};

const process = [
  {
    step: "01",
    title: "Device Identification",
    body: "Before any flash, the exact device model, chipset, and current firmware version are confirmed. Using the wrong scatter file or firmware package bricks devices — this step is non-negotiable.",
  },
  {
    step: "02",
    title: "Firmware Sourcing",
    body: "Stock firmware is sourced from official or verified mirrors specific to your device's regional variant. Custom ROMs are cross-checked against your hardware to confirm compatibility.",
  },
  {
    step: "03",
    title: "Flash",
    body: "MTK devices are flashed via SP Flash Tool with the correct scatter file. Qualcomm devices via EDL or QFIL. Samsung via Odin. The right tool for the right chipset, every time.",
  },
  {
    step: "04",
    title: "Post-Flash Verification",
    body: "After flashing, the device is booted, baseband and IMEI are verified, network registration is tested, and basic hardware functions are confirmed before handover.",
  },
];

const deliverables = [
  "Stock firmware flashing (MTK & Qualcomm)",
  "Samsung firmware via Odin",
  "Custom ROM installation (AOSP, LineageOS, etc.)",
  "Custom recovery installation (TWRP, OrangeFox)",
  "IMEI repair & baseband restoration",
  "Bootloader unlock",
  "FRP (Factory Reset Protection) bypass",
  "Dead / bootloop device recovery",
];

const suited = [
  "Phone stuck in a bootloop or on a black screen after a failed update",
  "IMEI showing as null or device not registering on any network",
  "Device locked to a carrier you no longer use",
  "Google / Samsung account lock after a factory reset",
  "Want to install a custom ROM for privacy or extended support",
  "Dead phone that needs firmware to recover — not hardware repair",
];

export default function PhoneFlashingPage() {
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
              <Zap size={22} />
            </div>
            <p className="eyebrow text-accent-coral">Service 06</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Phone Flashing
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Firmware restoration, custom ROM installs, IMEI repair, and bootloader work — done with proper tools and the right files for your specific device. No generic guides, no guesswork.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" withArrow>
              Book a flashing session
            </ButtonLink>
          </div>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Chipsets</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">MediaTek · Qualcomm · Exynos</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Tools used</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">SP Flash Tool · QFIL · Odin</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical turnaround</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">1 – 4 hours</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Risk</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Assessed per device before any work</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* What's included */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Deliverables" title="What's covered" />
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
        <p className="eyebrow">Got a device that needs flashing?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me the model and the problem — we&apos;ll sort the firmware.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
