"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const el = dotRef.current;
    if (!el) return;

    document.body.classList.add("cursor-hide");
    let raf = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      raf = 0;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(render);
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        "a, button, [role='button'], input, select, textarea, [data-cursor]",
      );
      el.classList.toggle("is-active", interactive);
      el.style.opacity = "1";
    };

    const leave = () => {
      el.style.opacity = "0";
    };

    document.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("cursor-hide");
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="cursor-dot fixed left-0 top-0 z-[130] h-2 w-2 rounded-full bg-white opacity-0 mix-blend-difference transition-[width,height,opacity] duration-300 ease-out pointer-events-none"
      style={{ transitionProperty: "width, height, opacity" }}
    />
  );
}
