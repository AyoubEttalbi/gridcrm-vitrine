import type { Metadata } from "next";
import { seoFor } from "@/content/seo";

// Builds per-page metadata from the SEO source of truth. Uses title.absolute so
// each route renders its EXACT captured <title> (some intentionally unaccented),
// bypassing the root layout template.
export function pageMetadata(path: string): Metadata {
  const { title, description } = seoFor(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "GridCRM",
      locale: "fr_FR",
      type: "website",
    },
  };
}
