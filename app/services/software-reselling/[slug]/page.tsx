import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { resellTools } from "@/lib/data";

const WHATSAPP_NUMBER = "256751621506";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resellTools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = resellTools.find((t) => t.slug === slug);
  if (!tool) return { title: "Software Reselling — RaymonJohns" };
  return {
    title: `${tool.name} — RaymonJohns`,
    description: tool.summary,
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = resellTools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'm interested in purchasing a ${tool.name} license — could you tell me more about pricing and activation?`
  )}`;

  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      {/* Back */}
      <Link
        href="/services/software-reselling"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <ArrowLeft size={14} /> Software Reselling
      </Link>

      {/* Hero */}
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div>
          <div className="flex items-center gap-4">
            <div className="neu-inset-sm flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden bg-white p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.image}
                alt={`${tool.name} logo`}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="eyebrow text-accent-blue">{tool.tagline}</p>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {tool.name}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            {tool.summary}
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
          <p className="eyebrow">Best for</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{tool.bestFor}</p>
        </div>
      </div>

      {/* About */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="About this tool" title={`What ${tool.name} does`} />
        <div className="grid gap-4">
          {tool.body.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Capabilities" title="What it can do" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {tool.features.map((f) => (
            <li key={f} className="neu-raised flex items-start gap-3 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-blue" />
              <span className="text-sm leading-relaxed text-ink-muted">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Other tools */}
      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Looking for something else" title="Other tools I resell" />
        <div className="flex flex-wrap gap-3">
          {resellTools
            .filter((t) => t.slug !== tool.slug)
            .map((t) => (
              <Link
                key={t.slug}
                href={`/services/software-reselling/${t.slug}`}
                className="neu-raised neu-pressable neu-focus inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-ink"
              >
                <span className="neu-inset-sm flex h-6 w-6 items-center justify-center overflow-hidden bg-white p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.image} alt="" className="h-full w-full object-contain" />
                </span>
                {t.name}
              </Link>
            ))}
        </div>
      </section>

      {/* CTA */}
      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Ready to get {tool.name} activated?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me your device range and I&apos;ll set you up with the right license.
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
