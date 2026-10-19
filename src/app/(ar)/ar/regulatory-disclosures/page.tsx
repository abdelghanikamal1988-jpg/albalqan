import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { regulatoryDisclosures } from "@/data/legal";
import { alternatesFor } from "@/lib/seo";

const page = regulatoryDisclosures.ar;

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.metaDescription,
  alternates: alternatesFor(`/${page.slug}`, "ar"),
  openGraph: {
    title: page.seoTitle,
    description: page.metaDescription,
    url: `/ar/${page.slug}`,
  },
};

export default function RegulatoryDisclosuresRouteAr() {
  return <LegalPage page={page} />;
}
