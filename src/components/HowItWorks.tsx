"use client";

import SectionHeading from "@/components/SectionHeading";
import usePinnedStages, { useMediaQuery } from "@/hooks/usePinnedStages";
import { steps } from "@/data/site";
import { ui } from "@/data/ui";
import { useLang } from "@/components/I18nProvider";

const STAGES = steps.en.length;

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const ramp = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));

export default function HowItWorks({ overlap = true }: { overlap?: boolean }) {
  const lang = useLang();
  const t = ui[lang];
  const list = steps[lang];
  const { ref, progress } = usePinnedStages<HTMLElement>(STAGES);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const q = reduced ? STAGES : Math.min(progress / 0.9, 1) * STAGES;

  return (
    <section
      id="how"
      ref={ref}
      style={{ height: `calc(100vh + ${(STAGES - 1)} * 50vh)` }}
      className={`relative bg-mist ${
        overlap
          ? "z-30 -mt-[100vh] shadow-[0_-40px_80px_-40px_rgba(0,0,0,0.45)]"
          : ""
      }`}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 pb-6 pt-20 md:px-10 md:pb-8 md:pt-28">
          <SectionHeading label={t.howLabel} title={t.howTitle} />

          <div className="mt-5 flex min-h-0 flex-1 items-center md:mt-10">
            <div className="grid w-full grid-cols-1 grid-rows-4 overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:grid-cols-2 sm:grid-rows-2 xl:aspect-[4/1] xl:grid-cols-4 xl:grid-rows-1">
              {list.map((s, i) => {
                const lp = clamp01(q - i);
                const rise = easeOut(lp);
                const n = ramp(lp, 0.05, 0.5);
                const lb = ramp(lp, 0.18, 0.62);
                const tx = ramp(lp, 0.3, 0.78);
                return (
                  <div key={s.number} className="relative overflow-hidden">
                    <div
                      className="flex h-full flex-col border border-white/10 bg-ink p-4 shadow-[0_18px_36px_-18px_rgba(0,0,0,0.55)] sm:p-5 md:p-6 xl:justify-center"
                      style={{
                        transform: `translateY(${(1 - rise) * 100}%)`,
                      }}
                    >
                      <div className="flex items-baseline gap-3 xl:block">
                        <span
                          className="font-display text-[26px] leading-none text-white/25 md:text-[40px] xl:text-[52px]"
                          style={{
                            opacity: n,
                            transform: `translateY(${(1 - n) * 18}px)`,
                          }}
                        >
                          {s.number}
                        </span>
                        <span
                          className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50 md:text-[11px] xl:mt-4 xl:block"
                          style={{
                            opacity: lb,
                            transform: `translateY(${(1 - lb) * 14}px)`,
                          }}
                        >
                          {s.label}
                        </span>
                      </div>
                      <p
                        className="mt-3 line-clamp-2 text-[13px] font-light leading-relaxed text-white/70 sm:line-clamp-none md:mt-4 xl:mt-6 xl:min-h-[70px] xl:text-[14px]"
                        style={{
                          opacity: tx,
                          transform: `translateY(${(1 - tx) * 10}px)`,
                        }}
                      >
                        {s.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
