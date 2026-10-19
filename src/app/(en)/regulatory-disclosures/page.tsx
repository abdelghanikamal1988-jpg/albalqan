import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { regulatoryDisclosures } from "@/data/legal";
import { alternatesFor } from "@/lib/seo";

const page = regulatoryDisclosures.en;

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.metaDescription,
  alternates: alternatesFor(`/${page.slug}`, "en"),
  openGraph: {
    title: page.seoTitle,
    description: page.metaDescription,
    url: `/${page.slug}`,
  },
};

export default function RegulatoryDisclosuresRoute() {
  return <LegalPage page={page} />;
}
