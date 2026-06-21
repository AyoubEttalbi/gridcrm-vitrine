"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, ArrowRight } from "@phosphor-icons/react";
import { hero, resultsSection } from "@/content/home";
import { cta } from "@/content/site";
import { EASE } from "@/lib/constants";
import { Button } from "../ui/Button";
import { Counter } from "../ui/Counter";
import { HeroConsole } from "../mockups/HeroConsole";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const parent = reduce ? {} : { variants: container, initial: "hidden", animate: "show" };
  const child = reduce ? {} : { variants: item };

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[460px] w-[820px] max-w-full -translate-x-1/2"
        aria-hidden
        style={{ background: "radial-gradient(60% 60% at 50% 0%, var(--accent-wash), transparent 70%)" }}
      />

      <div className="shell relative py-16 md:py-20 lg:py-24">
        {/* Centered editorial header */}
        <motion.div {...parent} className="mx-auto max-w-3xl text-center">
          <motion.p
            {...child}
            className="mb-6 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            <span className="h-px w-6 bg-current opacity-40" aria-hidden />
            {hero.eyebrow}
            <span className="h-px w-6 bg-current opacity-40" aria-hidden />
          </motion.p>

          <motion.h1
            {...child}
            className="text-balance pb-1 font-display text-4xl leading-[1.08] tracking-[-0.015em] text-ink md:text-5xl lg:text-[62px]"
          >
            {hero.h1Lead}
            <em className="font-display italic text-accent">{hero.h1Accent}</em>.
          </motion.h1>

          <motion.p
            {...child}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-2"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            {...child}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={cta.demo.href}>
              {cta.demo.label}
              <ArrowRight size={16} weight="bold" aria-hidden />
            </Button>
            <Button href={cta.essai.href} variant="ghost">
              {cta.essai.label}
            </Button>
          </motion.div>

          <motion.ul
            {...child}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {hero.reassurance.map((r) => (
              <li key={r.strong} className="flex items-center gap-2 text-sm">
                <Check size={15} weight="bold" className="shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="text-ink">{r.strong}</span>
                  {r.rest && <span className="text-muted">, {r.rest}</span>}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Full-width product console */}
        <motion.div
          className="mt-12 lg:mt-16"
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.985 }}
          animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
        >
          <HeroConsole />
        </motion.div>

        {/* Animated trust counters */}
        <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-line pt-10 sm:grid-cols-4 sm:divide-x sm:divide-line">
          {resultsSection.counters.map((c) => (
            <div key={c.label} className="px-2 text-center sm:px-6">
              <div className="font-mono text-3xl leading-none tabular-nums text-ink sm:text-4xl">
                <Counter value={c.value} group={c.group} />
                {c.suffix}
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                {c.label}
              </div>
              <div className="mx-auto mt-1.5 max-w-[22ch] text-xs leading-snug text-muted">
                {c.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
