import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clapperboard,
  Download,
  Languages,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "MunoWatch APK — RaymonJohns",
  description:
    "Download the MunoWatch APK directly — translated movies and TV shows made easy, fun, and comfortable to watch.",
};

const features = [
  {
    icon: Languages,
    title: "Veejay media localization",
    body: "A built-in localization mechanism that makes foreign movies and TV shows easy, fun, and comfortable for local audiences to consume.",
  },
  {
    icon: Clapperboard,
    title: "Translated movies & TV shows",
    body: "Foreign film and series brought into your language — latest releases and ongoing shows ready to stream.",
  },
  {
    icon: MonitorSmartphone,
    title: "Watch on any screen",
    body: "Android app for your phone, an iOS app, and a full web app — pick up where you left off across devices.",
  },
  {
    icon: Sparkles,
    title: "Easy, fun & comfortable",
    body: "A clean, simple interface built around one goal: making translated entertainment effortless to find and watch.",
  },
];

const details = [
  { label: "Platform", value: "Android" },
  { label: "App", value: "MunoWatch" },
  { label: "Package", value: "com.munowatch.pro" },
  { label: "Size", value: "≈ 9 MB" },
  { label: "Developer", value: "Munoclub Company Limited" },
  { label: "Content", value: "Translated movies & TV shows" },
];

const steps = [
  {
    step: "01",
    title: "Download the APK",
    body: "Tap the download button below to save the MunoWatch APK to your phone. It's small — about 9 MB.",
  },
  {
    step: "02",
    title: "Allow unknown sources",
    body: "On first install, Android will ask you to allow installing from unknown sources for this file. Just follow the on-screen prompt.",
  },
  {
    step: "03",
    title: "Install & open",
    body: "Open the downloaded file, tap Install, then launch MunoWatch and sign in or create an account to start watching.",
  },
];

const notes = [
  "The APK is a direct download hosted on this site — no waiting, no redirects.",
  "Installing from unknown sources is required since the app isn't distributed through the Google Play store.",
  "The same MunoWatch account works on the Android app, iOS app, and web app.",
  "For help or the latest version, reach out through the contact section below.",
];

export default function ApkPage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      {/* Back */}
      <Link
        href="/"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <ArrowLeft size={14} /> Home
      </Link>

      {/* Hero */}
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="neu-inset-sm flex h-12 w-12 items-center justify-center text-accent-blue">
              <Smartphone size={22} />
            </div>
            <p className="eyebrow text-accent-blue">Android app</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            MunoWatch
          </h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
            Watch Translated Movies Online &amp; TV Shows
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            MunoWatch provides its audience with a media localization mechanism
            called Veejay that makes it easy, fun, and comfortable for domestic
            audiences to consume foreign media and entertainment content.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/apk/munowatch.apk"
              download
              className="neu-pressable neu-focus inline-flex items-center gap-2 rounded-neu-pill bg-accent-blue px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#fff] transition-colors hover:opacity-85"
            >
              <Download size={14} /> Download APK
            </a>
            <ButtonLink href="https://apps.apple.com/app/id1640656202" withArrow>
              iOS app
            </ButtonLink>
          </div>
          <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            <ShieldCheck size={13} className="text-accent-coral" />
            Direct download — served from this site, no mirrors
          </p>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {d.label}
                </dt>
                <dd className="mt-1 font-display text-sm font-bold text-ink">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features */}
      <section className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="What it does"
          title="Translated entertainment, made comfortable"
          description="Foreign movies and TV shows shouldn't be a barrier. MunoWatch brings them into your language and keeps the watching experience fun."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="neu-raised flex flex-col gap-3 p-6 sm:p-8">
              <div className="neu-inset-sm flex h-11 w-11 items-center justify-center text-accent-blue">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Install */}
      <section className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Getting started"
          title="Install the APK in three steps"
          description="The file downloads straight from this site, then installs like any other Android app."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map(({ step, title, body }) => (
            <div key={step} className="neu-raised flex flex-col gap-3 p-6">
              <span className="gradient-number text-sm">{step}</span>
              <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Good to know" title="Notes on this build" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {notes.map((n) => (
            <li key={n} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-coral" />
              <span className="text-sm leading-relaxed text-ink-muted">{n}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Ready to watch?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Download MunoWatch and start watching translated movies &amp; TV shows.
        </h2>
        <a
          href="/apk/munowatch.apk"
          download
          className="neu-pressable neu-focus inline-flex items-center gap-2 rounded-neu-pill bg-accent-blue px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#fff] transition-colors hover:opacity-85"
        >
          <Download size={14} /> Download APK
        </a>
        <p className="mt-2 text-sm text-ink-muted">
          Questions? Email{" "}
          <a
            href="mailto:info@munowatch.com"
            className="text-accent-blue underline-offset-4 hover:underline"
          >
            info@munowatch.com
          </a>
        </p>
      </div>
    </div>
  );
}
