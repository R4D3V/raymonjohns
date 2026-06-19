import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle, KeyRound } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { resellTools } from "@/lib/data";

export const metadata: Metadata = {
  title: "Software Reselling — RaymonJohns",
  description:
    "Licensed activations for UnlockTool, Pandora, BorneoSchematics, Chimera Tool, and GiveMeROM — the GSM repair tools technicians rely on daily.",
};

const deliverables = [
  "Genuine activation/license for the tool you need",
  "Guidance on which tool fits your specific job",
  "Setup, login & first-use walkthrough",
  "Renewal reminders when your license is close to expiry",
];

const suited = [
  "Repair technicians who need a licensed unlock or flashing tool, not a cracked copy",
  "Shops wanting schematics and hardware data on hand for board-level diagnostics",
  "Anyone unsure which tool covers their specific brand or chipset",
  "Existing tool users due for a renewal who'd rather not deal with it themselves",
];

const WHATSAPP_NUMBER = "256751621506";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'm interested in the Software Reselling service — I'd like to ask about purchasing a license."
)}`;

export default function SoftwareResellingPage() {
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
              <KeyRound size={22} />
            </div>
            <p className="eyebrow text-accent-blue">Service</p>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Software Reselling
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Licensed activations for the GSM tools that make phone unlocking, flashing, and board-level repair possible — sourced properly, set up for you, and ready to use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-raised neu-pressable neu-focus inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider text-accent-green"
            >
              <MessageCircle size={16} />
              Inquire about purchase
            </a>
          </div>
        </div>

        {/* At a glance */}
        <div className="neu-raised h-fit p-6 sm:p-8">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Tools</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">
                UnlockTool · Pandora · BorneoSchematics · Chimera · GiveMeROM
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Licensing</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Time-based digital activations</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Support</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">Setup help included</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* The tools */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="What I resell" title="The five tools" />
        <div className="grid gap-6 sm:grid-cols-2">
          {resellTools.map(({ slug, name, tagline, image, summary }) => (
            <Link
              key={slug}
              href={`/services/software-reselling/${slug}`}
              className="neu-raised neu-pressable neu-focus group flex flex-col gap-4 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="neu-inset-sm flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden bg-white p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-blue"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-accent-blue">
                  {tagline}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{summary}</p>
            </Link>
          ))}
        </div>
      </section>

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

      {/* Who it's for */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Right fit" title="This is for you if…" />
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
        <p className="eyebrow">Need a license activated?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me which tool and which device range you work on.
        </h2>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-raised neu-pressable neu-focus inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider text-accent-green"
        >
          <MessageCircle size={16} />
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

