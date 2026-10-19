import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChecklistCard from "@/components/ChecklistCard";
import Cta from "@/components/Cta";
import { countryDetailPages } from "@/data/countries";
import { localize } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";

export const dynamicParams = false;

export const generateStaticParams = () =>
  countryDetailPages.ar.map((p) => ({ slug: p.slug }));

const getPage = (slug: string) =>
  countryDetailPages.ar.find((p) => p.slug === slug);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  const url = `/countries/${page.slug}`;
  return {
    title: { absolute: page.seoTitle },
    description: page.metaDescription,
    alternates: alternatesFor(url, "ar"),
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: `/ar${url}`,
      images: [{ url: page.image }],
    },
  };
}

export default async function CountryDetailPageAr({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: "https://albalqan.com/ar/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "الدول",
        item: "https://albalqan.com/ar/countries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.label,
        item: `https://albalqan.com/ar/countries/${page.slug}`,
      },
    ],
  };

  const others = countryDetailPages.ar.filter((p) => p.slug !== page.slug);
  const topicHref = `/contact?topic=${page.slug}`;

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        label="الدول"
        title={page.h1}
        text={page.intro}
        image={page.image}
        cta={{ label: page.cta, href: topicHref }}
      />
      <Breadcrumbs
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "الدول", href: "/countries" },
          { label: page.label },
        ]}
      />

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-2">
          <ChecklistCard title="من يناسبهم" items={page.whoItSuits} />
          <ChecklistCard title="كيف نساعدك" items={page.howWeHelp} />
        </div>
      </section>

      <Cta cta={page.cta} href={topicHref} />

      <section className="bg-white px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/45">
            دول أخرى
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={localize(`/countries/${p.slug}`, "ar")}
                className="group flex min-h-[44px] items-center justify-between gap-3 rounded-xl border border-black/10 px-5 py-4 text-[13px] font-light text-ash transition hover:border-black/30 hover:text-ink"
              >
                <span className="min-w-0 break-words">{p.label}</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                >
                  ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
