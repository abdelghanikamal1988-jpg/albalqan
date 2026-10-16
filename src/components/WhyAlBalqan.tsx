"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { whyCards } from "@/data/site";

export default function WhyAlBalqan() {
  return (
    <section id="why" className="bg-white px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          label="INSTITUTIONAL FOUNDATION"
          title="Why Al Balqan."
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12 md:gap-6">
          {whyCards.map((card, i) => {
            const dark = card.id === "balkan";
            const num = String(i + 1).padStart(2, "0");

            return (
              <Reveal key={card.id} delay={i * 80} className={card.span}>
                <div
                  className={`group relative flex h-full rounded-xl border p-6 transition-all duration-300 md:p-7 ${
                    dark
                      ? "border-ink bg-ink shadow-[0_30px_60px_-45px_rgba(0,0,0,0.8)] hover:shadow-[0_40px_70px_-40px_rgba(0,0,0,0.55)]"
                      : "border-black/10 bg-white hover:-translate-y-1 hover:border-black/25 hover:shadow-[0_30px_55px_-35px_rgba(0,0,0,0.45)]"
                  } ${
                    card.wide
                      ? "flex-col gap-5 md:flex-row md:items-center md:gap-6"
                      : "flex-col"
                  }`}
                >
                  <span
                    className={`absolute right-6 top-5 font-display text-[11px] tracking-[0.2em] ${dark ? "text-white/30" : "text-black/20"}`}
                  >
                    {num}
                  </span>

                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      dark
                        ? "bg-white/10 group-hover:bg-white/15"
                        : "bg-mist group-hover:bg-black/[0.06]"
                    }`}
                  >
                    <Image
                      src={card.icon}
                      alt=""
                      width={65}
                      height={65}
                      className={`h-7 w-7 object-contain ${dark ? "invert" : ""}`}
                    />
                  </span>

                  <div className={card.wide ? "min-w-0 flex-1" : "mt-5"}>
                    <h3
                      className={`text-[15px] font-semibold leading-snug tracking-tight ${dark ? "text-white" : "text-ink"}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-2.5 text-[13px] font-light leading-relaxed ${dark ? "text-white/65" : "text-ash"}`}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
