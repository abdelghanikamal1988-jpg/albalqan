import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "About AL BALQAN | Balkan Visa & Residency Advisory from the UAE",
  },
  description:
    "A UAE-based advisory with 20+ years of team experience guiding individuals, families, and investors toward visas, residency, and business setup across five Balkan countries.",
  alternates: alternatesFor("/about", "en"),
};

const whatWeDo = [
  {
    title: "Tourist visas",
    text: "For selected Balkan destinations.",
  },
  {
    title: "Work contracts and residency",
    text: "For professionals seeking opportunities in the region.",
  },
  {
    title: "Investor residency",
    text: "Supported by business formation.",
  },
  {
    title: "Company formation",
    text: "In the five countries we serve.",
  },
  {
    title: "Family residency",
    text: "So loved ones can move forward together.",
  },
];

const approach = [
  {
    title: "Listen first.",
    text: "Every case begins with a private consultation to understand your goals, timeline, and circumstances.",
  },
  {
    title: "Verify before promising.",
    text: "Eligibility depends on nationality, residence, and the requirements of each authority. We confirm what is realistic before any process begins.",
  },
  {
    title: "Handle the details.",
    text: "From document preparation to submission and follow-up, our team manages the process so you do not have to.",
  },
  {
    title: "Stay reachable.",
    text: "You deal with a dedicated team in the UAE, not a call center.",
  },
];

const values = [
  {
    title: "Confidentiality.",
    text: "Your personal and business information is treated with strict discretion.",
  },
  {
    title: "Clarity.",
    text: "Plain explanations, honest timelines, no hidden steps.",
  },
  {
    title: "Accountability.",
    text: "A single point of responsibility from consultation to completion.",
  },
  {
    title: "Focus.",
    text: "Five countries, studied closely, rather than a long list of destinations.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About Us"
        title="A trusted bridge between the UAE and the Balkans."
        text="AL BALQAN Tourism & Visa Services guides individuals, families, and investors through visas, residency, and company formation across five Balkan countries."
        image="/assets/hero-sasun.png"
      />

      <section className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading label="Who We Are" title="Depth Over Breadth." />

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
            <Reveal>
              <p className="text-[14px] font-light leading-[1.85] text-ash">
                AL BALQAN Tourism &amp; Visa Services is a UAE-based advisory
                company, licensed in 2026 (License No. 139681), specializing
                exclusively in the Balkan region.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[14px] font-light leading-[1.85] text-ash">
                Our team brings more than 20 years of combined experience in
                visa procedures, residency pathways, and cross-border business
                setup. We chose to focus on five countries rather than the whole
                world, because depth of knowledge matters more than breadth of
                promises.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            label="What We Do"
            title="From a First Question to a Completed Process."
          />

          <p className="mx-auto mt-6 max-w-2xl text-center text-[14px] font-light leading-relaxed text-ash">
            We help clients move from a first question to a completed process,
            with one team accountable at every step.
          </p>

          <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="border-t border-black/10 pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-ash">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-[15px] font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-[12.5px] font-light leading-relaxed text-ash">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading label="Our Approach" title="How Every Case Runs." />

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-16">
            {approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div>
                  <p className="font-display text-[20px] tracking-tight text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2.5 max-w-md text-[13.5px] font-light leading-relaxed text-ash">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading label="Our Values" title="What We Hold To." />

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-16">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="border-t border-black/10 pt-5">
                  <p className="font-display text-[20px] tracking-tight text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2.5 max-w-md text-[13.5px] font-light leading-relaxed text-ash">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[900px] text-center">
          <SectionHeading label="Why the Balkans" title="A Practical First Step into Europe." />
          <p className="mx-auto mt-8 max-w-3xl text-[14px] font-light leading-[1.85] text-ash">
            The Balkans combine accessible residency routes, growing economies,
            and strategic position between Europe, the Middle East, and beyond.
            For many clients from the UAE, they offer a practical and attractive
            first step into Europe.
          </p>
        </div>
      </section>

      <Cta
        title="Let's discuss your plans."
        text="Tell us where you want to go. We will tell you what is possible."
        cta="Request a Consultation"
      />
    </PageShell>
  );
}
