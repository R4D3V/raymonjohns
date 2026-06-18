import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import RadialGauge from "@/components/radial-gauge";
import SkillIcon from "@/components/skill-icon";
import { skillGroups } from "@/lib/data";
import { accentText } from "@/lib/accent";

export const metadata: Metadata = {
  title: "Skills — RaymonJohns",
  description: "An honest breakdown of where the working week goes.",
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      <SectionHeading
        eyebrow="Capabilities"
        title="What I actually spend time on"
        description="Self-rated, not benchmarked — a rough guide to where I'm strongest versus where I'm still building reps."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="neu-raised flex gap-6 p-6 sm:p-8">
            <RadialGauge value={group.value} accent={group.accent} size={104} />
            <div>
              <div
                className={`neu-inset-sm mb-3 flex h-11 w-11 items-center justify-center ${accentText[group.accent]}`}
              >
                <SkillIcon label={group.label} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">
                {group.label}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`font-mono text-xs ${accentText[group.accent]}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="neu-inset p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">A note on the numbers: </span>
          these are deliberately conservative — a working snapshot rather
          than a sales pitch. They move as the work does.
        </p>
      </div>
    </div>
  );
}
