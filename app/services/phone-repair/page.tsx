import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Wrench } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "Phone Repair — RaymonJohns",
  description:
    "Screen replacements, battery swaps, charging port fixes, camera repairs — diagnosed properly before anything is touched.",
};

const process = [
  {
    step: "01",
    title: "Free Diagnostic",
    body: "Every repair starts with a proper diagnostic — hardware and software — before any parts are ordered or work begins. No guesswork, no surprise charges.",
  },
  {
    step: "02",
    title: "Quote & Approval",
    body: "You get a clear quote covering parts and labour. Nothing happens until you approve it. If the repair isn't worth it, you'll hear that too.",
  },
  {
    step: "03",
    title: "Repair",
    body: "Parts sourced to match your device model. Screen, battery, port, camera, speaker — replaced using the right tools and the right components for your exact make.",
  },
  {
    step: "04",
    title: "Quality Check & Return",
    body: "Every repaired device is tested fully before handover — touch response, display uniformity, camera, audio, charging, and network — so you leave with a phone that works.",
  },
];

const deliverables = [
  "Free diagnostic before any repair",
  "Screen & display replacement (LCD and AMOLED)",
  "Battery replacement & health restoration",
  "Charging port repair & replacement",
  "Camera module replacement (front & rear)",
  "Speaker, earpiece & microphone repair",
  "Back glass & housing replacement",
  "Water damage assessment & cleaning",
];

const suited = [
  "Cracked or unresponsive screen that makes the phone unusable",
  "Battery that no longer holds a charge or drains within hours",
  "Charging port that only works at a certain angle — or not at all",
  "Camera producing blurry, green, or blank images",
  "Phone that took a water hit and started behaving strangely",
  "Any physical damage you'd rather repair than replace",
];

export default function PhoneRepairPage() {
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
              <Wrench size={22} />
            </div>
            <p className="eyebrow text-accent-blue">Service 05</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Phone Repair
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Screens, batteries, charging ports, cameras, speakers — diagnosed first, then fixed with the right parts for your exact device. No unnecessary replacements, no hidden costs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" withArrow>
              Book a repair
            </ButtonLink>
          </div>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Diagnostic</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Free — no obligation</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Typical turnaround</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Same day – 48 hours</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Devices covered</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Android · iPhone · Feature phones
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Parts</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Model-matched, quality-checked</dd>
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
        <SectionHeading eyebrow="Right fit" title="Bring it in if…" />
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
        <p className="eyebrow">Ready to fix it?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Describe what&apos;s wrong — we&apos;ll take it from there.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
