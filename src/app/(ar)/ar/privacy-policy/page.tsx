import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/data/legal";
import { alternatesFor } from "@/lib/seo";

const page = privacyPolicy.ar;

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

export default function PrivacyPolicyRouteAr() {
  return <LegalPage page={page} />;
}
