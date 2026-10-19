"use client";

import { asset } from "@/lib/asset";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/site";
import { ui } from "@/data/ui";
import { useLang } from "@/components/I18nProvider";

const STAGES = heroSlides.en.length;
const FRAME_COUNT = 240;

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

function frameSrc(i: number) {
  return asset(`/assets/frames/f${String(i).padStart(3, "0")}.jpg`);
}

function scrubDist(vh: number) {
  return (STAGES - 1) * 1.2 * vh;
}

export default function Hero() {
  const lang = useLang();
  const slides = heroSlides[lang];
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgsRef = useRef<HTMLImageElement[]>([]);
  const wantIdx = useRef(0);
  const rafRef = useRef(0);
  const barRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  const slide = slides[index];

  const scheduleDraw = () => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      draw();
    });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imgs = imgsRef.current;
    if (imgs.length === 0) return;

    const target = wantIdx.current;
    const usable = (j: number) =>
      j >= 0 && j < imgs.length && imgs[j].complete && imgs[j].naturalWidth > 0;
    let img: HTMLImageElement | null = usable(target) ? imgs[target] : null;
    if (!img) {
      for (let d = 1; d < imgs.length && !img; d++) {
        if (usable(target - d)) img = imgs[target - d];
        else if (usable(target + d)) img = imgs[target + d];
      }
    }
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    if (cw === 0 || ch === 0) return;
    const vw = img.naturalWidth || 1280;
    const vh = img.naturalHeight || 720;
    const scale = Math.max(cw / vw, ch / vh);
    const dw = vw * scale;
    const dh = vh * scale;
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  };

  // entrance
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 150);
    return () => clearTimeout(t);
  }, []);

  // preload frame sequence; redraw instantly when the wanted frame arrives
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.decoding = "async";
      img.onload = () => {
        if (i === wantIdx.current) scheduleDraw();
      };
      img.src = frameSrc(i);
      imgs.push(img);
    }
    imgsRef.current = imgs;
    return () => {
      imgs.forEach((im) => {
        im.onload = null;
      });
      imgsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // canvas backing store follows viewport size / dpr
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      scheduleDraw();
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rAF-driven scrub: scroll events coalesce during programmatic/Lenis
  // scrolling (2 events per 442px observed), so read live geometry every
  // frame instead and redraw + drive the progress bar imperatively.
  // The scrub finishes at (STAGES-1)*120vh while the section stays pinned
  // for one extra viewport — the Destinations section then rises over the
  // frozen hero during that hold window.
  useEffect(() => {
    let tick = 0;
    const loop = () => {
      const sec = ref.current;
      if (sec) {
        const rect = sec.getBoundingClientRect();
        const scrub = scrubDist(window.innerHeight);
        const p = Math.min(Math.max(-rect.top / scrub, 0), 1);
        const idx = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.round(p * (FRAME_COUNT - 1))),
        );
        if (idx !== wantIdx.current) {
          wantIdx.current = idx;
          draw();
          const imgs = imgsRef.current;
          for (
            let j = idx + 1;
            j <= Math.min(idx + 5, imgs.length - 1);
            j++
          ) {
            const im = imgs[j];
            if (im && !im.complete) void im.decode().catch(() => {});
          }
        }
        const stage = Math.min(STAGES - 1, Math.floor(p * STAGES));
        setIndex((prev) => (prev === stage ? prev : stage));
        const bar = barRef.current;
        if (bar) bar.style.width = (p * 100).toFixed(2) + "%";
        const cue = cueRef.current;
        if (cue) cue.style.opacity = p > 0.06 ? "0" : "1";
      }
      tick = requestAnimationFrame(loop);
    };
    tick = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(tick);
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const goTo = (target: number) => {
    const i = Math.min(Math.max(target, 0), STAGES - 1);
    const sec = ref.current;
    if (!sec) return;
    const scrub = scrubDist(window.innerHeight);
    if (scrub <= 0) return;
    const secTop = sec.getBoundingClientRect().top + window.scrollY;
    const y = secTop + ((i + 0.5) / STAGES) * scrub;
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (y: number, o?: object) => void };
      }
    ).__lenis;
    if (lenis) lenis.scrollTo(y, { duration: 1.2 });
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="top"
      aria-roledescription="carousel"
      aria-label="AL BALQAN services"
      className="relative z-10 bg-ink"
      style={{ height: `calc(100vh + ${STAGES - 1} * 120vh + 100vh)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* media layer */}
        <div className="absolute inset-0">
          <Image
            src={frameSrc(0)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="photo-tone object-cover"
            aria-hidden
          />
          <canvas
            ref={canvasRef}
            aria-hidden
            className="absolute inset-0 h-full w-full photo-tone"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* ghost index */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-10 top-24 hidden select-none font-display text-[150px] leading-none text-white/[0.06] lg:block"
        >
          {pad(index)}
        </span>

        {/* content layer */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 md:px-10">
          <div
            className={`max-w-[680px] will-change-transform ${ready ? `is-hero-ready hero-v${index}` : ""}`}
            key={index}
          >
            <p
              className="hero-anim text-[11px] font-medium uppercase tracking-[0.4em] text-white/70"
              style={{ animationDelay: "0ms" }}
            >
              {slide.tag}
            </p>

            <h1
              className="hero-anim mt-5 font-display text-[38px] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[76px]"
              style={{ animationDelay: "120ms" }}
            >
              {slide.title}
            </h1>

            <p
              className="hero-anim mt-6 max-w-[520px] text-[13px] font-light leading-relaxed text-white/75 md:text-[14px]"
              style={{ animationDelay: "260ms" }}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>

        {/* right service nav */}
        <nav
          aria-label="Services"
          className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        >
          {slides.map((s, i) => {
            const isActive = i === index;
            return (
              <button
                key={i}
                type="button"
                aria-current={isActive}
                onClick={() => goTo(i)}
                className="group flex w-full items-center justify-end gap-4 py-3.5"
              >
                <span
                  className={`text-[12px] uppercase tracking-[0.28em] transition-colors duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-white/40 group-hover:text-white/75"
                  }`}
                >
                  {s.title.replace(/\.$/, "")}
                </span>
                <span
                  className={`block h-px transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "w-14 bg-white"
                      : "w-7 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
                <span
                  className={`text-[10px] tabular-nums tracking-[0.2em] transition-colors duration-500 ${
                    isActive ? "text-white/80" : "text-white/30"
                  }`}
                >
                  {pad(i)}
                </span>
              </button>
            );
          })}
        </nav>

        {/* bottom bar */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 pb-5 md:px-10 md:pb-6">
            {/* mobile dots */}
            <div className="flex items-center gap-2.5 md:hidden" role="tablist">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-label={s.title}
                  aria-selected={i === index}
                  onClick={() => goTo(i)}
                  className="group p-2"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/35 group-hover:bg-white/75"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* desktop scroll cue */}
            <div
              ref={cueRef}
              className="hidden items-center gap-3 opacity-100 transition-opacity duration-500 md:flex"
              aria-hidden
            >
              <span className="relative block h-8 w-px overflow-hidden bg-white/25">
                <span className="scroll-dot absolute left-0 top-0 block h-1.5 w-px bg-white" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
                {ui[lang].scroll}
              </span>
            </div>
          </div>

          {/* scroll progress line */}
          <div className="h-[2px] w-full bg-white/15">
            <div ref={barRef} className="h-full w-0 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
