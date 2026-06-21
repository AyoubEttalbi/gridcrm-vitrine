import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/content/site";
import { energyActors, energyActorsHeading } from "@/content/partners";
import {
  modulesSection,
  resultsSection,
  featuresBand,
  testimonial,
  ecosystemTeaser,
  homeFaq,
  finalCta,
} from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Readout } from "@/components/ui/Readout";
import { InstrumentCard } from "@/components/ui/InstrumentCard";
import { MonogramTile } from "@/components/ui/MonogramTile";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/Icon";
import { Wow } from "@/components/anime/Wow";
import { Hero } from "@/components/sections/Hero";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { Testimonial } from "@/components/sections/Testimonial";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Partner logo strip */}
      <Section alt className="py-12 md:py-14">
        <PartnerStrip heading={energyActorsHeading} names={energyActors.map((a) => a.name)} />
      </Section>

      {/* Modules: numbered editorial register (not three equal cards) */}
      <Section reveal={false}>
        <SectionHeader
          eyebrow="Modules"
          title={modulesSection.heading}
          intro={modulesSection.intro}
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 sm:gap-x-12">
          {modulesSection.cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.05}>
              <div className="flex gap-5 border-t border-line py-7">
                <span className="pt-1 font-mono text-xs tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Results: live instrument widget (headline counters now lead the hero) */}
      <Section alt>
        <SectionHeader
          eyebrow="Résultats"
          title={resultsSection.heading}
          intro={resultsSection.tagline}
          className="mb-12"
        />
        <div className="mx-auto max-w-2xl">
          <InstrumentCard appPath={resultsSection.liveWidget.source} label="Live">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {resultsSection.liveWidget.metrics.map((m) => (
                <Readout
                  key={m.label}
                  label={m.label}
                  value={m.value}
                  delta={m.delta || undefined}
                  size="sm"
                />
              ))}
            </div>
          </InstrumentCard>
        </div>
      </Section>

      {/* Features band: process timeline + animated KPIs + value cards */}
      <Section>
        <SectionHeader
          title={featuresBand.heading}
          intro={featuresBand.intro}
          className="mb-12"
        />

        {/* Process timeline — numbered nodes on a connecting rail */}
        <div>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {featuresBand.flowLabel}
          </p>
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-x-0 top-5 hidden h-px bg-line lg:block"
              aria-hidden
            />
            <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {featuresBand.flow.map((f, i) => (
                <li key={f.step} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-mono text-xs tabular-nums text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < featuresBand.flow.length - 1 && (
                      <ArrowRight size={16} className="text-faint sm:hidden" aria-hidden />
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink">{f.step}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    {f.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* KPI instrument strip — numbers count up on entry */}
        <div className="mt-14">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {featuresBand.kpisLabel}
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {featuresBand.kpis.map((k) => (
              <div key={k.label} className="bg-raised p-4 sm:p-5">
                <div className="font-mono text-xl leading-none tabular-nums text-ink">
                  <Counter value={k.value} group={k.group} />
                  {k.suffix}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value cards — hover-lift */}
        <Wow variant="rise" className="mt-6 grid gap-4 sm:grid-cols-3">
          {featuresBand.valueCards.map((v) => (
            <div
              key={v.title}
              className="wow-card hover-lift rounded-[8px] border border-line bg-raised p-6"
            >
              <h3 className="font-display text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{v.body}</p>
            </div>
          ))}
        </Wow>
      </Section>

      {/* Testimonial */}
      <Section alt>
        <Testimonial
          quote={testimonial.quote}
          author={testimonial.author}
          role={testimonial.role}
          initials={testimonial.initials}
        />
      </Section>

      {/* Ecosystem teaser */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeader title={ecosystemTeaser.heading} />
            <div className="mt-7">
              <Button href={ecosystemTeaser.cta.href} variant="ghost">
                {ecosystemTeaser.cta.label}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {ecosystemTeaser.links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover-lift flex flex-col gap-3 rounded-[8px] border border-line bg-raised p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-line bg-sunken text-accent transition-colors group-hover:border-accent-line">
                    <Icon name={l.icon} size={18} aria-hidden />
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-accent"
                    aria-hidden
                  />
                </div>
                <span>
                  <span className="block text-sm font-medium text-ink">{l.name}</span>
                  <span className="mt-1 block font-mono text-[11px] text-muted">{l.role}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ with side card */}
      <Section alt>
        <FaqSection
          heading={homeFaq.heading}
          items={homeFaq.items}
          sideCard={
            <div className="rounded-[8px] border border-line bg-raised p-6">
              <div className="flex -space-x-2">
                {homeFaq.sideCard.initials.map((i) => (
                  <MonogramTile key={i} initials={i} size="sm" className="ring-2 ring-raised" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-2">{homeFaq.sideCard.text}</p>
              <div className="mt-5">
                <Button href={homeFaq.sideCard.cta.href} variant="ghost" className="w-full">
                  {homeFaq.sideCard.cta.label}
                </Button>
              </div>
              <p className="mt-4 font-mono text-[11px] text-muted">{homeFaq.sideCard.note}</p>
            </div>
          }
        />
      </Section>

      {/* Final CTA */}
      <Section>
        <CtaBand
          heading={finalCta.heading}
          body={finalCta.body}
          secondary={cta.voirFonctionnalites}
          primary={cta.demo}
          tags={finalCta.tags}
          image="/cta-energy"
        />
      </Section>
    </>
  );
}
