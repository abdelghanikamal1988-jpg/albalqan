"use client";

import Reveal from "@/components/Reveal";
import { ui } from "@/data/ui";
import { useLang } from "@/components/I18nProvider";

export default function Quote() {
  const t = ui[useLang()];

  return (
    <section id="quote" className="bg-black px-5 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[42px]">
          &quot;{t.quote}&quot;
        </p>
        <p className="mt-8 text-[12px] uppercase tracking-[0.3em] text-white/55 md:mt-10">
          &mdash; {t.quoteBy}
        </p>
      </Reveal>
    </section>
  );
}
