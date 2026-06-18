"use client";

import { motion } from "framer-motion";
import { accentText } from "@/lib/accent";

type Props = {
  value: number;
  accent: "blue" | "coral" | "green" | "violet";
  size?: number;
};

const accentStroke: Record<string, string> = {
  blue: "var(--accent-blue)",
  coral: "var(--accent-coral)",
  green: "var(--accent-green)",
  violet: "var(--accent-violet)",
};

export default function RadialGauge({ value, accent, size = 96 }: Props) {
  const stroke = 7;
  const radius = size / 2 - stroke;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="neu-inset relative flex items-center justify-center rounded-full" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--shadow-dark)"
          strokeOpacity={0.25}
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={accentStroke[accent]}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <span className={`absolute font-mono text-sm font-semibold ${accentText[accent]}`}>
        {value}%
      </span>
    </div>
  );
}
