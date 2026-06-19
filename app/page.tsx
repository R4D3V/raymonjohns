import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/neu-button";
import Typewriter from "@/components/typewriter";
import DevicePanel from "@/components/device-panel";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import RadialGauge from "@/components/radial-gauge";
import ServiceIcon from "@/components/service-icon";
import SoftwareThumbnail from "@/components/software-thumbnail";
import PlatformIcon from "@/components/platform-icon";
import { skillGroups, projects, services, softwarePlatforms } from "@/lib/data";
import { accentText } from "@/lib/accent";

export default function Home() {
  const featured = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-10 sm:pt-16">
      {/* Hero */}
      <section className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Frontend Developer · Entebbe, Uganda</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="block text-accent-blue">
              <Typewriter text="RaymonJohns" />
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            I design and build soft, tactile interfaces for the web — Next.js
            underneath, neumorphism on the surface. When the laptop closes,
            I&apos;m usually elbow-deep in a phone&apos;s firmware instead.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/projects" withArrow>
              View the work
            </ButtonLink>
            <ButtonLink href="/contact" variant="inset">
              Get in touch
            </ButtonLink>
          </div>
        </div>

        <DevicePanel />
      </section>

      {/* Quick skills teaser */}
      <section>
        <SectionHeading
          eyebrow="Where the time goes"
          title="Comfortable across the stack"
          description="Four areas I spend most of my working week in — rated honestly, not for show."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="neu-raised flex flex-col items-center gap-3 p-5 text-center"
            >
              <RadialGauge
                value={group.value}
                accent={group.accent}
                size={84}
              />
              <p className="text-xs font-semibold text-ink">{group.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <ButtonLink href="/skills" variant="inset" withArrow>
            Full breakdown
          </ButtonLink>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="A few recent builds"
            description="Real client projects — agency, training, and travel — each with its own brand problem to solve."
          />
          <ButtonLink href="/projects" variant="inset" withArrow>
            All projects
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="What I offer"
            title="Ways to work together"
            description="Design, build, and device work — most projects end up touching more than one of these."
          />
          <ButtonLink href="/services" variant="inset" withArrow>
            All services
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="neu-raised flex flex-col gap-4 p-6"
            >
              <div
                className={`neu-inset-sm flex h-14 w-14 items-center justify-center ${accentText[service.accent]}`}
              >
                <ServiceIcon title={service.title} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
              <ul className="mt-1 space-y-2">
                {service.deliverables.slice(0, 2).map((d) => (
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
            </div>
          ))}
        </div>
      </section>

      {/* Software platforms teaser */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Software"
            title="Tools worth keeping on every machine"
            description="Curated picks across Windows, macOS, and Android — everything I actually use."
          />
          <ButtonLink href="/software" variant="inset" withArrow>
            All software
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {softwarePlatforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/software/${platform.slug}`}
              className="neu-raised neu-pressable neu-focus group flex flex-col gap-0 overflow-hidden"
            >
              <div className="h-32 w-full overflow-hidden">
                <SoftwareThumbnail
                  slug={platform.slug}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <div
                    className={`neu-inset-sm flex h-10 w-10 items-center justify-center ${accentText[platform.accent]}`}
                  >
                    <PlatformIcon slug={platform.slug} className="h-5 w-5" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-blue"
                  />
                </div>
                <div>
                  <p className={`eyebrow ${accentText[platform.accent]}`}>
                    {platform.items.length} picks
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink">
                    {platform.label}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="neu-raised-lg flex flex-col items-center gap-5 p-10 text-center sm:p-16">
        <p className="eyebrow">Got something to build?</p>
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Let&apos;s make the interface feel as good as it looks.
        </h2>
        <p className="max-w-md text-ink-muted">
          Open to new freelance projects — sites, brand systems, or migrations
          off a stack that&apos;s started to creak.
        </p>
        <ButtonLink href="/contact" withArrow className="mt-2">
          Start a conversation
        </ButtonLink>
      </section>
    </div>
  );
}
