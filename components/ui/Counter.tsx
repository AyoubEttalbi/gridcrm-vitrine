"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

function formatFr(n: number, group: boolean): string {
  if (!group) return String(n);
  // Non-breaking thousands separators normalised to a regular space.
  return n.toLocaleString("fr-FR").replace(/[  ]/g, " ");
}

// Counts up once from 0 on first viewport entry, then locks. Under
// reduced-motion (or a zero value) it renders the final value instantly.
export function Counter({
  value,
  className,
  durationMs = 1200,
  group = true,
}: {
  value: number;
  className?: string;
  durationMs?: number;
  group?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce || value === 0) {
      // Defer to a frame so the final value is set from a callback, not
      // synchronously in the effect body.
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce, durationMs]);

  return (
    <span ref={ref} className={className}>
      {formatFr(display, group)}
    </span>
  );
}
