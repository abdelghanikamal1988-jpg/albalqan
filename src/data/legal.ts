import { siteConfig } from "@/config/site";

export type LegalSection = {
  lead: string;
  body: string;
};

export type LegalPage = {
  slug: string;
  label: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalPage = {
  slug: "privacy-policy",
  label: "Privacy Policy",
  seoTitle: "Privacy Policy | AL BALQAN",
  metaDescription:
    "Learn how AL BALQAN collects, uses, and protects the information you send through our website.",
  h1: "Privacy Policy",
  sections: [
    {
      lead: "1. Who we are.",
      body: 'AL BALQAN Tourism & Visa Services ("AL BALQAN", "we", "us") is a company based in the United Arab Emirates.',
    },
    {
      lead: "2. Information we collect.",
      body: "We collect only what you choose to send us through our contact and inquiry forms: your name, email address, phone number, nationality, country of interest, and the message you write. We may also collect basic technical data such as browser type and pages visited, to improve the site.",
    },
    {
      lead: "3. How we use it.",
      body: "We use your information to respond to your inquiry, provide the services you ask about, and improve our website. We do not sell your personal data.",
    },
    {
      lead: "4. Sharing.",
      body: "We share information only with trusted service providers who help us operate our business, or when the law requires it.",
    },
    {
      lead: "5. Retention.",
      body: "We keep your information only as long as needed for these purposes or as the law requires.",
    },
    {
      lead: "6. Your rights.",
      body: "You may ask to access, correct, or delete your information at any time by contacting us.",
    },
    {
      lead: "7. Security.",
      body: "We take reasonable steps to protect your information, but no online system is completely secure.",
    },
    {
      lead: "8. Cookies.",
      body: "Our site may use cookies to improve your experience. You can control cookies through your browser settings.",
    },
    {
      lead: "9. Changes.",
      body: "We may update this policy and will post the new date above.",
    },
    {
      lead: "10. Contact.",
      body: siteConfig.email,
    },
  ],
};

export const termsOfService: LegalPage = {
  slug: "terms-of-service",
  label: "Terms of Service",
  seoTitle: "Terms of Service | AL BALQAN",
  metaDescription:
    "Read the terms that apply when you use the AL BALQAN website and consulting services.",
  h1: "Terms of Service",
  sections: [
    {
      lead: "1. Acceptance.",
      body: "By using this website, you agree to these terms.",
    },
    {
      lead: "2. Our role.",
      body: "AL BALQAN provides consulting and administrative support for visas, residency, and company formation. We are not a government body and we do not issue visas or residence permits.",
    },
    {
      lead: "3. Information on this site.",
      body: "Content is for general information only and may change. It is not legal advice. Requirements are set by each country's authorities and can change without notice.",
    },
    {
      lead: "4. No guarantee.",
      body: "All decisions belong to the competent authorities. We cannot guarantee approval, timelines, or outcomes.",
    },
    {
      lead: "5. Your responsibilities.",
      body: "You agree to give accurate and complete information. Incorrect information may cause delay or refusal.",
    },
    {
      lead: "6. Fees.",
      body: "Service fees, when applicable, are agreed in writing before we begin work. Government fees are separate and set by the authorities.",
    },
    {
      lead: "7. Intellectual property.",
      body: "All content, logos, and design on this site belong to AL BALQAN and may not be copied without permission.",
    },
    {
      lead: "8. Limitation of liability.",
      body: "To the extent allowed by law, AL BALQAN is not liable for losses resulting from use of this website or from decisions made by authorities.",
    },
    {
      lead: "9. Governing law.",
      body: "These terms are governed by the laws of the United Arab Emirates.",
    },
    {
      lead: "10. Contact.",
      body: siteConfig.email,
    },
  ],
};

export const regulatoryDisclosures: LegalPage = {
  slug: "regulatory-disclosures",
  label: "Regulatory Disclosures",
  seoTitle: "Regulatory Disclosures | AL BALQAN",
  metaDescription:
    "Important information about AL BALQAN's licensing, the nature of our services, and the limits of our role.",
  h1: "Regulatory Disclosures",
  sections: [
    {
      lead: "Company status.",
      body: `AL BALQAN Tourism & Visa Services is a company licensed in the United Arab Emirates.${
        siteConfig.licenseDetails
          ? ` License details: ${siteConfig.licenseDetails}.`
          : ""
      }`,
    },
    {
      lead: "Nature of services.",
      body: "We provide consulting and application support. We are not a law firm, and nothing on this site is legal, tax, or financial advice. For legal matters, please consult a qualified lawyer.",
    },
    {
      lead: "No government affiliation.",
      body: "We are not part of, and do not represent, any government or embassy. All visas and permits are issued solely by the competent authorities of each country.",
    },
    {
      lead: "No guarantees.",
      body: "Approval is never guaranteed. Requirements, fees, and processing times may change at any time.",
    },
    {
      lead: "Third parties.",
      body: "Where we work with local partners or professionals in other countries, they act independently and are responsible for their own services.",
    },
    {
      lead: "Complaints.",
      body: `If you are unhappy with our service, please write to ${siteConfig.email}. We will review your complaint and reply promptly.`,
    },
  ],
};

export const legalPages: LegalPage[] = [
  privacyPolicy,
  termsOfService,
  regulatoryDisclosures,
];

export const legalSlugs = legalPages.map((p) => p.slug);
