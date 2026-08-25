"use client";

import { useRef } from "react";
import { motion, useInView, type Variant } from "framer-motion";

const hidden: Variant = {
  opacity: 0,
  y: 32,
};

const visible: Variant = {
  opacity: 1,
  y: 0,
};

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  as = "div",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "-60px 0px",
  });

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: {
            duration: 0.55,
            ease: [0.25, 0.1, 0.25, 1],
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
