import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { cgu } from "@/content/legal";
import { LegalDoc } from "@/components/sections/LegalDoc";

export const metadata: Metadata = pageMetadata("/legal/cgu/");

export default function CguPage() {
  return (
    <LegalDoc
      title="Conditions Générales d'Utilisation"
      updated={cgu.updated}
      intro={cgu.intro}
      sections={cgu.sections}
    />
  );
}
