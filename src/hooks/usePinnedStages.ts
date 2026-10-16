"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type RefObject,
} from "react";

export default function usePinnedStages<T extends HTMLElement>(
  stages: number,
): {
  ref: RefObject<T | null>;
  active: number;
  progress: number;
} {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;
      if (scrollable <= 0) return;
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const idx = Math.min(Math.floor(p * stages), stages - 1);
      setActive((prev) => (prev === idx ? prev : idx));
      setProgress((prev) =>
        Math.abs(prev - p) < 0.004 ? prev : Math.round(p * 1000) / 1000,
      );
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
  }, [stages]);

  return { ref, active, progress };
}

const serverMediaDefault = () => true;

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback((cb: () => void) => {
    const m = window.matchMedia(query);
    m.addEventListener("change", cb);
    return () => m.removeEventListener("change", cb);
  }, [query]);
  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );
  return useSyncExternalStore(subscribe, getSnapshot, serverMediaDefault);
}
