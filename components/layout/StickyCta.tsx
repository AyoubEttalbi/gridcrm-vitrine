"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { X, ArrowRight } from "@phosphor-icons/react";
import { cta } from "@/content/site";
import { EASE } from "@/lib/constants";

// Slides up once the hero has scrolled away. Uses Motion's scroll tracking
// (never a raw scroll listener). Dismissible; respects reduced motion.
export function StickyCta() {
  const [past, setPast] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setPast(y > 720));

  const visible = past && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-50 print:hidden"
        >
          <div className="shell pb-4">
            <div className="flex items-center justify-between gap-4 rounded-[8px] border border-line bg-raised/95 px-4 py-3 shadow-[0_-8px_30px_-18px_rgba(22,25,29,0.35)] backdrop-blur-md md:px-5">
              <p className="hidden text-sm text-ink-2 sm:block">
                Prêt à voir GridCRM en action ?
              </p>
              <div className="flex flex-1 items-center justify-end gap-2">
                <Link
                  href={cta.demo.href}
                  className="inline-flex items-center gap-2 rounded-[4px] bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-[background-color,transform] duration-150 hover:bg-accent-shade active:translate-y-px"
                >
                  {cta.demo.label}
                  <ArrowRight size={15} aria-hidden />
                </Link>
                <button
                  type="button"
                  onClick={() => setDismissed(true)}
                  aria-label="Fermer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-line text-muted transition-colors hover:text-ink"
                >
                  <X size={16} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
