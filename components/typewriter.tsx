"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
};

export default function Typewriter({
  text,
  startDelay = 300,
  speed = 90,
  className = "",
}: Props) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTimeout = setTimeout(
      () => {
        if (prefersReducedMotion) {
          setTyped(text);
          setDone(true);
          return;
        }

        const tick = () => {
          i += 1;
          setTyped(text.slice(0, i));
          if (i < text.length) {
            timeoutId = setTimeout(tick, speed);
          } else {
            setDone(true);
          }
        };
        tick();
      },
      prefersReducedMotion ? 0 : startDelay
    );

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, startDelay, speed]);

  return (
    <span className={className}>
      {typed}
      <span
        aria-hidden="true"
        className={`inline-block w-[3px] md:w-[4px] -mb-1 ml-1 h-[0.85em] bg-accent-blue ${
          done ? "animate-pulse" : ""
        }`}
      />
      <span className="sr-only">{text}</span>
    </span>
  );
}
