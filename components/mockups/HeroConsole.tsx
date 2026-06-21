"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  MagnifyingGlass,
  Bell,
  Question,
  Command,
  ArrowUp,
  CheckCircle,
  GridFour,
  ChartBar,
  Signature,
  Users,
  Sparkle,
  Receipt,
  IdentificationBadge,
  ChartLineUp,
  Gear,
} from "@phosphor-icons/react";
import { heroConsole as d } from "@/content/home";
import { Counter } from "../ui/Counter";
import { EASE } from "@/lib/constants";

// Sidebar glyph registry — content stores icon names, kept serializable.
const NAV_ICONS: Record<string, typeof GridFour> = {
  GridFour,
  ChartBar,
  Signature,
  Users,
  Sparkle,
  Receipt,
  IdentificationBadge,
  ChartLineUp,
  Gear,
};

// Honest, fully token-built simulation of the GridCRM console (labelled
// "Aperçu simulé"). Every pixel is real DOM — never a screenshot image.
export function HeroConsole() {
  const reduce = useReducedMotion();
  const tile = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.15 + i * 0.07, duration: 0.5, ease: EASE },
        };

  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-raised shadow-[0_34px_90px_-44px_rgba(22,25,29,0.30)]">
      {/* Top bar: brand · search · live + utilities */}
      <div className="flex items-center gap-2.5 border-b border-line bg-sunken px-3 py-2.5 sm:gap-3 sm:px-4">
        <div className="flex shrink-0 items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-accent font-display text-[13px] leading-none text-on-accent">
            G
          </span>
          <span className="hidden font-display text-sm tracking-[-0.01em] text-ink sm:inline">
            {d.brand}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-[6px] border border-line bg-raised px-2.5 py-1.5">
          <MagnifyingGlass size={14} className="shrink-0 text-faint" aria-hidden />
          <span className="truncate text-[12px] text-muted">{d.search}</span>
          <span className="ml-auto hidden shrink-0 items-center gap-0.5 rounded-[4px] border border-line px-1 py-0.5 font-mono text-[10px] text-faint sm:flex">
            <Command size={10} aria-hidden /> K
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <span className="hidden items-center gap-1.5 rounded-full border border-accent-line bg-accent-wash px-2 py-1 sm:flex">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              {d.liveLabel}
            </span>
          </span>
          <Bell size={15} className="hidden text-muted sm:block" aria-hidden />
          <Question size={15} className="hidden text-muted sm:block" aria-hidden />
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-inset font-mono text-[10px] text-muted">
            {d.locale}
          </span>
        </div>
      </div>

      {/* Body: sidebar nav + main workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-[184px_1fr]">
        <aside className="hidden flex-col gap-5 border-r border-line bg-sunken/60 p-4 lg:flex">
          {d.nav.map((g) => (
            <div key={g.group}>
              <p className="px-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">
                {g.group}
              </p>
              <ul className="mt-2 space-y-0.5">
                {g.items.map((it) => {
                  const I = NAV_ICONS[it.icon];
                  const active = "active" in it && it.active;
                  return (
                    <li key={it.label}>
                      <span
                        className={`flex items-center gap-2 rounded-[6px] px-2 py-1.5 text-[12.5px] ${
                          active ? "bg-accent-wash font-medium text-accent" : "text-ink-2"
                        }`}
                      >
                        {I && (
                          <I
                            size={15}
                            weight={active ? "fill" : "regular"}
                            className={active ? "text-accent" : "text-faint"}
                            aria-hidden
                          />
                        )}
                        <span className="truncate">{it.label}</span>
                        {"badge" in it && it.badge && (
                          <span className="ml-auto rounded-[4px] bg-inset px-1.5 font-mono text-[10px] text-muted">
                            {it.badge}
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </aside>

        <div className="relative min-w-0 p-4 sm:p-5">
          {/* Workspace header + view switch */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-base text-ink sm:text-lg">{d.workspace}</h3>
              <p className="mt-0.5 font-mono text-[10.5px] text-muted">{d.updated}</p>
            </div>
            <div className="flex items-center gap-0.5 rounded-[6px] border border-line bg-sunken p-0.5">
              {d.views.map((v, i) => (
                <span
                  key={v}
                  className={`rounded-[4px] px-2.5 py-1 font-mono text-[11px] ${
                    i === 0 ? "bg-raised text-ink shadow-sm" : "text-muted"
                  }`}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Stat tiles — count up on entry */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {d.stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...tile(i)}
                className="rounded-[8px] border border-line bg-sunken/50 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                    {s.label}
                  </span>
                  <span className="shrink-0 rounded-[3px] bg-inset px-1 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-faint">
                    {s.tag}
                  </span>
                </div>
                <div className="mt-2 font-mono text-[19px] leading-none tabular-nums text-ink sm:text-[22px]">
                  <Counter value={s.value} group={s.group} />
                  {s.frac}
                  {s.suffix}
                </div>
                <div className="mt-2 flex items-center gap-1 font-mono text-[11px] text-accent">
                  <ArrowUp size={11} weight="bold" aria-hidden />
                  {s.delta}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Kanban pipeline */}
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {d.columns.map((col) => (
              <div key={col.title} className="rounded-[8px] border border-line bg-sunken/40 p-2">
                <div className="flex items-center justify-between px-1 py-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted">
                    {col.title}
                  </span>
                  <span className="rounded-[4px] bg-inset px-1.5 py-0.5 font-mono text-[10px] tabular-nums text-faint">
                    {col.count}
                  </span>
                </div>
                <div className="mt-1 space-y-2">
                  {col.cards.map((c) => (
                    <div
                      key={c.company}
                      className="rounded-[6px] border border-line bg-raised p-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[12px] font-medium leading-tight text-ink">
                          {c.company}
                        </span>
                        {"signed" in c && c.signed && (
                          <CheckCircle
                            size={14}
                            weight="fill"
                            className="shrink-0 text-accent"
                            aria-hidden
                          />
                        )}
                      </div>
                      <p className="mt-1 font-mono text-[10px] text-muted">{c.meta}</p>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] tabular-nums text-ink-2">
                          {c.vol}
                        </span>
                        {"score" in c && c.score && (
                          <span className="font-mono text-[9.5px] text-accent">{c.score}</span>
                        )}
                      </div>
                      {"tag" in c && c.tag && (
                        <span className="mt-2 inline-flex rounded-[4px] border border-line bg-sunken px-1.5 py-0.5 font-mono text-[9.5px] text-muted">
                          {c.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* eIDAS "Signé" rubber stamp, settling into place */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.6, rotate: -34 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: -13 }}
            viewport={{ once: true }}
            transition={{ delay: 1.15, duration: 0.5, ease: EASE }}
            className="pointer-events-none absolute left-[57%] top-[150px] hidden h-24 w-24 select-none items-center justify-center rounded-full border-[3px] border-accent/40 text-accent lg:flex"
            aria-hidden
          >
            <div className="flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full border border-accent/30">
              <Signature size={16} aria-hidden />
              <span className="mt-0.5 font-mono text-[12px] font-bold uppercase tracking-[0.2em]">
                {d.stamp}
              </span>
              <span className="font-mono text-[7px] uppercase tracking-[0.15em] opacity-70">
                eIDAS
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Honesty footer: this is a simulated surface, not a screenshot */}
      <div className="flex items-center justify-between border-t border-line bg-sunken px-4 py-1.5">
        <span className="font-mono text-[9.5px] text-faint">{d.appPath}</span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">
          Aperçu simulé
        </span>
      </div>
    </div>
  );
}
