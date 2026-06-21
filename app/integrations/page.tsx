import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { cta } from "@/content/site";
import {
  integrationsHeader,
  integrationsCta,
  recommendedPartners,
  sponsoredDisclaimer,
  techConnectors,
  sovereigntyHeading,
  sovereigntyCards,
} from "@/content/integrations";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Wow } from "@/components/anime/Wow";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = pageMetadata("/integrations/");

export default function IntegrationsPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeader
          as="h1"
          size="lg"
          eyebrow="Intégrations"
          title={integrationsHeader.heading}
          intro={integrationsHeader.sub}
        />
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={cta.demo.href}>{cta.demo.label}</Button>
          <Button href={cta.voirSecurite.href} variant="ghost">
            {cta.voirSecurite.label}
          </Button>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeader title="Partenaires recommandés" className="mb-8" />
        <Wow variant="flip" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedPartners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="wow-card group hover-lift flex flex-col rounded-[8px] border border-line bg-raised p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <BrandLogo name={p.name} size="sm" />
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 text-faint transition-colors group-hover:text-accent"
                  aria-hidden
                />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                {p.category}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {p.note && <p className="mt-3 text-xs text-muted">{p.note}</p>}
            </a>
          ))}
        </Wow>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{sponsoredDisclaimer}</p>
      </Section>

      <Section alt>
        <SectionHeader title="Connecteurs techniques" className="mb-8" />
        <div className="overflow-hidden rounded-[8px] border border-line">
          {techConnectors.map((c, i) => (
            <div
              key={c.name}
              className={`grid gap-4 bg-raised p-6 md:grid-cols-[1fr_1.4fr] md:items-center ${i > 0 ? "border-t border-line" : ""}`}
            >
              <div>
                <h3 className="flex items-center gap-2.5 font-mono text-sm font-medium uppercase tracking-[0.08em] text-ink">
                  <Icon name={c.icon} size={18} className="text-accent" aria-hidden />
                  {c.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <Tag key={t} accent>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
              <p className="leading-relaxed text-ink-2">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title={sovereigntyHeading} className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sovereigntyCards.map((c) => (
            <div key={c.title} className="rounded-[8px] border border-line bg-raised p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-line bg-sunken text-accent">
                <Icon name={c.icon} size={20} aria-hidden />
              </span>
              <h3 className="mt-4 text-sm font-medium text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand
          heading={integrationsCta.heading}
          body={integrationsCta.body}
          secondary={cta.voirSecurite}
          primary={cta.demo}
          image="/integrations-network"
        />
      </Section>
    </>
  );
}
