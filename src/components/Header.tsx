"use client";

import { asset } from "@/lib/asset";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, Fragment, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { navLinks, socials } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [inHero, setInHero] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [box, setBox] = useState<{ top: number; bottom: number } | null>(null);
  const lastY = useRef(0);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const lastLinkRef = useRef<HTMLAnchorElement>(null);
  const activeIdx = navLinks.findIndex((l) => l.href === pathname);

  const goTop = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    e.preventDefault();
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (y: number, opts?: object) => void };
      }
    ).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!open) return;
    const measure = () => {
      const f = firstLinkRef.current;
      const l = lastLinkRef.current;
      if (!f || !l) return;
      setBox({
        top: f.offsetTop,
        bottom: window.innerHeight - (l.offsetTop + l.offsetHeight),
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const hero = document.getElementById("top");
      let zone = -1;
      if (hero) {
        const heroH = hero.offsetHeight;
        const vh = window.innerHeight;
        zone = heroH > vh ? heroH - vh - 64 : heroH - 96;
      }
      setInHero(y < zone);
      const prev = lastY.current;
      lastY.current = y;
      if (y < 120) {
        setHidden(false);
        return;
      }
      if (y > prev + 2) setHidden(true);
      else if (y < prev - 2) setHidden(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shownIdx = hovered ?? (activeIdx >= 0 ? activeIdx : 0);
  const onDark = inHero && !open;
  const hideCls =
    hidden && !open ? "pointer-events-none opacity-0" : "opacity-100";
  const barGone = hidden && !inHero && !open;
  const whiteBar = !inHero && !(hidden && !open);
  const consultHref =
    pathname === "/" || pathname === "/contact" ? "#consultation" : "/contact";
  const consultCls = `group relative hidden overflow-hidden border px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 sm:block ${
    onDark ? "border-white text-white" : "border-ink text-ink"
  }`;
  const consultInner = (
    <>
      <span
        className={`relative z-10 transition-colors duration-300 ${
          onDark ? "group-hover:text-ink" : "group-hover:text-white"
        }`}
      >
        Book Consultation
      </span>
      <span
        className={`absolute inset-0 -translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0 ${
          onDark ? "bg-white" : "bg-ink"
        }`}
      />
    </>
  );

  return (
    <>
      <header
        style={{ viewTransitionName: "site-header" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all ease-in-out ${
          barGone
            ? "-translate-y-full opacity-0 duration-700 delay-150"
            : "translate-y-0 opacity-100 duration-300 delay-0"
        } ${
          whiteBar
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08),0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            onClick={goTop}
            aria-label="AL BALQAN — home"
            className="flex items-center"
          >
            <Image
              src={asset("/assets/logo-header.svg")}
              alt="AL BALQAN Tourism & Visa Services"
              width={45}
              height={56}
              className={`h-11 w-auto transition-all duration-300${
                onDark ? " brightness-0 invert" : ""
              }`}
            />
          </Link>

          <div
            className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 transition-opacity duration-300 ${hideCls}`}
          >
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.alt}
                className={`hidden opacity-70 transition-all duration-300 hover:opacity-100 sm:block${
                  onDark ? " brightness-0 invert" : ""
                }`}
              >
                <Image src={asset(s.src)} alt={s.alt} width={18} height={18} />
              </a>
            ))}
          </div>

          <div
            className={`flex items-center gap-3 transition-opacity duration-300 ${hideCls}`}
          >
            {consultHref.startsWith("#") ? (
              <a href={consultHref} className={consultCls}>
                {consultInner}
              </a>
            ) : (
              <Link href={consultHref} className={consultCls}>
                {consultInner}
              </Link>
            )}

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => {
                setOpen((v) => !v);
                setHovered(null);
              }}
              className="group flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            >
              <span
                className={`h-[2px] w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-ink"} ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-[2px] w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-ink"} ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-[2px] w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-ink"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 md:px-10">
          <nav className="flex flex-col items-start gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                ref={
                  i === 0
                    ? firstLinkRef
                    : i === navLinks.length - 1
                      ? lastLinkRef
                      : undefined
                }
                href={link.href}
                onClick={(e) => {
                  if (link.href === "/") goTop(e);
                  setOpen(false);
                  setHovered(null);
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group font-display text-4xl tracking-tight text-ink transition-all duration-500 sm:text-5xl ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${80 + i * 60}ms` }}
              >
                <span className="relative inline-block">
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1.5 h-[3px] origin-right scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 ${
                      activeIdx === i ? "scale-x-100" : ""
                    }`}
                  />
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="absolute bottom-8 right-5 flex flex-col items-end justify-between gap-10 md:right-10 md:bottom-[var(--menu-b)] md:top-[var(--menu-t)]"
          style={{
            ["--menu-t" as string]: `${box?.top ?? 0}px`,
            ["--menu-b" as string]: `${box?.bottom ?? 32}px`,
          }}
        >
          <div
            className={`flex gap-5 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "380ms" }}
          >
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.alt}
                className="opacity-70 transition hover:opacity-100"
              >
                <Image src={s.src} alt={s.alt} width={20} height={20} />
              </a>
            ))}
          </div>

          <div className="flex min-h-[60px] items-end justify-end">
            <p
              key={shownIdx}
              className="menu-desc max-w-[340px] text-right text-[14px] font-light leading-relaxed text-ash md:max-w-[440px] md:text-[16px]"
            >
              {navLinks[shownIdx].desc.split(" ").map((word, wi) => (
                <Fragment key={wi}>
                  {wi > 0 && " "}
                  <span
                    className="menu-word"
                    style={{ animationDelay: `${wi * 14}ms` }}
                  >
                    {word}
                  </span>
                </Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
