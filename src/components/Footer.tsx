import Image from "next/image";
import Link from "next/link";
import { footerColumns, legalLinks, socials } from "@/data/site";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-black px-5 pb-8 pt-16 text-white md:px-10 md:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href="/" aria-label="AL BALQAN — home">
              <Image
                src="/assets/logo-footer.svg"
                alt="AL BALQAN Tourism & Visa Services"
                width={500}
                height={120}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-[340px] text-[13px] font-light leading-relaxed text-white/55">
              Premier cross-border sovereign mobility, golden residency, and
              executive consular services connecting the United Arab Emirates
              with Balkan corridor opportunities.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.alt}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.alt}
                  className="opacity-70 transition hover:opacity-100"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
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

          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-3">
              <h3 className="border-b border-white/25 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
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
              OFFICE
            </h3>
            <address className="mt-5 space-y-1.5 text-[13px] font-light not-italic leading-relaxed text-white/55">
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=FLOOR%20101%2C%20SARA%20PLAZA%202%2C%20AL%20JURF%202%2C%20AJMAN%2C%20UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Floor 101, Sara Plaza 2
                </a>
              </p>
              <p>Al Jurf 2, Ajman</p>
              <p className="text-white/45">
                Above Emirates Islamic Bank Branch
              </p>
              <p>United Arab Emirates</p>
            </address>
            <div className="mt-5 space-y-1.5 border-t border-white/10 pt-5 text-[13px] font-light text-white/55">
              <p>
                <a
                  href="tel:+97167494905"
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
          <p>
            2026 AL BALQAN Tourism &amp; Visa Services Company LLC. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
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
