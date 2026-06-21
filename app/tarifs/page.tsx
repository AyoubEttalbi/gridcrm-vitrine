import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { cta } from "@/content/site";
import {
  pricingHeader,
  pricingCta,
  plans,
  pricingFinePrint,
  neverChargeHeading,
  neverCharge,
  comparisonHeading,
  comparisonSubhead,
  comparisonColumns,
  comparisonRows,
  comparisonSources,
  integrationsPricingHeading,
  pricingTestimonial,
  pricingFaq,
  type Plan,
} from "@/content/pricing";
import { paidPartners, affiliateDisclaimer } from "@/content/partners";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Checklist } from "@/components/ui/Checklist";
import { Testimonial } from "@/components/sections/Testimonial";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Wow } from "@/components/anime/Wow";

export const metadata: Metadata = pageMetadata("/tarifs/");

function PlanCard({ p, className }: { p: Plan; className?: string }) {
  return (
    <div
      className={cn(
        "hover-lift flex h-full flex-col rounded-[8px] bg-raised p-6",
        p.popular ? "border-2 border-accent" : "border border-line",
        className,
      )}
    >
      {p.popular ? (
        <span className="mb-3 inline-flex w-fit rounded-[4px] border border-accent-line bg-accent-wash px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          Le plus choisi
        </span>
      ) : (
        <span className="mb-3 h-[26px]" aria-hidden />
      )}
      <h3 className="font-display text-xl text-ink">{p.name}</h3>
      <p className="mt-1 text-sm text-muted">{p.target}</p>

      <div className="mt-5">
        <div className="font-mono text-3xl leading-none tabular-nums text-ink">{p.priceAnnual}</div>
        <div className="mt-1.5 font-mono text-[11px] text-muted">{p.priceAnnualNote}</div>
        <div className="mt-2 font-mono text-[11px] text-muted">
          {p.priceMonthly} · {p.priceMonthlyNote}
        </div>
      </div>

      <div className="mt-5">
        <Button href={p.cta.href} variant={p.popular ? "primary" : "ghost"} className="w-full">
          {p.cta.label}
        </Button>
      </div>

      {p.inheritLine && (
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {p.inheritLine}
        </p>
      )}
      <ul className={cn("space-y-2.5", p.inheritLine ? "mt-4" : "mt-6")}>
        {p.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm">
            <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <span className="text-ink-2">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonMatrix() {
  return (
    <>
      <div className="hidden overflow-hidden rounded-[8px] border border-line md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-sunken">
              {comparisonColumns.map((c) => (
                <th
                  key={c}
                  className="border-b border-line px-3 py-3 text-left font-mono text-[11px] font-normal uppercase tracking-[0.12em] text-muted"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr
                key={row.tool}
                className={cn("border-b border-line last:border-0", row.isGrid && "bg-accent-wash")}
              >
                <th
                  scope="row"
                  className={cn(
                    "px-3 py-3 text-left text-sm font-medium",
                    row.isGrid && "border-l-2 border-accent text-accent",
                    !row.isGrid && "text-ink",
                  )}
                >
                  {row.tool}
                </th>
                {row.cells.map((cell, ci) => (
                  <td key={ci} className="px-3 py-3 font-mono text-xs text-ink-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {comparisonRows.map((row) => (
          <div
            key={row.tool}
            className={cn(
              "rounded-[8px] border p-4",
              row.isGrid ? "border-accent bg-accent-wash" : "border-line bg-raised",
            )}
          >
            <div className={cn("font-medium", row.isGrid ? "text-accent" : "text-ink")}>
              {row.tool}
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {comparisonColumns.slice(1).map((col, ci) => (
                <div key={col}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {col}
                  </dt>
                  <dd className="font-mono text-xs text-ink-2">{row.cells[ci]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

export default function TarifsPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeader
          as="h1"
          size="lg"
          eyebrow="Tarifs"
          title={pricingHeader.heading}
          intro={pricingHeader.sub}
        />
      </Section>

      <Section className="pt-0">
        <Wow variant="pop" className="grid items-start gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} p={p} className="wow-card" />
          ))}
        </Wow>
        <p className="mt-6 max-w-3xl text-sm text-muted">{pricingFinePrint}</p>
      </Section>

      <Section alt>
        <SectionHeader title={neverChargeHeading} className="mb-10" />
        <Checklist items={neverCharge} />
      </Section>

      <Section>
        <SectionHeader title={comparisonHeading} intro={comparisonSubhead} className="mb-8" />
        <ComparisonMatrix />
        <div className="mt-5 max-w-4xl">
          <p className="font-mono text-[11px] text-muted">
            {comparisonSources.intro} : {comparisonSources.list.join(" · ")}
          </p>
        </div>
      </Section>

      <Section alt>
        <SectionHeader title={integrationsPricingHeading} className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paidPartners.map((p) => (
            <div key={p.name} className="flex flex-col rounded-[8px] border border-line bg-raised p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg text-ink">{p.name}</h3>
                <span className="font-mono text-xs text-accent">{p.pricing}</span>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                {p.category}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">{p.note}</p>
              <div className="mt-4">
                <Button href={p.url} external variant="ghost" className="w-full">
                  Lien parrainage GridCRM
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{affiliateDisclaimer}</p>
      </Section>

      <Section>
        <Testimonial
          quote={pricingTestimonial.quote}
          author={pricingTestimonial.author}
          role={pricingTestimonial.role}
          initials={pricingTestimonial.initials}
        />
      </Section>

      <Section alt>
        <FaqSection heading={pricingFaq.heading} items={pricingFaq.items} />
      </Section>

      <Section>
        <CtaBand
          heading={pricingCta.heading}
          body={pricingCta.body}
          secondary={cta.voirFonctionnalites}
          primary={cta.demo}
          image="/tarifs-wind"
        />
      </Section>
    </>
  );
}
