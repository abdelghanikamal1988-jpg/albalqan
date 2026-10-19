import { asset } from "@/lib/asset";

import Image from "next/image";
import Link from "next/link";
import { ui } from "@/data/ui";

const t = ui.ar.notFound;

export default function NotFoundAr() {
  return (
    <div className="flex min-h-screen flex-col bg-white" dir="rtl">
      <header className="flex h-[72px] items-center px-5 md:px-10">
        <Link href="/ar" aria-label="AL BALQAN — الرئيسية">
          <Image
            src={asset("/assets/logo-header.svg")}
            alt="AL BALQAN للسياحة والتأشيرات"
            width={45}
            height={56}
            className="h-11 w-auto"
          />
        </Link>
      </header>

      <main className="flex flex-1 items-center px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-ash">
            {t.err}
          </p>
          <h1 className="mt-5 font-display text-[56px] leading-[0.95] tracking-tight text-ink sm:text-[96px] lg:text-[132px]">
            {t.title1}
            <br />
            {t.title2}
          </h1>
          <p className="mt-7 max-w-md text-[14px] font-light leading-relaxed text-ash">
            {t.text}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/ar"
              className="group relative overflow-hidden border border-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {t.backHome}
              </span>
              <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-400 ease-out group-hover:translate-y-0" />
            </Link>
            <Link
              href="/ar#consultation"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ash transition hover:text-ink"
            >
              {t.book}
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10 px-5 py-6 text-[11px] text-ash md:px-10">
        {t.footer}
      </footer>
    </div>
  );
}
