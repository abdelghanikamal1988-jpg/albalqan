import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import HowItWorks from "@/components/HowItWorks";
import Cta from "@/components/Cta";
import { services } from "@/data/site";
import { serviceDetailPages } from "@/data/services";

export const metadata: Metadata = {
  title: {
    absolute: "Visa, Residency & Company Formation Services | AL BALQAN",
  },
  description:
    "Tourist visas, work contracts, investor residency, company formation, and family residency across Albania, Kosovo, Serbia, Montenegro, and North Macedonia.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        label="Our Services"
        title="Five pathways. One accountable team."
        text="From a short visit to a long-term life in the Balkans, we guide each step with clarity and discretion."
        image="/assets/slide-kosovo.jpg"
      />

      <section className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            label="Five Pathways"
            title="One File. One Officer. Every Step."
          />

          <div className="mt-14 border-t border-black/10 md:mt-20">
            {services.map((s, i) => {
              const detail = serviceDetailPages.find(
                (p) => p.label === s.title,
              );
              return (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="grid gap-6 border-b border-black/10 py-9 lg:grid-cols-12 lg:gap-x-12 lg:py-12">
                    <div className="lg:col-span-4">
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-[12px] tracking-[0.22em] text-black/35">
                          {s.n}
                        </span>
                        <h3 className="font-display text-[26px] leading-[1.15] tracking-tight text-ink sm:text-[30px]">
                          {detail ? (
                            <Link
                              href={`/services/${detail.slug}`}
                              className="underline-offset-8 decoration-black/20 hover:underline"
                            >
                              {s.title}
                            </Link>
                          ) : (
                            s.title
                          )}
                        </h3>
                      </div>
                    <p className="mt-5 max-w-md text-[12.5px] font-light leading-relaxed text-black/55 lg:ml-8">
                      <span className="font-medium uppercase tracking-[0.15em] text-black/45">
                        Best for:{" "}
                      </span>
                      {s.bestFor}
                    </p>
                  </div>

                  <div className="lg:col-span-4 lg:self-center">
                    <p className="max-w-xl text-[14px] font-light leading-relaxed text-ash sm:text-[15px]">
                      {s.text}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">
                      What is included
                    </p>
                    <ul className="mt-3.5 space-y-2">
                      {s.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex gap-2.5 text-[13px] font-light leading-relaxed text-ash"
                        >
                          <span className="mt-2 h-px w-3 shrink-0 bg-black/25" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks overlap={false} />

      <div className="mt-24 md:mt-32">
        <Cta
          title="Not sure which pathway fits?"
          text="A short consultation will point you to the right one."
          cta="Request a Consultation"
        />
      </div>
    </PageShell>
  );
}
