import { asset } from "@/lib/asset";
import { I18nProvider } from "@/components/I18nProvider";
import { alternatesFor } from "@/lib/seo";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";

const calSans = localFont({
  src: "../fonts/CalSansVF.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-cal",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ar",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  name: "AL BALQAN — خدمات السياحة والتأشيرات",
  alternateName: "ال بلقان",
  url: "https://albalqan.com/ar",
  logo: "https://albalqan.com/assets/logo-header.svg",
  image: "https://albalqan.com/assets/hero-sasun.png",
  description:
    "خدمات متخصصة في التأشيرات وإقامة الذهب والخدمات القنصلية التنفيذية، تربط دولة الإمارات العربية المتحدة بفرص ممرات البلقان.",
  telephone: "+971 6 749 4905",
  email: "info@albalqan.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "الطابق 101، سارا بلازا 2، الجرف 2، فوق فرع الإمارات الإسلامي بنك",
    addressLocality: "عجمان",
    addressCountry: "AE",
  },
  areaServed: ["ألبانيا", "كوسوفو", "الجبل الأسود", "مقدونيا الشمالية", "صربيا"],
  openingHours: "Su-Th 09:00-18:00",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://albalqan.com"),
  title: {
    default: "AL BALQAN — خدمات السياحة والتأشيرات",
    template: "%s — AL BALQAN",
  },
  description:
    "خدمات متخصصة في التأشيرات وإقامة الذهب والخدمات القنصلية التنفيذية، تربط دولة الإمارات العربية المتحدة بفرص ممرات البلقان.",
  keywords: [
    "تأشيرات",
    "إقامة الذهب",
    "إقامة البلقان",
    "إقامة صربيا الذهبية",
    "التنقل السيادي",
    "استشارات الهجرة دبي",
    "إقامة ألبانيا",
    "الاستثمار في كوسوفو",
  ],
  openGraph: {
    type: "website",
    locale: "ar_AE",
    url: "https://albalqan.com/ar",
    siteName: "AL BALQAN — خدمات السياحة والتأشيرات",
    title: "AL BALQAN — خدمات السياحة والتأشيرات",
    description:
      "التنقل السيادي وإقامة الذهب والخدمات القنصلية التنفيذية التي تربط الإمارات بفرص ممرات البلقان.",
    images: [
      {
        url: asset("/assets/hero-sasun.png"),
        width: 1200,
        height: 630,
        alt: "AL BALQAN — خدمات السياحة والتأشيرات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL BALQAN — خدمات السياحة والتأشيرات",
    description:
      "التنقل السيادي وإقامة الذهب والخدمات القنصلية التنفيذية التي تربط الإمارات بفرص ممرات البلقان.",
    images: [asset("/assets/hero-sasun.png")],
  },
  robots: { index: true, follow: true },
  alternates: alternatesFor("/", "ar"),
};

export default function ArabicRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${calSans.variable} ${inter.variable} ${arabic.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `if("scrollRestoration" in history)history.scrollRestoration="manual";`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <I18nProvider lang="ar">{children}</I18nProvider>
      </body>
    </html>
  );
}
