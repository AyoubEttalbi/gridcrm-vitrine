import type { Metadata } from "next";
import { Check, MapPin, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import {
  contactHeader,
  coordinates,
  whatYouGetHeading,
  whatYouGet,
  contactRgpdNote,
  processHeading,
  processNote,
  processSteps,
  contactFaq,
} from "@/content/contact";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Wow } from "@/components/anime/Wow";

export const metadata: Metadata = pageMetadata("/contact/");

export default function ContactPage() {
  return (
    <>
      <Section className="pb-8">
        {/* Paris (75008) hero — dark-theme island over an atmospheric image */}
        <div
          data-theme="dark"
          className="relative isolate flex min-h-[340px] items-center overflow-hidden rounded-[12px] border border-line px-6 py-14 md:min-h-[420px] md:px-12 md:py-20"
        >
          <picture>
            <source srcSet="/contact-paris.webp" type="image/webp" />
            {/* Decorative atmospheric background; optimized webp+jpg already generated. */}
            <img
              src="/contact-paris.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </picture>
          {/* Lighter left-weighted scrim only — brighter photo, legible heading. */}
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-paper/80 via-paper/35 to-paper/5"
            aria-hidden
          />
          <SectionHeader
            as="h1"
            size="lg"
            eyebrow="Contact"
            title={contactHeader.heading}
            intro={contactHeader.sub}
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-[8px] border border-line bg-sunken p-6">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {coordinates.heading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span className="text-ink-2">{coordinates.address}</span>
                </li>
                <li className="flex gap-3">
                  <EnvelopeSimple size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <a href={`mailto:${coordinates.email}`} className="font-mono text-ink-2 hover:text-accent">
                    {coordinates.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <a href={`tel:${coordinates.phone.replace(/\s/g, "")}`} className="font-mono text-ink-2 hover:text-accent">
                    {coordinates.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-[8px] border border-line bg-raised p-6">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {whatYouGetHeading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {whatYouGet.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm">
                    <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                    <span className="text-ink-2">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs leading-relaxed text-muted">{contactRgpdNote}</p>
          </aside>
        </div>
      </Section>

      {/* Process steps */}
      <Section alt>
        <SectionHeader title={processHeading} intro={processNote} className="mb-10" />
        <Wow variant="cascade">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <li key={s.index} className="wow-card rounded-[8px] border border-line bg-raised p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl tabular-nums text-accent">{s.index}</span>
                <span className="font-mono text-[11px] text-muted">{s.day}</span>
              </div>
              <h3 className="mt-3 text-sm font-medium text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Wow>
      </Section>

      <Section>
        <FaqSection heading={contactFaq.heading} items={contactFaq.items} />
      </Section>
    </>
  );
}
