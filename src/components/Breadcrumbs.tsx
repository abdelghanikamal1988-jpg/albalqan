"use client";

import Link from "next/link";
import { localize } from "@/lib/i18n";
import { useLang } from "@/components/I18nProvider";

export type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const lang = useLang();
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-black/10 bg-white px-5 py-4 md:px-10"
    >
      <ol className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium uppercase tracking-[0.18em]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-black/30">
                  /
                </span>
              )}
              {item.href && !last ? (
                <Link
                  href={localize(item.href, lang)}
                  className="flex min-h-[44px] items-center text-black/45 transition hover:text-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className="text-ink"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
