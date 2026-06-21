import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { cta } from "@/content/site";
import {
  ecosystemHeader,
  ecosystemCta,
  ecoTools,
  dataFlowHeading,
  dataFlow,
  whyEcosystemHeading,
  whyEcosystemStats,
} from "@/content/ecosystem";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/sections/CtaBand";
import { Wow } from "@/components/anime/Wow";

export const metadata: Metadata = pageMetadata("/ecosysteme/");

export default function EcosystemePage() {
  const core = ecoTools.find((t) => t.isCore)!;
  const satellites = ecoTools.filter((t) => !t.isCore);

  return (
    <>
      <Section className="pb-8">
        <SectionHeader as="h1" size="lg" eyebrow="Écosystème" title={ecosystemHeader.heading} />
      </Section>

      {/* System map: GridCRM core hub + connected tools */}
      <Section className="pt-0">
        {/* Core hub — featured */}
        <div className="relative isolate overflow-hidden rounded-[12px] border-2 border-accent bg-raised p-7 md:p-9">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, var(--accent-wash), transparent 70%)" }}
          />
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex items-start gap-5">
              <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-[14px] border border-accent-line bg-accent-wash text-accent">
                {core.icon && <Icon name={core.icon} size={32} aria-hidden />}
              </span>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {core.role}
                </span>
                <h2 className="mt-1 font-display text-3xl text-ink md:text-4xl">{core.name}</h2>
              </div>
            </div>

            <div className="lg:flex-1">
              <p className="max-w-xl leading-relaxed text-ink-2">{core.detail}</p>
            </div>

            <div className="flex shrink-0 items-center gap-4 border-t border-line pt-6 lg:flex-col lg:items-end lg:gap-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <span className="font-mono text-5xl leading-none tabular-nums text-accent">
                {satellites.length}
              </span>
              <span className="font-mono text-[10px] uppercase leading-tight tracking-[0.14em] text-muted lg:max-w-[5rem] lg:text-right">
                outils reliés
              </span>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="my-8 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <span className="h-px w-10 bg-line" aria-hidden />
          Reliés à GridCRM, sans ressaisie
          <span className="h-px w-10 bg-line" aria-hidden />
        </div>

        {/* Connected tools — rich cards */}
        <Wow variant="rise" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {satellites.map((t, i) => {
            const inner = (
              <>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-8 -right-2 -z-10 select-none font-display text-[130px] leading-none text-inset transition-colors duration-300 group-hover:text-accent-wash"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-ink">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted">{t.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{t.detail}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  {t.href ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                      Visiter le site
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      Intégré nativement
                    </span>
                  )}
                </div>
              </>
            );
            const cls =
              "wow-card group relative isolate flex h-full flex-col overflow-hidden rounded-[12px] border border-line bg-raised p-6 hover-lift";
            return t.href ? (
              <a key={t.name} href={t.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <div key={t.name} className={cls}>
                {inner}
              </div>
            );
          })}
        </Wow>
      </Section>

      {/* Flux de données: directional ledger (works fully without motion) */}
      <Section alt>
        <SectionHeader title={dataFlowHeading} className="mb-8" />
        <ul className="overflow-hidden rounded-[8px] border border-line">
          {dataFlow.map((f, i) => (
            <li
              key={`${f.from}-${f.to}`}
              className={cn(
                "grid gap-2 bg-raised px-5 py-4 md:grid-cols-[auto_1fr] md:items-center md:gap-6",
                i > 0 && "border-t border-line",
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-[4px] border border-line bg-sunken px-2 py-1 font-mono text-[11px] text-ink">
                  {f.from}
                </span>
                <ArrowRight size={14} className="shrink-0 text-accent" aria-hidden />
                <span className="rounded-[4px] border border-line bg-sunken px-2 py-1 font-mono text-[11px] text-ink">
                  {f.to}
                </span>
              </div>
              <span className="text-sm text-muted">{f.detail}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Why an ecosystem: 4 stats */}
      <Section>
        <SectionHeader title={whyEcosystemHeading} className="mb-10" />
        <div className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {whyEcosystemStats.map((s) => (
            <div key={s.title} className="bg-paper p-6">
              <div className="font-mono text-xl leading-tight text-accent">{s.value}</div>
              <div className="mt-3 text-sm font-medium text-ink">{s.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand
          heading={ecosystemCta.heading}
          body={ecosystemCta.body}
          secondary={cta.voirFonctionnalites}
          primary={cta.demanderAcces}
          image="/eco-grid"
        />
      </Section>
    </>
  );
}
