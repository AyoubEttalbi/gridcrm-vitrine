"use client";

import { useId, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type QA = { q: string; a: string };

// Accessible FAQ collapse. First item open by default (mirrors the live site,
// where the first answer is shown and the rest are collapsed).
export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: QA[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const reduce = useReducedMotion();
  const base = useId();

  return (
    <div className="border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const btnId = `${base}-btn-${i}`;
        return (
          <div key={it.q} className={cn(i > 0 && "border-t border-line")}>
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-lg text-ink">{it.q}</span>
                <CaretDown
                  size={18}
                  className={cn(
                    "shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180 text-accent",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[70ch] pb-5 leading-relaxed text-ink-2">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
