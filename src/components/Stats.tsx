"use client";

import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/data/site";
import { useLang } from "@/components/I18nProvider";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setValue(target), 0);
      return () => clearTimeout(t);
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return value;
}

function StatCell({
  stat,
  active,
  index,
}: {
  stat: Stat;
  active: boolean;
  index: number;
}) {
  const value = useCountUp(stat.value, active);
  return (
    <div
      className={`px-2 md:px-8 ${
        index > 0 ? "md:border-l md:border-white/10" : ""
      }`}
    >
      <p className="font-display text-[40px] leading-none tracking-tight text-white md:text-[56px]">
        {value}
        <span className="text-white/55">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-[11px]">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const lang = useLang();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-ink px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-12 md:grid-cols-4">
        {stats[lang].map((s, i) => (
          <StatCell key={s.label} stat={s} active={active} index={i} />
        ))}
      </div>
    </section>
  );
}
