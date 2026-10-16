import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsOfService } from "@/data/legal";

export const metadata: Metadata = {
  title: { absolute: termsOfService.seoTitle },
  description: termsOfService.metaDescription,
  alternates: { canonical: `/${termsOfService.slug}` },
  openGraph: {
    title: termsOfService.seoTitle,
    description: termsOfService.metaDescription,
    url: `/${termsOfService.slug}`,
  },
};

export default function TermsOfServiceRoute() {
  return <LegalPage page={termsOfService} />;
}
