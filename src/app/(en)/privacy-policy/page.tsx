import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/data/legal";
import { alternatesFor } from "@/lib/seo";

const page = privacyPolicy.en;

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

export default function PrivacyPolicyRoute() {
  return <LegalPage page={page} />;
}
