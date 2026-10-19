"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/data/site";
import { ui } from "@/data/ui";
import { useLang } from "@/components/I18nProvider";

type FaqItem = { q: string; a: string };

type FaqProps = {
  items?: FaqItem[];
  label?: string;
  title?: string;
};

export default function Faq({ items, label, title }: FaqProps) {
  const lang = useLang();
  const t = ui[lang];
  const list = items ?? faqs[lang];
  const headingLabel = label ?? t.faqDefaultLabel;
  const headingTitle = title ?? t.faqDefaultTitle;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <SectionHeading label={headingLabel} title={headingTitle} />

        <div className="mt-12">
          {list.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-black/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-start gap-4 md:gap-6">
                    <span
                      className="mt-0.5 shrink-0 font-display text-xl leading-none text-ink/20 transition-colors duration-300 group-hover:text-ink/45 md:text-3xl"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-medium leading-snug text-ink/85 md:text-[15px]">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`mt-0.5 shrink-0 text-xl leading-none text-ash transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-[13px] font-light leading-relaxed text-ash">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
