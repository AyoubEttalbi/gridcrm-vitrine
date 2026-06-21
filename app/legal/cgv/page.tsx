import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { cgv } from "@/content/legal";
import { LegalDoc } from "@/components/sections/LegalDoc";

export const metadata: Metadata = pageMetadata("/legal/cgv/");

export default function CgvPage() {
  return (
    <LegalDoc
      title="Conditions Générales de Vente"
      updated={cgv.updated}
      intro={cgv.intro}
      sections={cgv.sections}
    />
  );
}
