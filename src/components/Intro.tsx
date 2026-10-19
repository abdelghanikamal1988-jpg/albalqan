"use client";

import { asset } from "@/lib/asset";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ui } from "@/data/ui";
import { useLang } from "@/components/I18nProvider";

type Phase = "show" | "leave" | "done";

const RING_R = 56;
const CIRC = 2 * Math.PI * RING_R;
const RING_DUR = 1000;

let introPlayed = false;

export default function Intro() {
  const lang = useLang();
  const [phase, setPhase] = useState<Phase>(() =>
    introPlayed ? "done" : "show",
  );
  const [count, setCount] = useState(0);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (introPlayed) return;
    introPlayed = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    if (reduce) {
      if (ringRef.current) ringRef.current.style.strokeDashoffset = "0";
    } else {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / RING_DUR, 1);
        const p = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        if (ringRef.current) {
          ringRef.current.style.strokeDashoffset = String(CIRC * (1 - p));
        }
        setCount(Math.round(p * 100));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    const t1 = setTimeout(() => setPhase("leave"), 1150);
    const t2 = setTimeout(() => setPhase("done"), 2200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  const leaving = phase === "leave";

  return (
    <div
      aria-hidden
      className={`intro-layer fixed inset-0 z-[110] ${
        leaving ? "pointer-events-none" : ""
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-ink transition-transform delay-[260ms] duration-[760ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          leaving ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-ink transition-transform delay-[260ms] duration-[760ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          leaving ? "translate-y-full" : "translate-y-0"
        }`}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          leaving ? "-translate-y-4 scale-95 opacity-0" : ""
        }`}
      >
        <div className="relative flex h-[124px] w-[124px] items-center justify-center">
          <svg
            className="absolute inset-0"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
            aria-hidden
          >
            <circle
              cx="62"
              cy="62"
              r={RING_R}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
            <circle
              ref={ringRef}
              cx="62"
              cy="62"
              r={RING_R}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={CIRC}
              transform="rotate(-90 62 62)"
            />
          </svg>
          <span className="intro-mark block">
            <Image
              src={asset("/assets/logo-header.svg")}
              alt=""
              width={45}
              height={56}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </span>
        </div>

        <span className="intro-count mt-7 text-[11px] font-light tabular-nums tracking-[0.4em] text-white/70">
          {String(count).padStart(2, "0")}%
        </span>

        <span className="intro-sub mt-4 text-[10px] uppercase tracking-[0.45em] text-white/45">
          {ui[lang].introSub}
        </span>
      </div>
    </div>
  );
}
