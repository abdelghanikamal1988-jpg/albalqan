import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import HowItWorks from "@/components/HowItWorks";
import Quote from "@/components/Quote";
import WhyAlBalqan from "@/components/WhyAlBalqan";
import Stats from "@/components/Stats";
import Consultation from "@/components/Consultation";
import Partners from "@/components/Partners";
import Insights from "@/components/Insights";
import Faq from "@/components/Faq";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: alternatesFor("/", "ar"),
};

export default function HomeAr() {
  return (
    <PageShell intro>
      <Hero />
      <Destinations />
      <HowItWorks />
      <Quote />
      <WhyAlBalqan />
      <Stats />
      <Consultation />
      <Partners />
      <Insights />
      <Faq />
    </PageShell>
  );
}
