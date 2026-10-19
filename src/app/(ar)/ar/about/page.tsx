import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "عن AL BALQAN | استشارات تأشيرات وإقامة البلقان من الإمارات",
  },
  description:
    "استشارات إماراتية بخبرة فريق تتجاوز 20 عامًا ترشد الأفراد والعائلات والمستثمرين نحو التأشيرات والإقامة وتأسيس الأعمال في خمس دول بلقانية.",
  alternates: alternatesFor("/about", "ar"),
};

const whatWeDo = [
  {
    title: "التأشيرات السياحية",
    text: "لوجهات بلقانية مختارة.",
  },
  {
    title: "عقود العمل والإقامة",
    text: "للمهنيين الباحثين عن فرص في المنطقة.",
  },
  {
    title: "إقامة المستثمرين",
    text: "مدعومة بتأسيس الأعمال.",
  },
  {
    title: "تأسيس الشركات",
    text: "في الدول الخمس التي نخدمها.",
  },
  {
    title: "إقامة العائلة",
    text: "ليتحرك الأحبة معًا.",
  },
];

const approach = [
  {
    title: "نستمع أولًا.",
    text: "كل ملف يبدأ باستشارة سرية لفهم أهدافك وجدولك الزمني وظروفك.",
  },
  {
    title: "نتحقق قبل أن نعد.",
    text: "الأهلية تعتمد على الجنسية والإقامة ومتطلبات كل جهة. نؤكد ما هو واقعي قبل بدء أي إجراء.",
  },
  {
    title: "نتولى التفاصيل.",
    text: "من تجهيز المستندات إلى التقديم والمتابعة، يدير فريقنا العملية حتى لا تتحمل عبئها.",
  },
  {
    title: "نبقى متاحين.",
    text: "تعمل مع فريق مخصص في الإمارات، لا مع مركز اتصال.",
  },
];

const values = [
  {
    title: "السرية.",
    text: "تُعامل معلوماتك الشخصية والتجارية بخصوصية تامة.",
  },
  {
    title: "الوضوح.",
    text: "شروحات مبسطة وجداول واقعية وبدون خطوات مخفية.",
  },
  {
    title: "المساءلة.",
    text: "نقطة مسؤولية واحدة من الاستشارة حتى الإنجاز.",
  },
  {
    title: "التركيز.",
    text: "خمس دول مُدروسة عن قرب، بدل قائمة طويلة من الوجهات.",
  },
];

export default function AboutPageAr() {
  return (
    <PageShell>
      <PageHero
        label="من نحن"
        title="جسر موثوق بين الإمارات والبلقان."
        text="يرشد AL BALQAN للسياحة والتأشيرات الأفراد والعائلات والمستثمرين خلال التأشيرات والإقامة وتأسيس الشركات عبر خمس دول بلقانية."
        image="/assets/hero-sasun.png"
      />

      <section className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading label="من نحن" title="العمق قبل الاتساع." />

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
            <Reveal>
              <p className="text-[14px] font-light leading-[1.85] text-ash">
                AL BALQAN للسياحة والتأشيرات شركة استشارات مقرها الإمارات،
                مرخّصة منذ 2026 (رخصة رقم 139681)، متخصصة حصريًا في منطقة
                البلقان.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[14px] font-light leading-[1.85] text-ash">
                يتمتع فريقنا بخبرة تتجاوز 20 عامًا مجتمعة في إجراءات التأشيرات
                ومسارات الإقامة وتأسيس الأعمال العابرة للحدود. اخترنا التركيز على
                خمس دول بدل العالم كله، لأن عمق المعرفة أهم من اتساع الوعود.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            label="ماذا نفعل"
            title="من سؤال أول حتى عملية مكتملة."
          />

          <p className="mx-auto mt-6 max-w-2xl text-center text-[14px] font-light leading-relaxed text-ash">
            نساعد عملاءنا على الانتقال من سؤال أول إلى عملية مكتملة، مع فريق
            واحد مسؤول في كل خطوة.
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
          <SectionHeading label="نهجنا" title="كيف يُدار كل ملف." />

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
          <SectionHeading label="قيمنا" title="ما نلتزم به." />

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
          <SectionHeading
            label="لماذا البلقان"
            title="خطوة أولى عملية نحو أوروبا."
          />
          <p className="mx-auto mt-8 max-w-3xl text-[14px] font-light leading-[1.85] text-ash">
            يجمع البلقان بين مسارات إقامة في المتناول واقتصادات متنامية وموقع
            استراتيجي بين أوروبا والشرق الأوسط وما بعدهما. لعملاء كثيرون من
            الإمارات، تقدّم خطوة أولى عملية وجذابة نحو أوروبا.
          </p>
        </div>
      </section>

      <Cta
        title="لنناقش خططك."
        text="أخبرنا إلى أين تريد الذهاب، وسنخبرك بما هو ممكن."
        cta="اطلب استشارة"
      />
    </PageShell>
  );
}
