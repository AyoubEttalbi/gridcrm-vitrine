import type { ReactNode } from "react";
import { Section } from "../ui/Section";

export function LegalDoc({
  title,
  updated,
  intro,
  lead,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  lead?: ReactNode;
  sections: { title: string; body: string }[];
}) {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{updated}</p>
        <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">{title}</h1>
        {intro && <p className="mt-5 leading-relaxed text-ink-2">{intro}</p>}
        {lead}
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-lg text-ink">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-2">{s.body}</p>
            </section>
          ))}
        </div>
      </article>
    </Section>
  );
}
