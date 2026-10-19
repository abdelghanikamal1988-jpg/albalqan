import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { contactCards, quickAnswers } from "@/data/site";
import { ui } from "@/data/ui";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "تواصل مع AL BALQAN | اطلب استشارة" },
  description:
    "تحدث مع AL BALQAN حول التأشيرات والإقامة وتأسيس الشركات في البلقان. استشارة سرية من مكتبنا في الإمارات.",
  alternates: alternatesFor("/contact", "ar"),
};

const t = ui.ar;

export default function ContactPageAr() {
  return (
    <PageShell>
      <PageHero
        label="تواصل معنا"
        title="لنتحدث عن خطتك القادمة."
        text="شاركنا بعض التفاصيل وسيتواصل معك فريقنا بخطوات واضحة. كل محادثة سرية."
        image="/assets/dest-montenegro.jpg"
      />

      <section className="bg-white px-5 pt-20 pb-4 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.ar.map((c, i) => (
              <Reveal key={c.label} delay={i * 60} className="h-full">
                <div className="h-full border-t border-black/10 pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-ash">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      dir={c.href.startsWith("tel:") ? "ltr" : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block text-[15px] font-semibold text-ink transition-colors duration-300 hover:text-black/55"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-[15px] font-semibold text-ink">
                      {c.value}
                    </p>
                  )}
                  {c.sub && (
                    <p className="mt-1.5 text-[12.5px] font-light leading-relaxed text-ash">
                      {c.sub}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-xl border border-black/10">
              <iframe
                title={t.mapAria}
                src="https://www.google.com/maps?q=FLOOR%20101%2C%20SARA%20PLAZA%202%2C%20AL%20JURF%202%2C%20AJMAN%2C%20UAE&output=embed"
                className="h-[360px] w-full border-0 md:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-[12.5px] font-light leading-relaxed text-ash">
                {t.contactMapAddress}
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=FLOOR%20101%2C%20SARA%20PLAZA%202%2C%20AL%20JURF%202%2C%20AJMAN%2C%20UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:text-black/55"
              >
                {t.getDirections}
                <span className="al-ico ms-1.5" aria-hidden>
                  ←
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Consultation />

      <Faq
        items={quickAnswers.ar}
        label={t.quickAnswersLabel}
        title={t.quickAnswersTitle}
      />
    </PageShell>
  );
}
