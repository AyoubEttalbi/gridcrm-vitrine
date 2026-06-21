import type { ReactNode } from "react";
import { Accordion, type QA } from "../ui/Accordion";
import { SectionHeader } from "../ui/SectionHeader";

export function FaqSection({
  heading,
  items,
  eyebrow,
  sideCard,
}: {
  heading: string;
  items: QA[];
  eyebrow?: string;
  sideCard?: ReactNode;
}) {
  if (!sideCard) {
    return (
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow={eyebrow} title={heading} className="mb-8" />
        <Accordion items={items} />
      </div>
    );
  }
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_21rem] lg:gap-16">
      <div>
        <SectionHeader eyebrow={eyebrow} title={heading} className="mb-8" />
        <Accordion items={items} />
      </div>
      <aside className="lg:pt-4">{sideCard}</aside>
    </div>
  );
}
