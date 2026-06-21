import type { Metadata } from "next";
import { Check, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { cta } from "@/content/site";
import {
  securityHeader,
  securityCta,
  securitySections,
  architectureHeading,
  architectureLayers,
  complianceHeading,
  complianceNote,
  complianceDocs,
  securityFacts,
  securityFaq,
} from "@/content/security";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Wow } from "@/components/anime/Wow";

export const metadata: Metadata = pageMetadata("/securite/");

const STRATA_BG = ["bg-raised", "bg-sunken", "bg-inset"];

export default function SecuritePage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeader as="h1" size="lg" eyebrow="Sécurité" title={securityHeader.heading} />
        <div className="mt-7 flex flex-wrap gap-2">
          {securityHeader.badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-[4px] border border-line bg-sunken px-3 py-1.5 font-mono text-[11px] text-ink-2"
            >
              <ShieldCheck size={13} className="text-accent" aria-hidden />
              {b}
            </span>
          ))}
        </div>
      </Section>

      {/* 6 security sections as a register */}
      <Section className="pt-0">
        <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
          {securitySections.map((s, i) => (
            <div key={s.title} className="flex gap-5 border-t border-line py-7">
              <span className="pt-1 font-mono text-xs tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-lg text-ink">{s.title}</h2>
                <ul className="mt-3 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm">
                      <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      <span className="text-ink-2">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3-layer defense: stacked strata */}
      <Section alt>
        <SectionHeader title={architectureHeading} className="mb-10" />
        <Wow variant="slideLeft" className="mx-auto max-w-4xl space-y-3">
          {architectureLayers.map((l, i) => (
            <div
              key={l.index}
              className={cn(
                "wow-card rounded-[8px] border border-line p-6 md:p-7",
                STRATA_BG[i],
              )}
              style={{ marginInline: `${i * 6}%` }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl tabular-nums text-accent">{l.index}</span>
                <div>
                  <h3 className="font-display text-xl text-ink">{l.title}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {l.subtitle}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {l.controls.map((c) => (
                  <span
                    key={c}
                    className="rounded-[4px] border border-line bg-raised px-2.5 py-1 font-mono text-[11px] text-ink-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Wow>
      </Section>

      {/* Compliance manifest */}
      <Section>
        <SectionHeader title={complianceHeading} intro={complianceNote} className="mb-8" />
        <ul className="overflow-hidden rounded-[8px] border border-line">
          {complianceDocs.map((d, i) => (
            <li
              key={d}
              className={cn(
                "flex items-center justify-between gap-4 bg-raised px-5 py-4",
                i > 0 && "border-t border-line",
              )}
            >
              <span className="text-sm text-ink">{d}</span>
              <span className="shrink-0 rounded-[4px] border border-accent-line bg-accent-wash px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                Disponible
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Facts band */}
      <Section alt>
        <div className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {securityFacts.map((f) => (
            <div key={f.label} className="bg-paper p-5">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {f.label}
              </div>
              <div className="mt-1.5 font-mono text-sm text-ink">{f.value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <FaqSection heading={securityFaq.heading} items={securityFaq.items} />
      </Section>

      <Section>
        <CtaBand
          heading={securityCta.heading}
          body={securityCta.body}
          secondary={cta.voirTarifs}
          primary={cta.parlerExpert}
          image="/sec-datacenter"
        />
      </Section>
    </>
  );
}
