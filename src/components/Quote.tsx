"use client";

import Reveal from "@/components/Reveal";

export default function Quote() {
  return (
    <section id="quote" className="bg-black px-5 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[42px]">
          &quot;The clearest, most confidential path we found into
          Europe.&quot;
        </p>
        <p className="mt-8 text-[12px] uppercase tracking-[0.3em] text-white/55 md:mt-10">
          &mdash; Al Balqan Tourism &amp; Visa Services
        </p>
      </Reveal>
    </section>
  );
}
