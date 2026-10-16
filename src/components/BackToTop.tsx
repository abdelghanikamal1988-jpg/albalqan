"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (y: number) => void };
      }
    ).__lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={toTop}
      data-cursor
      className={`group fixed bottom-5 left-5 z-30 flex h-9 w-9 items-center justify-center text-white mix-blend-difference transition-all duration-400 ${
        show
          ? "translate-y-0 opacity-70 hover:-translate-y-1 hover:opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <path
          d="M12 20V5M6 11l6-6 6 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
