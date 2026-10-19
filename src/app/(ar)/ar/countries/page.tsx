import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { countryServices, destinations } from "@/data/site";
import { countryDetailPages } from "@/data/countries";
import { ui } from "@/data/ui";
import { localize } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "دول البلقان التي نخدمها | ألبانيا، كوسوفو، صربيا، الجبل الأسود، مقدونيا الشمالية",
  },
  description:
    "استكشف فرص الإقامة والتأشيرات والأعمال في ألبانيا وكوسوفو وصربيا والجبل الأسود ومقدونيا الشمالية مع AL BALQAN.",
  alternates: alternatesFor("/countries", "ar"),
};

const t = ui.ar;

export default function CountriesPageAr() {
  return (
    <PageShell>
      <PageHero
        label="الوجهات"
        title="خمس دول. فريق واحد يعرفها جيدًا."
        text="لكل دولة بلقانية مزيج مختلف من الفرص ونمط الحياة والإجراءات. نساعدك على اختيار ما يناسب أهدافك."
        image="/assets/dest-serbia.jpg"
      />

      <section className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            label="برامج دول البلقان"
            title="أين نفتح الأبواب."
          />

          <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
            {destinations.ar.map((d, i) => {
              const flip = i % 2 === 1;
              const detail = countryDetailPages.ar.find(
                (p) => p.country === d.name,
              );
              return (
                <article
                  key={d.name}
                  className="group country-row grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  <Reveal
                    variant={flip ? "left" : "right"}
                    delay={flip ? 140 : 0}
                    className={flip ? "lg:order-1" : "lg:order-2"}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden rounded-xl">
                      <Image
                        src={d.image}
                        alt={d.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </Reveal>

                  <Reveal
                    variant={flip ? "right" : "left"}
                    delay={flip ? 0 : 140}
                    className={flip ? "lg:order-2" : "lg:order-1"}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-[11px] tracking-[0.25em] text-black/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-16 bg-black/15" />
                    </div>
                    <h3 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                      {detail ? (
                        <Link
                          href={localize(`/countries/${detail.slug}`, "ar")}
                          className="underline-offset-8 decoration-black/20 hover:underline"
                        >
                          {d.name}
                        </Link>
                      ) : (
                        d.name
                      )}
                    </h3>
                    <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.18em] text-black/45">
                      {d.tagline}
                    </p>
                    <p className="mt-4 max-w-xl text-[14px] font-light leading-relaxed text-ash sm:text-[15px]">
                      {d.text}
                    </p>

                    <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">
                      {t.servicesAvailable}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] font-light text-ash">
                      {countryServices.ar.map((svc) => (
                        <li key={svc}>{svc}</li>
                      ))}
                    </ul>

                    <p className="mt-5 max-w-xl text-[12.5px] font-light leading-relaxed text-black/55">
                      <span className="font-medium uppercase tracking-[0.15em] text-black/45">
                        {t.wellSuitedFor}{" "}
                      </span>
                      {d.suited}
                    </p>
                  </Reveal>
                </article>
              );
            })}
          </div>

          <Reveal delay={150}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-[12.5px] font-light leading-relaxed text-ash">
              المتطلبات والمسارات المتاحة تختلف حسب الدولة والجنسية وقد تتغير.
              نؤكد لك التفاصيل خلال استشارتك.
            </p>
          </Reveal>
        </div>
      </section>

      <Faq />

      <Cta
        title="لست متأكد أي دولة تناسبك؟"
        text="أهدافك وجنسيةتك وجدولك الزمني كلها تحدد الخيار الأفضل. في استشارة قصيرة نقارن الخيارات التي تنطبق عليك ونوصي بنقطة بداية واضحة."
        cta="اطلب استشارة"
      />
    </PageShell>
  );
}
