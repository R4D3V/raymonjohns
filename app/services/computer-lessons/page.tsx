import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";

export const metadata: Metadata = {
  title: "Computer Lessons — RaymonJohns",
  description:
    "Structured computer training covering theory and hands-on practice, from absolute beginner to advanced — one-on-one or in groups, with a certificate on completion.",
};

const levels = [
  {
    step: "01",
    title: "Beginner",
    duration: "4 weeks",
    body: "Start from zero — learn to use a computer with confidence, covering the basics most courses assume you already know.",
  },
  {
    step: "02",
    title: "Intermediate",
    duration: "3 weeks",
    body: "Master MS Office, internet skills, and the productivity tools that come up in everyday work and study.",
  },
  {
    step: "03",
    title: "Advanced",
    duration: "6 weeks",
    body: "Deep dive into programming fundamentals, networking concepts, and more advanced software workflows.",
  },
];

const theoryModules = [
  "Introduction to Computers",
  "Computer Hardware Components",
  "Operating System Fundamentals",
  "File & Folder Management",
  "Computer Networks & Internet",
  "Cybersecurity & Online Safety",
  "Cloud Computing Basics",
  "Troubleshooting Concepts",
];

const practicalSessions = [
  "Microsoft Word, Excel & PowerPoint",
  "Google Workspace",
  "Email & Communication",
  "Touch Typing & Shortcuts",
  "Web Browsing & Research",
  "Basic HTML & Web",
  "Python / JavaScript Intro",
  "Canva Design Basics",
  "Video Editing Basics",
  "Computer Maintenance",
];

const suited = [
  "Never used a computer before and want to start from the basics, no judgement",
  "Comfortable with the basics but want to get faster with Office and everyday tools",
  "Studying or job hunting and need solid digital skills on your CV",
  "Curious about programming and want a beginner-friendly first step",
  "Want one-on-one pace rather than a crowded classroom",
  "Looking for a certificate to show completion of structured training",
];

export default function ComputerLessonsPage() {
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
            <div className="neu-inset-sm flex h-12 w-12 items-center justify-center text-accent-green">
              <GraduationCap size={22} />
            </div>
            <p className="eyebrow text-accent-green">Service 11</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Computer Lessons
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Structured computer training covering both theory and hands-on practice. Learn at your pace, at any skill level — from your first time at a keyboard to programming fundamentals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" withArrow>
              Enroll now
            </ButtonLink>
          </div>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Levels</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                Beginner · Intermediate · Advanced
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Format</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                One-on-one or group sessions
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Scheduling</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Flexible, around you</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">On completion</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Certificate issued</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Training levels */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Pick a starting point" title="Training levels" />
        <div className="grid gap-6 sm:grid-cols-3">
          {levels.map(({ step, title, duration, body }) => (
            <div key={step} className="neu-raised flex flex-col gap-3 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="gradient-number text-sm">{step}</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {duration}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Theory modules */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Foundations" title="Theory modules" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {theoryModules.map((m) => (
            <li key={m} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-green" />
              <span className="text-sm leading-relaxed text-ink-muted">{m}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Practical sessions */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Hands-on" title="Practical sessions" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {practicalSessions.map((p) => (
            <li key={p} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-green" />
              <span className="text-sm leading-relaxed text-ink-muted">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Who it's for */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Right fit" title="Enroll if…" />
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
        <p className="eyebrow">Ready to learn?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me your skill level — we&apos;ll find the right starting point.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
