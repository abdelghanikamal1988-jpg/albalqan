import { asset } from "@/lib/asset";

export type CountryDetailPage = {
  slug: string;
  country: string;
  label: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whoItSuits: string[];
  howWeHelp: string[];
  cta: string;
  image: string;
};

export const countryDetailPages: CountryDetailPage[] = [
  {
    slug: "albania-residency",
    country: "Albania",
    label: "Albania Residency",
    seoTitle: "Albania Residency Services | AL BALQAN",
    metaDescription:
      "Get expert guidance on residency in Albania for professionals, investors, and families. AL BALQAN supports you from consultation to approval.",
    h1: "Your Path to Residency in Albania",
    intro:
      "Albania offers a welcoming route to long-term residence in the Balkans, with a growing economy, a Mediterranean coastline, and a straightforward process for many applicants. AL BALQAN guides you from the first consultation to the final approval.",
    whoItSuits: [
      "Professionals with a work offer",
      "Investors",
      "Business owners",
      "Families looking for a stable base in Europe",
    ],
    howWeHelp: [
      "Assess your eligibility and recommend the right residency category",
      "Prepare and review your documents",
      "Submit your application and follow it with the authorities",
      "Support you after arrival",
    ],
    cta: "Request a Free Consultation",
    image: asset("/assets/dest-albania.jpg"),
  },
  {
    slug: "kosovo-investment",
    country: "Kosovo",
    label: "Kosovo Investment",
    seoTitle: "Kosovo Investment & Residency Support | AL BALQAN",
    metaDescription:
      "Explore investment and business opportunities in Kosovo. AL BALQAN guides investors through legal steps and residency applications.",
    h1: "Invest and Build in Kosovo",
    intro:
      "Kosovo is an emerging market with a young population and opportunities in trade, services, and real estate. We help investors understand the options and move forward with confidence.",
    whoItSuits: [
      "Investors",
      "Entrepreneurs seeking a business presence",
      "Applicants whose residency is linked to an investment",
    ],
    howWeHelp: [
      "Review your investment goals and suitable routes",
      "Guide the legal and administrative steps",
      "Coordinate with local partners and authorities",
      "Support your residency application",
    ],
    cta: "Request a Free Consultation",
    image: asset("/assets/dest-kosovo.jpg"),
  },
  {
    slug: "serbia-golden-visa",
    country: "Serbia",
    label: "Serbia Golden Visa",
    seoTitle: "Serbia Golden Visa & Residency Guidance | AL BALQAN",
    metaDescription:
      "Understand your residency and investor options in Serbia. AL BALQAN prepares and follows your application step by step.",
    h1: "Residency Through Serbia",
    intro:
      "Serbia sits at the heart of the Balkans and attracts investors and professionals with its central location and strong connections to Europe. We help you understand the available routes and choose the one that fits your plans.",
    whoItSuits: ["Investors", "Business owners", "Skilled professionals"],
    howWeHelp: [
      "Explain the available residency and investor options",
      "Prepare a clear, organized application file",
      "Handle submission and follow-up",
      "Advise on the next steps after approval",
    ],
    cta: "Request a Free Consultation",
    image: asset("/assets/dest-serbia.jpg"),
  },
  {
    slug: "montenegro-corporate",
    country: "Montenegro",
    label: "Montenegro Corporate",
    seoTitle: "Montenegro Company Formation & Residency | AL BALQAN",
    metaDescription:
      "Register a company in Montenegro and secure residency linked to your business. AL BALQAN supports founders and corporate teams.",
    h1: "Set Up Your Business in Montenegro",
    intro:
      "Montenegro is known for its coastal lifestyle and its business-friendly environment. We support companies and entrepreneurs who want to register a business and secure residency tied to it.",
    whoItSuits: [
      "Business owners",
      "Company founders",
      "Corporate teams relocating staff",
    ],
    howWeHelp: [
      "Advise on company structure and registration",
      "Support corporate documentation",
      "Arrange residency for owners and key employees",
      "Provide ongoing administrative guidance",
    ],
    cta: "Request a Free Consultation",
    image: asset("/assets/dest-montenegro.jpg"),
  },
  {
    slug: "north-macedonia-pathway",
    country: "North Macedonia",
    label: "North Macedonia Pathway",
    seoTitle: "North Macedonia Residency Pathways | AL BALQAN",
    metaDescription:
      "Find the right work, business, or family residency pathway in North Macedonia with AL BALQAN's expert support.",
    h1: "A Practical Pathway to North Macedonia",
    intro:
      "North Macedonia offers a cost-effective base with access to regional markets. We guide you through the available pathways for work, business, and family residency.",
    whoItSuits: [
      "Workers",
      "Entrepreneurs",
      "Families seeking a practical, long-term option",
    ],
    howWeHelp: [
      "Identify the pathway that matches your situation",
      "Prepare and verify your documents",
      "Follow your file with the relevant authorities",
      "Support you through settlement",
    ],
    cta: "Request a Free Consultation",
    image: asset("/assets/dest-macedonia.jpg"),
  },
];

export const countryDetailSlugs = countryDetailPages.map((p) => p.slug);
