import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { mentionsLegales as m } from "@/content/legal";
import { LegalDoc } from "@/components/sections/LegalDoc";

export const metadata: Metadata = pageMetadata("/mentions-legales/");

function Block({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{title}</h2>
      <div className="mt-2 space-y-1 leading-relaxed text-ink-2">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <LegalDoc
      title="Mentions légales"
      updated={m.updated}
      sections={m.sections}
      lead={
        <div className="mt-8 space-y-6">
          <Block title={m.editor.title} lines={m.editor.lines} />
          <p className="leading-relaxed text-ink-2">{m.rcsNote}</p>
          <p className="leading-relaxed text-ink-2">{m.directeur}</p>
          <Block title={m.hebergeur.title} lines={m.hebergeur.lines} />
        </div>
      }
    />
  );
}
