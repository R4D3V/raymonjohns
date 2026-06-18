"use client";

import { motion, useReducedMotion } from "framer-motion";

const chips = [
  { label: "Next.js", top: "15%", left: "14%", delay: 0 },
  { label: "Tailwind", top: "28%", left: "58%", delay: 0.6 },
  { label: "TypeScript", top: "52%", left: "10%", delay: 1.1 },
  { label: "React", top: "66%", left: "52%", delay: 0.3 },
  { label: "Framer", top: "82%", left: "20%", delay: 0.9 },
  { label: "HTML", top: "82%", left: "70%", delay: 0.9 },
  { label: "CSS", top: "10%", left: "70%", delay: 0.2 },
  { label: "Vercel", top: "35%", left: "20%", delay: 0.5 },
  { label: "Lucid", top: "50%", left: "70%", delay: 0.7 },
];

export default function DevicePanel() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
      <div className="neu-raised-lg absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="neu-inset h-[78%] w-[82%] relative">
          {chips.map((chip) => (
            <motion.div
              key={chip.label}
              className="neu-raised-sm neu-pressable absolute px-3 py-1.5 font-mono text-[11px] text-ink-muted"
              style={{ top: chip.top, left: chip.left }}
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 3.4,
                delay: chip.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {chip.label}
            </motion.div>
          ))}

          {/* <div className="absolute inset-x-0 bottom-[10%] flex flex-col items-center gap-1 px-6 text-center">
            <span className="eyebrow">currently shipping</span>
            <span className="font-display text-sm font-semibold text-ink">
              Next.js 16 · Tailwind v4
            </span>
          </div> */}
        </div>
      </div>

      {/* corner bracket decorators, echoing the brand's UI language */}
      <span className="absolute -top-2 -left-2 h-6 w-6 border-l-2 border-t-2 border-accent-blue/40 rounded-tl-lg" />
      <span className="absolute -bottom-2 -right-2 h-6 w-6 border-r-2 border-b-2 border-accent-blue/40 rounded-br-lg" />
    </div>
  );
}
