"use client";

import { asset } from "@/lib/asset";

import Image from "next/image";
import Link from "next/link";
import { footerColumns, legalLinks, socials } from "@/data/site";
import { ui } from "@/data/ui";
import { localize } from "@/lib/i18n";
import { useLang } from "@/components/I18nProvider";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const lang = useLang();
  const t = ui[lang];
  const cols = footerColumns[lang];
  const legals = legalLinks[lang];

  return (
    <footer className="bg-black px-5 pb-8 pt-16 text-white md:px-10 md:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href={localize("/", lang)} aria-label="AL BALQAN — home">
              <Image
                src={asset("/assets/logo-footer.svg")}
                alt={lang === "ar" ? "AL BALQAN للسياحة والتأشيرات" : "AL BALQAN Tourism & Visa Services"}
                width={500}
                height={120}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-[340px] text-[13px] font-light leading-relaxed text-white/55">
              {t.footerTagline}
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.alt}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={lang === "ar" ? s.altAr : s.alt}
                  className="opacity-70 transition hover:opacity-100"
                >
                  <Image
                    src={asset(s.src)}
                    alt={lang === "ar" ? s.altAr : s.alt}
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                </a>
              ))}
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-wider text-white/35">
              {siteConfig.licenseDetails}
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-3">
              <h3 className="border-b border-white/25 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={localize(item.href, lang)}
                      className="text-[13px] font-light text-white/55 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="border-b border-white/25 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              {t.footerOffice}
            </h3>
            <address className="mt-5 space-y-1.5 text-[13px] font-light not-italic leading-relaxed text-white/55">
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=FLOOR%20101%2C%20SARA%20PLAZA%202%2C%20AL%20JURF%202%2C%20AJMAN%2C%20UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {t.footerLine1}
                </a>
              </p>
              <p>{t.footerLine2}</p>
              <p className="text-white/45">{t.footerLine3}</p>
              <p>{t.footerLine4}</p>
            </address>
            <div className="mt-5 space-y-1.5 border-t border-white/10 pt-5 text-[13px] font-light text-white/55">
              <p>
                <a
                  href="tel:+97167494905"
                  dir="ltr"
                  className="transition hover:text-white"
                >
                  (+971) 6 749 4905
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@albalqan.com"
                  className="transition hover:text-white"
                >
                  info@albalqan.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-[11px] text-white/45 md:flex-row">
          <p>{t.footerRights}</p>
          <div className="flex gap-6">
            {legals.map((l) => (
              <Link
                key={l.label}
                href={localize(l.href, lang)}
                className="transition hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
