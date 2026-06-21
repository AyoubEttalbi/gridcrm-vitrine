import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { confidentialite as c } from "@/content/legal";
import { LegalDoc } from "@/components/sections/LegalDoc";

export const metadata: Metadata = pageMetadata("/politique-confidentialite/");

export default function ConfidentialitePage() {
  return (
    <LegalDoc
      title="Politique de confidentialité"
      updated={c.updated}
      intro={c.intro}
      sections={c.sections}
    />
  );
}
