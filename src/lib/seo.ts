import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";

const BASE = "https://albalqan.com";

export function alternatesFor(
  path: string,
  lang: Lang,
): NonNullable<Metadata["alternates"]> {
  const p = path === "/" ? "" : path;
  const enUrl = `${BASE}${p}`;
  const arUrl = `${BASE}/ar${p}`;
  return {
    canonical: lang === "ar" ? arUrl : enUrl,
    languages: {
      en: enUrl,
      ar: arUrl,
      "x-default": enUrl,
    },
  };
}

export const siteBase = BASE;
