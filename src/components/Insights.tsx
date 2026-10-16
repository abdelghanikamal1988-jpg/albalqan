"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { insights } from "@/data/site";

export default function Insights() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="insights" className="bg-mist px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <SectionHeading
          label="INSIGHTS & NOTES"
          title="From the Corridor."
        />

        <div className="mt-12">
          {insights.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.n} delay={i * 90}>
                <div className="border-b border-black/15">
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
                        {item.n}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] uppercase tracking-[0.3em] text-ash">
                          {item.cat} · {item.date} · {item.read}
                        </span>
                        <span className="mt-2 block font-display text-lg leading-snug tracking-tight text-ink/85 transition-colors duration-300 group-hover:text-ink md:text-2xl">
                          {item.title}
                        </span>
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
                      <div className="pb-7 pl-0 md:pl-12">
                        <p className="max-w-[640px] text-[13px] font-light leading-relaxed text-ash">
                          {item.excerpt}
                        </p>
                        <div className="mt-5 max-w-[640px] space-y-4 border-t border-black/10 pt-5">
                          {item.body.map((para, pi) => (
                            <p
                              key={pi}
                              className="text-[13px] font-light leading-relaxed text-ash"
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
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
