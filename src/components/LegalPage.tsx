"use client";

import PageShell from "@/components/PageShell";
import type { LegalPage as LegalPageData } from "@/data/legal";
import { ui } from "@/data/ui";
import { useLang } from "@/components/I18nProvider";
import { siteConfig } from "@/config/site";

export default function LegalPage({ page }: { page: LegalPageData }) {
  const t = ui[useLang()];
  return (
    <PageShell>
      <section className="bg-white px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-ash">
            {t.legalLabel}
          </p>
          <h1 className="mt-5 font-display text-[38px] leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {page.h1}
          </h1>
          {siteConfig.lastUpdated && (
            <p className="mt-5 text-[12px] font-light italic text-black/45">
              {t.lastUpdated} {siteConfig.lastUpdated}
            </p>
          )}

          <div className="mt-10 space-y-8 border-t border-black/10 pt-10">
            {page.sections.map((s) => (
              <div key={s.lead}>
                <h2 className="text-[15px] font-semibold tracking-tight text-ink">
                  {s.lead}
                </h2>
                {s.body && (
                  <p className="mt-2.5 text-[14.5px] font-light leading-relaxed text-ash">
                    {s.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
