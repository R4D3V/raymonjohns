import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { accentText } from "@/lib/accent";
import ProjectThumbnail from "@/components/project-thumbnail";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="neu-raised neu-pressable neu-focus group flex flex-col gap-5 p-6 sm:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="gradient-number text-sm">
          {String(index).padStart(2, "0")}
        </span>
        <ArrowUpRight
          size={18}
          className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-blue"
        />
      </div>

      <div className="neu-inset h-32 overflow-hidden rounded-neu-md">
        <ProjectThumbnail
          slug={project.slug}
          className="h-full w-full rounded-neu-md"
        />
      </div>

      <div>
        <p className={`eyebrow ${accentText[project.accent]}`}>
          {project.category}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-ink">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="neu-inset-sm px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
