"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealVariant =
  | "up"
  | "left"
  | "right"
  | "scale"
  | "fade"
  | "wipe"
  | "wipe-up";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  once = true,
}: RevealProps) {
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
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const isClip = variant === "wipe" || variant === "wipe-up";
  const delayStyle = visible ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      data-v={isClip ? "fade" : variant}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delayStyle}
    >
      {isClip ? (
        <div
          data-clip={variant}
          className={`reveal-clip ${visible ? "is-visible" : ""}`}
          style={delayStyle}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
