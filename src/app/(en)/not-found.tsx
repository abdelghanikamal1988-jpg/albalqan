import { asset } from "@/lib/asset";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex h-[72px] items-center px-5 md:px-10">
        <Link href="/" aria-label="AL BALQAN — home">
          <Image
            src={asset("/assets/logo-header.svg")}
            alt="AL BALQAN Tourism & Visa Services"
            width={45}
            height={56}
            className="h-11 w-auto"
          />
        </Link>
      </header>

      <main className="flex flex-1 items-center px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-ash">
            Error 404
          </p>
          <h1 className="mt-5 font-display text-[56px] leading-[0.95] tracking-tight text-ink sm:text-[96px] lg:text-[132px]">
            Page not
            <br />
            found.
          </h1>
          <p className="mt-7 max-w-md text-[14px] font-light leading-relaxed text-ash">
            The page you are looking for has moved or never existed. Return
            home to continue your journey.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="group relative overflow-hidden border border-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Back to Home
              </span>
              <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-400 ease-out group-hover:translate-y-0" />
            </Link>
            <Link
              href="/#consultation"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ash transition hover:text-ink"
            >
              Book a Consultation →
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10 px-5 py-6 text-[11px] text-ash md:px-10">
        © 2026 AL BALQAN Tourism &amp; Visa Services Company LLC
      </footer>
    </div>
  );
}
