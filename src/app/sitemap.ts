import type { MetadataRoute } from "next";
import { countryDetailPages } from "@/data/countries";
import { serviceDetailPages } from "@/data/services";
import { legalPages } from "@/data/legal";

export const dynamic = "force-static";

const pages = [
  { url: "https://albalqan.com", priority: 1, changeFrequency: "monthly" },
  { url: "https://albalqan.com/about", priority: 0.7, changeFrequency: "yearly" },
  { url: "https://albalqan.com/services", priority: 0.8, changeFrequency: "yearly" },
  { url: "https://albalqan.com/countries", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://albalqan.com/contact", priority: 0.9, changeFrequency: "yearly" },
  ...countryDetailPages.map((p) => ({
    url: `https://albalqan.com/countries/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
  ...serviceDetailPages.map((p) => ({
    url: `https://albalqan.com/services/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
  ...legalPages.map((p) => ({
    url: `https://albalqan.com/${p.slug}`,
    priority: 0.3,
    changeFrequency: "yearly" as const,
  })),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
