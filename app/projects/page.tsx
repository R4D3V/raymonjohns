import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work — RaymonJohns",
  description: "Case studies from recent client projects.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 py-12 sm:py-16">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects, in the order they happened"
        description="Three recent builds — an agency rebuild, a training business, and a migration that's still in motion."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
