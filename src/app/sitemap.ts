import type { MetadataRoute } from "next";
import { countryDetailPages } from "@/data/countries";
import { serviceDetailPages } from "@/data/services";
import { legalPages } from "@/data/legal";

export const dynamic = "force-static";

const rootPaths = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/services", priority: 0.8, changeFrequency: "yearly" },
  { path: "/countries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
] as const;

const pages = [
  ...rootPaths.map((p) => ({
    url: `https://albalqan.com${p.path}`,
    priority: p.priority,
    changeFrequency: p.changeFrequency,
  })),
  ...rootPaths.map((p) => ({
    url: `https://albalqan.com/ar${p.path}`,
    priority: p.priority,
    changeFrequency: p.changeFrequency,
  })),
  ...countryDetailPages.en.map((p) => ({
    url: `https://albalqan.com/countries/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
  ...countryDetailPages.ar.map((p) => ({
    url: `https://albalqan.com/ar/countries/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
  ...serviceDetailPages.en.map((p) => ({
    url: `https://albalqan.com/services/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
  ...serviceDetailPages.ar.map((p) => ({
    url: `https://albalqan.com/ar/services/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
  ...legalPages.en.map((p) => ({
    url: `https://albalqan.com/${p.slug}`,
    priority: 0.3,
    changeFrequency: "yearly" as const,
  })),
  ...legalPages.ar.map((p) => ({
    url: `https://albalqan.com/ar/${p.slug}`,
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
