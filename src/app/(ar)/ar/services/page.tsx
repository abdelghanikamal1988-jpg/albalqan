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
import { ui } from "@/data/ui";
import { localize } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "خدمات التأشيرات والإقامة وتأسيس الشركات | AL BALQAN",
  },
  description:
    "التأشيرات السياحية وعقود العمل وإقامة المستثمرين وتأسيس الشركات وإقامة العائلة في ألبانيا وكوسوفو وصربيا والجبل الأسود ومقدونيا الشمالية.",
  alternates: alternatesFor("/services", "ar"),
};

const t = ui.ar;

export default function ServicesPageAr() {
  return (
    <PageShell>
      <PageHero
        label="خدماتنا"
        title="خمسة مسارات. فريق واحد مسؤول."
        text="من زيارة قصيرة إلى حياة طويلة الأمد في البلقان، نرشدك في كل خطوة بوضوح وسرية."
        image="/assets/slide-kosovo.jpg"
      />

      <section className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            label="خمسة مسارات"
            title="ملف واحد. ضابط واحد. كل خطوة."
          />

          <div className="mt-14 border-t border-black/10 md:mt-20">
            {services.ar.map((s, i) => {
              const detail = serviceDetailPages.ar.find(
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
                              href={localize(`/services/${detail.slug}`, "ar")}
                              className="underline-offset-8 decoration-black/20 hover:underline"
                            >
                              {s.title}
                            </Link>
                          ) : (
                            s.title
                          )}
                        </h3>
                      </div>
                    <p className="mt-5 max-w-md text-[12.5px] font-light leading-relaxed text-black/55 lg:ms-8">
                      <span className="font-medium uppercase tracking-[0.15em] text-black/45">
                        {t.bestFor}{" "}
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
                      {t.whatIsIncluded}
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
          title="لست متأكد أي مسار يناسبك؟"
          text="استشارة قصيرة ستوجهك إلى المسار الصحيح."
          cta="اطلب استشارة"
        />
      </div>
    </PageShell>
  );
}
