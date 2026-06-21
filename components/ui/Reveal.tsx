"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE, DURATION } from "@/lib/constants";

// Single-shot fade-and-rise on viewport entry. Collapses to static under
// prefers-reduced-motion.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: DURATION.slow, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
