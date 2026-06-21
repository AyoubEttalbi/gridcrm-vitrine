import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="py-28 md:py-36">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl text-ink">Page introuvable</h1>
        <p className="mt-4 leading-relaxed text-ink-2">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Retour à l&apos;accueil</Button>
        </div>
      </div>
    </Section>
  );
}
