import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: { absolute: privacyPolicy.seoTitle },
  description: privacyPolicy.metaDescription,
  alternates: { canonical: `/${privacyPolicy.slug}` },
  openGraph: {
    title: privacyPolicy.seoTitle,
    description: privacyPolicy.metaDescription,
    url: `/${privacyPolicy.slug}`,
  },
};

export default function PrivacyPolicyRoute() {
  return <LegalPage page={privacyPolicy} />;
}
