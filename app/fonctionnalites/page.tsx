import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { cta } from "@/content/site";
import {
  featuresHeader,
  featureModules,
  featuresClosingCta,
  featuresGridSignNote,
  type FeatureModule,
} from "@/content/features";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { FeatureMockup } from "@/components/mockups/FeatureMockup";
import { Wow } from "@/components/anime/Wow";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = pageMetadata("/fonctionnalites/");

function ModuleTile({ m, wide, note }: { m: FeatureModule; wide?: boolean; note?: string }) {
  return (
    <div
      id={m.id}
      className="hover-lift h-full scroll-mt-24 rounded-[8px] border border-line bg-raised p-6 md:p-8"
    >
      <div className={cn("grid gap-6", wide && "md:grid-cols-2 md:items-center md:gap-10")}>
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-xs tabular-nums text-muted">{m.index}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {m.tab}
            </span>
            {note && <Tag accent>{note}</Tag>}
          </div>
          <h2 className="mt-3 font-display text-2xl text-ink">{m.title}</h2>
          <p className="mt-2 leading-relaxed text-ink-2">{m.intro}</p>
          <ul className="mt-5 space-y-2.5">
            {m.bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm">
                <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <span className="text-ink-2">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn(!wide && "mt-6")}>
          <FeatureMockup mockup={m.mockup} />
        </div>
      </div>
    </div>
  );
}

// Bento spans give the page its own rhythm (12 / 6+6 / 5+7 / 12) without any
// repeated zigzag rows.
const SPANS = ["md:col-span-12", "md:col-span-6", "md:col-span-6", "md:col-span-5", "md:col-span-7", "md:col-span-12"];
const WIDE = new Set([0, 4, 5]);

export default function FonctionnalitesPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeader
          as="h1"
          size="lg"
          eyebrow="Fonctionnalités"
          title={featuresHeader.heading}
          intro={featuresHeader.intro}
        />
        <nav className="mt-8 flex flex-wrap gap-2">
          {featureModules.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="rounded-[4px] border border-line bg-sunken px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {m.tab}
            </a>
          ))}
        </nav>
      </Section>

      <Section className="pt-0" reveal={false}>
        <Wow variant="tilt" className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {featureModules.map((m, i) => (
            <div key={m.id} className={cn(SPANS[i], "wow-card")}>
              <ModuleTile
                m={m}
                wide={WIDE.has(i)}
                note={m.id === "signature" ? featuresGridSignNote : undefined}
              />
            </div>
          ))}
        </Wow>
      </Section>

      <Section className="pt-0">
        <CtaBand
          heading={featuresClosingCta.heading}
          body={featuresClosingCta.body}
          secondary={cta.voirTarifs}
          primary={cta.demo}
          image="/features-fiber"
        />
      </Section>
    </>
  );
}
