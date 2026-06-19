import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/neu-button";
import ServiceIcon from "@/components/service-icon";
import { services } from "@/lib/data";
import { accentText } from "@/lib/accent";

const serviceSlug: Record<string, string> = {
  "Web Design & Development": "/services/web-design",
  "Brand Identity": "/services/brand-identity",
  "Graphic Design": "/services/graphic-design",
  "Site Migration & Performance": "/services/migration",
  "Phone Repair": "/services/phone-repair",
  "Phone Flashing": "/services/phone-flashing",
  "Windows Installation": "/services/windows-installation",
  "macOS Installation": "/services/macos-installation",
  "App Installation": "/services/app-installation",
  "Software Reselling": "/services/software-reselling",
};

export const metadata: Metadata = {
  title: "Services — RaymonJohns",
  description: "Web design, brand identity, graphic design, and migrations.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      <SectionHeading
        eyebrow="What I offer"
        title="Ways to work together"
        description="Most projects end up touching at least two of these — design and build rarely stay separate for long."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="neu-raised flex flex-col gap-4 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div
                className={`neu-inset-sm flex h-14 w-14 items-center justify-center ${accentText[service.accent]}`}
              >
                <ServiceIcon title={service.title} />
              </div>
              <span className="gradient-number text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              {service.description}
            </p>
            <ul className="mt-1 space-y-2">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-ink-muted"
                >
                  <CheckCircle2
                    size={16}
                    className={`mt-0.5 shrink-0 ${accentText[service.accent]}`}
                  />
                  {d}
                </li>
              ))}
            </ul>
            <Link
              href={serviceSlug[service.title] ?? "/services"}
              className={`neu-focus mt-2 inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-70 ${accentText[service.accent]}`}
            >
              Learn more <ArrowRight size={12} />
            </Link>
          </div>
        ))}
      </div>

      <div className="neu-raised-lg flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <p className="eyebrow">Not sure which fits?</p>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Tell me what you&apos;re trying to build — we&apos;ll work out the
          rest.
        </h2>
        <ButtonLink href="/contact" withArrow>
          Start a conversation
        </ButtonLink>
      </div>
    </div>
  );
}
