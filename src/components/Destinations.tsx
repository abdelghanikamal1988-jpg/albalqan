"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { destinations } from "@/data/site";
import { ui } from "@/data/ui";
import { blurMap } from "@/data/blur";
import { useLang } from "@/components/I18nProvider";

export default function Destinations() {
  const lang = useLang();
  const t = ui[lang];
  const items = destinations[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const total = items.length;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh * 2;
      if (scrollable <= 0) return;
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const idx = Math.min(Math.floor(p * total), total - 1);
      setActive((prev) => (prev === idx ? prev : idx));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [total]);

  const d = items[active];

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="relative z-20 -mt-[100vh] bg-white shadow-[0_-40px_80px_-40px_rgba(0,0,0,0.45)]"
      style={{ height: `calc(300vh + ${(total - 1)} * 50vh)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto grid h-full max-w-[1440px] grid-rows-[40vh_1fr] lg:grid-cols-[46%_54%] lg:grid-rows-1">
          <div className="order-2 flex min-h-0 flex-col justify-center px-5 pb-8 pt-5 md:px-10 lg:order-1 lg:px-14 lg:py-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-ash">
              {t.destinationsLabel}
            </p>
            <h2 className="mt-3 font-display text-2xl leading-[1.15] tracking-tight text-ink sm:text-3xl lg:text-[40px]">
              {t.exploreBalkans}
            </h2>

            <div key={active} className="dest-copy mt-7 lg:mt-14">
              <div className="flex items-center gap-4">
                <span className="font-display text-xs tracking-[0.3em] text-ash/60">
                  {String(active + 1).padStart(2, "0")} —{" "}
                  {String(total).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-ink/10" />
              </div>
              <h3 className="dest-anim-a mt-5 font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl lg:text-[64px]">
                {d.name}
              </h3>
              <p className="dest-anim-b mt-5 max-w-xl text-[14px] font-light leading-relaxed text-ash sm:text-[15px] lg:text-base">
                {d.text}
              </p>
            </div>

            <div className="mt-7 max-w-md lg:mt-10">
              <div className="relative h-px bg-ink/10">
                <span
                  className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-700 ease-out"
                  style={{ width: `${((active + 1) / total) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="relative order-1 h-[40vh] overflow-hidden lg:order-2 lg:mr-10 lg:my-10 lg:h-auto lg:rounded-xl">
            {items.map((item, i) => (
              <Image
                key={item.name}
                src={item.image}
                alt={item.name}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 56vw, 100vw"
                placeholder="blur"
                blurDataURL={blurMap[item.image] ?? undefined}
                className={`absolute inset-0 photo-tone object-cover transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-[1.06] opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent lg:from-white/45" />
            <span className="pointer-events-none absolute bottom-4 right-5 font-display text-[11px] tracking-[0.3em] text-white/80 mix-blend-difference">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
