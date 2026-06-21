import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routesSeo } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return routesSeo.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
