"use client";

import { useEffect, useRef, useState } from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
  className?: string;
  light?: boolean;
};

export default function SectionHeading({
  label,
  title,
  className = "",
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = title.split(" ");

  return (
    <div
      ref={ref}
      className={`text-center ${visible ? "is-visible" : ""} ${className}`}
    >
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.35em] transition-opacity duration-1000 ${light ? "text-white/45" : "text-ash"} ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {label}
      </p>
      <h2
        className={`mt-4 font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px] ${light ? "text-white" : "text-ink"}`}
      >
        {words.map((w, i) => (
          <span className="word" key={`${w}-${i}`}>
            <span style={{ transitionDelay: `${i * 70}ms` }}>
              {w}
              {"\u00A0"}
            </span>
          </span>
        ))}
      </h2>
    </div>
  );
}
