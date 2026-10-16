import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { regulatoryDisclosures } from "@/data/legal";

export const metadata: Metadata = {
  title: { absolute: regulatoryDisclosures.seoTitle },
  description: regulatoryDisclosures.metaDescription,
  alternates: { canonical: `/${regulatoryDisclosures.slug}` },
  openGraph: {
    title: regulatoryDisclosures.seoTitle,
    description: regulatoryDisclosures.metaDescription,
    url: `/${regulatoryDisclosures.slug}`,
  },
};

export default function RegulatoryDisclosuresRoute() {
  return <LegalPage page={regulatoryDisclosures} />;
}
