export type Lang = "en" | "ar";

export const langs: Lang[] = ["en", "ar"];

export const langPrefix = (lang: Lang) => (lang === "ar" ? "/ar" : "");

export function localize(path: string, lang: Lang): string {
  const p = path === "/" ? "" : path;
  if (lang === "en") return p || "/";
  return p ? `/ar${p}` : "/ar";
}

export function stripPrefix(pathname: string): string {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  return pathname;
}
