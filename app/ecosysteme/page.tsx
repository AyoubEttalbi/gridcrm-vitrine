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

      {/* Hub: GridCRM core + orbiting tools */}
      <Section className="pt-0">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-1/2 top-16 -z-0 -translate-x-1/2 text-line"
            width="520"
            height="520"
            viewBox="0 0 520 520"
            fill="none"
            aria-hidden
          >
            <circle cx="260" cy="260" r="120" stroke="currentColor" />
            <circle cx="260" cy="260" r="200" stroke="currentColor" />
            <circle cx="260" cy="260" r="258" stroke="currentColor" strokeDasharray="2 6" />
          </svg>

          <div className="relative mx-auto max-w-sm rounded-[8px] border-2 border-accent bg-raised p-6 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-accent-line bg-accent-wash text-accent">
              {core.icon && <Icon name={core.icon} size={22} aria-hidden />}
            </span>
            <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {core.role}
            </span>
            <h2 className="mt-1 font-display text-2xl text-ink">{core.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{core.detail}</p>
          </div>

          <Wow variant="orbit" className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {satellites.map((t) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-line bg-sunken text-accent transition-colors group-hover:border-accent-line">
                      {t.icon && <Icon name={t.icon} size={18} aria-hidden />}
                    </span>
                    {t.href ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent group-hover:underline">
                        Visiter
                        <ArrowUpRight size={12} aria-hidden />
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                        Interne
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink">{t.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                    {t.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{t.detail}</p>
                </>
              );
              const cls =
                "wow-card group hover-lift flex flex-col rounded-[8px] border border-line bg-raised p-5";
              return t.href ? (
                <a
                  key={t.name}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <div key={t.name} className={cls}>
                  {inner}
                </div>
              );
            })}
          </Wow>
        </div>
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
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-ink">{f.from}</span>
                <ArrowRight size={14} className="text-accent" aria-hidden />
                <span className="text-ink">{f.to}</span>
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
