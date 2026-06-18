import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import { accentText } from "@/lib/accent";
import { ButtonLink } from "@/components/neu-button";
import ProjectThumbnail from "@/components/project-thumbnail";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found — RaymonJohns" };
  return {
    title: `${project.name} — RaymonJohns`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug) + 1;
  const next = projects[index % projects.length];

  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      <Link
        href="/projects"
        className="neu-focus inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <div className="neu-raised-lg aspect-[16/7] w-full overflow-hidden rounded-neu-lg">
        <ProjectThumbnail
          slug={project.slug}
          className="h-full w-full rounded-neu-lg"
        />
      </div>

      <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="gradient-number text-lg">
              {String(index).padStart(2, "0")}
            </span>
            <span className={`eyebrow ${accentText[project.accent]}`}>
              {project.category}
            </span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="neu-raised neu-pressable neu-focus mt-6 inline-flex items-center gap-2 rounded-neu-pill px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink hover:text-accent-blue"
            >
              Visit live site <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        <div className="neu-raised p-6 sm:p-8">
          <p className="eyebrow">Project details</p>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                Role
              </dt>
              <dd className="mt-1 text-sm text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                Year
              </dt>
              <dd className="mt-1 text-sm text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="neu-inset-sm px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-5">
          {project.description.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="neu-raised h-fit p-6">
          <p className="eyebrow">Highlights</p>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-ink-muted"
              >
                <CheckCircle2
                  size={16}
                  className={`mt-0.5 shrink-0 ${accentText[project.accent]}`}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="neu-raised flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
        <div>
          <p className="eyebrow">Next up</p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            {next.name}
          </p>
        </div>
        <ButtonLink href={`/projects/${next.slug}`} withArrow>
          Next project
        </ButtonLink>
      </section>
    </div>
  );
}
