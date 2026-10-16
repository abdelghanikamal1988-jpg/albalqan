import { asset } from "@/lib/asset";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const calSans = localFont({
  src: "./fonts/CalSansVF.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-cal",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  name: "AL BALQAN Tourism & Visa Services",
  url: "https://albalqan.com",
  logo: "https://albalqan.com/assets/logo-header.svg",
  image: "https://albalqan.com/assets/hero-sasun.png",
  description:
    "Premier cross-border sovereign mobility, golden residency, and executive consular services connecting the United Arab Emirates with Balkan corridor opportunities.",
  telephone: "+971 6 749 4905",
  email: "info@albalqan.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Floor 101, Sara Plaza 2, Al Jurf 2, Above Emirates Islamic Bank Branch",
    addressLocality: "Ajman",
    addressCountry: "AE",
  },
  areaServed: ["Albania", "Kosovo", "Montenegro", "North Macedonia", "Serbia"],
  openingHours: "Su-Th 09:00-18:00",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://albalqan.com"),
  title: {
    default: "AL BALQAN — Tourism & Visa Services",
    template: "%s — AL BALQAN",
  },
  description:
    "Premier cross-border sovereign mobility, golden residency, and executive consular services connecting the United Arab Emirates with Balkan corridor opportunities.",
  keywords: [
    "visa services",
    "golden residency",
    "Balkan residency",
    "Serbia golden visa",
    "sovereign mobility",
    "Dubai immigration consultancy",
    "Albania residency",
    "Kosovo investment",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://albalqan.com",
    siteName: "AL BALQAN Tourism & Visa Services",
    title: "AL BALQAN — Tourism & Visa Services",
    description:
      "Sovereign mobility, golden residency, and executive consular services connecting the UAE with Balkan corridor opportunities.",
    images: [
      {
        url: asset("/assets/hero-sasun.png"),
        width: 1200,
        height: 630,
        alt: "AL BALQAN Tourism & Visa Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL BALQAN — Tourism & Visa Services",
    description:
      "Sovereign mobility, golden residency, and executive consular services connecting the UAE with Balkan corridor opportunities.",
    images: [asset("/assets/hero-sasun.png")],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${calSans.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
