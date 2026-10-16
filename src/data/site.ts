export const navLinks = [
  {
    label: "Home",
    href: "/",
    desc: "Begin with AL BALQAN — a single view of our visa, residency, and mobility programs, the countries we cover, and how fast a typical file moves from first consultation to final approval.",
  },
  {
    label: "About",
    href: "/about",
    desc: "Meet the team and the compliance-first standards behind AL BALQAN — licensed in the UAE and structured around discretion, transparency, and documentation that passes review the first time.",
  },
  {
    label: "Services",
    href: "/services",
    desc: "From short-stay and long-stay visas to golden residency, document legalisation, and executive consular support — every service is managed end-to-end by a dedicated case officer.",
  },
  {
    label: "Countries",
    href: "/countries",
    desc: "Discover the corridors we open — Serbia, the wider Balkans, and selected European destinations, each with clear eligibility, realistic timelines, and local expertise on the ground.",
  },
  {
    label: "Contact",
    href: "/contact",
    desc: "Book a confidential consultation with a licensed advisor. We review your case, outline realistic options, and reply within one business day — no obligation, full discretion.",
  },
];

export type HeroSlide = {
  image?: string;
  tag: string;
  title: string;
  subtitle: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/assets/slide-kosovo.jpg",
    tag: "Service 01 · Short Stay",
    title: "Visit Visa.",
    subtitle:
      "Tourism, family visits and short business stays across the Western Balkans — applications prepared, filed and tracked end to end until the approval decision lands.",
  },
  {
    image: "/assets/hero-sasun.png",
    tag: "Service 02 · Long Stay",
    title: "Resident Visa.",
    subtitle:
      "Renewable residency permits for you and your family — documented, compliant and managed through every renewal cycle across all five corridor countries.",
  },
  {
    image: "/assets/dest-serbia.jpg",
    tag: "Service 03 · Golden Pathways",
    title: "Investor Visa.",
    subtitle:
      "Golden residency and investment-linked permits for capital, property and company formation — structured around your portfolio, your timeline and your exit.",
  },
];

export const destinations = [
  {
    name: "Albania",
    tagline: "The Adriatic gateway.",
    image: "/assets/dest-albania.jpg",
    text: "A coastal gateway blending untouched Adriatic and Ionian shorelines with a rapidly maturing investment climate. Albania offers streamlined pathways to residency, property ownership, and business establishment for those seeking early entry into one of Europe's most promising emerging markets.",
    suited: "Investors seeking an early-stage market, and families drawn to a coastal lifestyle.",
  },
  {
    name: "Kosovo",
    tagline: "A young economy on the rise.",
    image: "/assets/dest-kosovo.jpg",
    text: "A young and fast-liberalizing economy at the heart of the Balkans. Kosovo presents distinctive opportunities in trade, services, and light industry for investors and professionals drawn to its growing market, favorable tax environment, and increasingly EU-aligned regulatory framework.",
    suited: "Entrepreneurs and professionals entering a fast-growing market.",
  },
  {
    name: "Serbia",
    tagline: "The regional powerhouse.",
    image: "/assets/dest-serbia.jpg",
    text: "The region's largest and most diversified economy, anchored by thriving manufacturing, technology, and services sectors. Serbia offers robust infrastructure, competitive incentives for foreign investors, and a strategic position bridging Central Europe, the Balkans, and beyond.",
    suited: "Established businesses and professionals seeking scale and connectivity.",
  },
  {
    name: "Montenegro",
    tagline: "Refined Adriatic living.",
    image: "/assets/dest-montenegro.jpg",
    text: "An Adriatic destination renowned for its dramatic coastline and luxury real estate market. Montenegro provides an accessible route to residency for investors and families seeking a refined European lifestyle alongside a stable, tourism-driven economy on the path toward EU accession.",
    suited: "Investors and families seeking lifestyle and property opportunities.",
  },
  {
    name: "North Macedonia",
    tagline: "The strategic crossroads.",
    image: "/assets/dest-macedonia.jpg",
    text: "A strategic crossroads linking Western Europe with the wider Balkans, distinguished by its low cost of doing business, expanding free trade zones, and candidate status for EU membership. North Macedonia is an increasingly attractive base for company formation and long-term investment.",
    suited: "Business owners focused on cost efficiency and regional trade.",
  },
];

export const countryServices = [
  "Tourist Visa",
  "Work Contracts & Residency",
  "Investor Residency",
  "Company Formation",
  "Family Residency",
];

export const steps = [
  {
    label: "CONSULTATION",
    number: "01",
    text: "Understand your requirements and assess the most suitable visa or residency pathway.",
  },
  {
    label: "DOCUMENT PREPARATION",
    number: "02",
    text: "We guide you through the required documents and prepare your application file.",
  },
  {
    label: "APPLICATION & PROCESSING",
    number: "03",
    text: "We submit your file and coordinate with the relevant consular and government channels throughout processing.",
  },
  {
    label: "COMPLETION",
    number: "04",
    text: "Your visa or residency is issued, and support continues as needed.",
  },
];

export const whyCards = [
  {
    id: "team",
    title: "20+ Years Team Experience",
    text: "Consular officers, licensed attorneys, and corporate relocation directors bringing two decades of grounded execution.",
    icon: "/assets/icon-team-experience.png",
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "integrated",
    title: "Integrated Services",
    text: "All-in-one solutions encompassing visas, bank account introduction, notary legalizations, tax ID issuance, and real estate review.",
    icon: "/assets/icon-intergrated-services.png",
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "balkan",
    title: "Balkan-Focused Expertise",
    text: "Hyper-specialized focus exclusively on the 5 Balkan states rather than diluted, generic worldwide offerings.",
    icon: "/assets/icon-balkan-focused-expertise.png",
    wide: true,
    span: "md:col-span-6",
  },
  {
    id: "family",
    title: "Family Solutions",
    text: "Turnkey dependent synchronization ensuring schooling approvals, European health coverage, and unified residency renewal cycles.",
    icon: "/assets/icon-family-solutions.png",
    wide: true,
    span: "md:col-span-6",
  },
  {
    id: "personalized",
    title: "Personalized Guidance",
    text: "Dedicated senior case managers based in Dubai and Abu Dhabi providing direct, single-point-of-contact accountability.",
    icon: "/assets/icon-personalized-guidance.png",
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "confidentiality",
    title: "Absolute Confidentiality",
    text: "Case files are handled under strict non-disclosure protocols — no third-party brokers, no data resale, complete professional discretion.",
    icon: "/assets/icon-absolute-confidentiality.png",
    wide: false,
    span: "md:col-span-3",
  },
];

export const consultationSteps = [
  {
    n: "1",
    title: "You send your request.",
    text: "Share a few details about your goals — it takes about two minutes.",
  },
  {
    n: "2",
    title: "We review your details.",
    text: "Our team checks your goals and likely eligibility.",
  },
  {
    n: "3",
    title: "We contact you.",
    text: "You receive a clear, honest next step, with no obligation.",
  },
];

export const countries = [
  "Albania",
  "Kosovo",
  "Montenegro",
  "North Macedonia",
  "Serbia",
];

export const serviceTypes = [
  "Tourist Visa",
  "Work Contracts & Residency",
  "Investor Residency",
  "Company Formation",
  "Family Residency",
  "General Inquiry",
  "Other",
];

export const topicPrefill: Record<
  string,
  { country?: string; service?: string }
> = {
  "albania-residency": { country: "Albania" },
  "kosovo-investment": { country: "Kosovo" },
  "serbia-golden-visa": { country: "Serbia" },
  "montenegro-corporate": { country: "Montenegro" },
  "north-macedonia-pathway": { country: "North Macedonia" },
  "tourist-visa": { service: "Tourist Visa" },
  "work-contracts-residency": { service: "Work Contracts & Residency" },
  "investor-residency": { service: "Investor Residency" },
  "company-formation": { service: "Company Formation" },
  "family-residency": { service: "Family Residency" },
};

export const faqs = [
  {
    q: "What are the general visa requirements for UAE residents entering the Western Balkans?",
    a: "Requirements vary by nationality and destination, but generally include a valid passport, completed application form, proof of accommodation, onward travel, and evidence of financial means. Our advisors confirm the exact checklist for your passport during the initial eligibility review.",
  },
  {
    q: "How are employment contracts and work permits vetted and legally authenticated?",
    a: "Contracts are reviewed for compliance with local labour law, notarized where required, and attested through the relevant ministries and consular channels. We manage the full chain of legalization on your behalf.",
  },
  {
    q: "What minimum investment is necessary to qualify for European Balkan Investor Residency?",
    a: "Thresholds differ significantly between the five corridors and are subject to regulatory change. We assess your profile against current programmes and present only the pathways where your capital allocation qualifies.",
  },
  {
    q: "Which family members can be included in a single residency application?",
    a: "Most corridors allow spouses and dependent children, and several extend to parents and other dependents. We map your household at the consultation stage so schooling and health coverage are synchronized from day one.",
  },
  {
    q: "What are typical processing timelines from file lodgment to permit issuance?",
    a: "Timelines depend on the destination, season, and completeness of the file. After your eligibility review we provide a realistic window, then track the file through every stage until issuance.",
  },
];

export const quickAnswers = [
  {
    q: "Do I need to upload documents now?",
    a: "No. Documents are requested later, outside the website, once your case begins.",
  },
  {
    q: "Is the first consultation free?",
    a: "Yes — the initial eligibility review and consultation are free, with no obligation to proceed.",
  },
  {
    q: "Can I contact you on WhatsApp?",
    a: "Yes, use the number above for quick questions.",
  },
];

export const footerColumns = [
  {
    title: "CORRIDOR PORTFOLIOS",
    items: [
      { label: "Albania Residency", href: "/countries/albania-residency" },
      { label: "Kosovo Investment", href: "/countries/kosovo-investment" },
      { label: "Serbia Golden Visa", href: "/countries/serbia-golden-visa" },
      { label: "Montenegro Corporate", href: "/countries/montenegro-corporate" },
      {
        label: "North Macedonia Pathway",
        href: "/countries/north-macedonia-pathway",
      },
    ],
  },
  {
    title: "OUR SERVICES",
    items: [
      { label: "Tourist Visa", href: "/services/tourist-visa" },
      { label: "Work Contracts & Residency", href: "/services/work-contracts-residency" },
      { label: "Investor Residency", href: "/services/investor-residency" },
      { label: "Company Formation", href: "/services/company-formation" },
      { label: "Family Residency", href: "/services/family-residency" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Regulatory Disclosures", href: "/regulatory-disclosures" },
];

export const socials = [
  {
    src: "/assets/social-facebook.svg",
    alt: "Facebook",
    href: "https://www.facebook.com/share/1E1AM7GD9a/",
  },
  {
    src: "/assets/social-instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/albalqan.tvs",
  },
  {
    src: "/assets/social-tiktok.svg",
    alt: "TikTok",
    href: "https://www.tiktok.com/@albalqan.tvs",
  },
];

export const stats = [
  { value: 20, suffix: "+", label: "Years Combined Experience" },
  { value: 5, suffix: "", label: "Balkan Corridor Countries" },
  { value: 600, suffix: "+", label: "Files Managed" },
  { value: 24, suffix: "h", label: "First Response Time" },
];

export const insights = [
  {
    n: "01",
    date: "18 SEP 2026",
    cat: "REGULATION",
    title:
      "Serbia's Investor Residence: EUR 50,000 in a Serbian Bank and a Registered Company",
    read: "5 min",
    excerpt:
      "Serbia's investor residence route is anchored on two concrete pillars: a registered local company and a bank balance that proves real economic substance. Here is how the two work together and what the file actually has to demonstrate.",
    body: [
      "Serbia's investor residence remains one of the more straightforward Balkan pathways, but the simplicity is somewhat overstated. The programme is not a passive deposit scheme. It is built around active economic participation: you form a company, you capitalise it, and you show that the capital is genuinely deployed in the Serbian economy rather than parked for the visa alone.",
      "The headline figure is EUR 50,000 wired into a Serbian bank account held by the company. That amount is not a government fee — it is working capital that belongs to your business. The authorities want to see the money arrive from an identifiable foreign source, sit in a properly opened corporate account, and then move in line with the company's stated activity. A clean, traceable transfer matters far more than the size of the balance on any single day.",
      "The company itself must be registered with the Serbian Business Registers Agency (APR) with a real activity that matches your profile — trading, services, consulting, or an operating subsidiary. A shell with no activity and a round-sum deposit will face scrutiny. Your business plan, trade registration, and tax registration form the skeleton that the residence file hangs on.",
      "Because Serbia is not yet a full Schengen member, the residence permit is a national permit. It grants legal residence and the right to run your company, and it puts you on a clear long-term path — but travel rights across the Schengen area follow the standard short-stay rules until accession completes. Investors who plan to relocate a family should factor schooling and healthcare into the first year, not after the permit is issued.",
      "Timeline from complete file to issued permit typically runs a few months, assuming clean documentation and no regulatory changes mid-process. The strongest applications are prepared with the company formation, the bank account, and the capital transfer all sequenced in the right order before the residence file is lodged — not retrofitted afterwards.",
    ],
  },
  {
    n: "02",
    date: "02 SEP 2026",
    cat: "BANKING",
    title:
      "Opening a Serbian Bank Account as a Foreigner: The Non-Resident Rules",
    read: "4 min",
    excerpt:
      "Non-resident account opening in Serbia is doable but document-heavy. The rules hinge on proving identity, source of funds, and the purpose of the account — and each bank weights those three differently.",
    body: [
      "Opening a bank account in Serbia as a foreigner is entirely possible, but the experience differs sharply depending on whether you apply as a non-resident tourist, a prospective investor, or an already-registered company director. Banks treat each category under a different risk profile, and the document set changes accordingly.",
      "At minimum, every non-resident application needs a valid passport, proof of address in your home country, and a clear statement of the account's purpose. For a company account you will also need the APR registration extract, the tax registration certificate, and proof of your authority to act for the company. Source-of-funds evidence — recent bank statements, an employment contract, or sale-of-asset documents — is requested more often than not.",
      "The practical friction point is that Serbian banks apply Anti-Money Laundering (AML) checks with genuine rigour. A wire arriving from an offshore entity with no obvious commercial rationale will trigger enhanced due diligence and delays. Transfers that can be tied to a declared business activity, a salary, or a documented investment pass through far more smoothly.",
      "Timing is the second variable. A straightforward personal account can be opened within a few working days once documents are complete. A corporate account tied to a newly formed company often takes longer, because the bank independently verifies the company's registration and beneficial ownership. Building this into your residence timeline — rather than treating it as an afterthought — prevents the account from becoming the bottleneck for the capital transfer the residence file depends on.",
    ],
  },
  {
    n: "03",
    date: "21 AUG 2026",
    cat: "STRATEGY",
    title:
      "Spain Shut Its Golden Visa in 2025 — Greece Now Starts at EUR 800,000",
    read: "6 min",
    excerpt:
      "Spain's 2025 golden visa closure and Greece's EUR 800,000 mainland threshold have reshaped the EU residency map. The Balkans now read as the pragmatic mid-tier option for investors who still want a European base.",
    body: [
      "Spain ended its golden visa programme in 2025, closing a route that had drawn significant non-EU capital into its property market for a decade. The closure was driven by domestic housing pressure rather than by any failure of the residence model itself — but the practical effect is that one of the most popular EU residency-by-investment doors is now shut to new applicants.",
      "Greece, which had been the other heavily used Mediterranean route, responded to the same housing concerns by pushing its mainland real-estate threshold to EUR 800,000, with a EUR 400,000 floor retained only for designated lower-density areas and converted commercial properties. The era of accessible Greek golden visas at five figures is definitively over.",
      "For investors whose primary goal is a European base — for the family, for banking access, for optionality — the arithmetic has changed. The Mediterranean routes are no longer the obvious first stop. The Western Balkans have moved from a niche alternative to a sensible mid-tier position: lower capital thresholds, genuine business activity rather than pure property speculation, and residency permits that support real relocation.",
      "Serbia, Albania, Montenegro, and Kosovo each price their pathways differently, but all sit orders of magnitude below EUR 800,000. More importantly, several of them reward economic substance — a company, a contract, an operating business — over passive property purchase. That is a better fit for entrepreneurs than for pure capital-preservation investors, and it is why the corridor has held its appeal even as the southern European programmes tightened.",
      "The strategic read for 2026: if your objective is EU-adjacent residency with a realistic path to long-term settlement, the Balkans offer the most capital-efficient entry left in the region. The trade-off is that these are national permits outside the Schengen area for now — so the decision should be driven by where you actually intend to live and operate, not by visa-free travel maps alone.",
    ],
  },
];

export const services = [
  {
    n: "01",
    title: "Tourist Visa",
    text: "Professional assistance with tourist visa applications for selected Balkan destinations.",
    includes: [
      "Review of your nationality, residence status, and travel purpose",
      "Guidance on the documents required",
      "Application preparation and review",
      "Follow-up until a decision is received",
    ],
    bestFor:
      "Travelers, families, and professionals planning short visits for tourism or business exploration.",
  },
  {
    n: "02",
    title: "Work Contracts & Residency",
    text: "Support for individuals seeking professional opportunities in the Balkans, including the procedures that follow a work contract.",
    includes: [
      "Assessment of your profile and the opportunities available",
      "Guidance on contract-related and residency procedures",
      "Document preparation and submission support",
      "Coordination with the relevant parties",
    ],
    bestFor: "Skilled professionals and workers exploring employment in the region.",
  },
  {
    n: "03",
    title: "Investor Residency",
    text: "Residency opportunities connected to business formation and investment in selected Balkan countries.",
    includes: [
      "Consultation to select the most suitable country",
      "Company formation and trade name reservation",
      "Residency procedures for the investor",
      "Residency procedures for spouse and children, where conditions are met",
    ],
    bestFor:
      "Entrepreneurs and investors seeking a European base for their business and family.",
  },
  {
    n: "04",
    title: "Company Formation",
    text: "Setting up a company in the Balkans with the right structure for your activity.",
    includes: [
      "Guidance on company type and structure",
      "Trade name reservation",
      "Preparation of formation documents",
      "Support through registration procedures",
    ],
    bestFor: "Business owners expanding into the region and first-time founders.",
  },
  {
    n: "05",
    title: "Family Residency",
    text: "Helping families move forward together once the primary applicant's pathway is in place.",
    includes: [
      "Eligibility review for spouse and children",
      "Document preparation for each family member",
      "Coordinated submission and follow-up",
    ],
    bestFor: "Families of investors and professionals relocating to the Balkans.",
  },
];

export const contactCards: {
  label: string;
  value: string;
  sub?: string;
  href?: string;
}[] = [
  {
    label: "Office",
    value: "Floor 101, Sara Plaza 2, Al Jurf 2",
    sub: "Above Emirates Islamic Bank — Ajman, United Arab Emirates",
    href: "https://www.google.com/maps/search/?api=1&query=FLOOR%20101%2C%20SARA%20PLAZA%202%2C%20AL%20JURF%202%2C%20AJMAN%2C%20UAE",
  },
  {
    label: "Telephone",
    value: "(+971) 6 749 4905",
    href: "tel:+97167494905",
  },
  {
    label: "Email",
    value: "info@albalqan.com",
    sub: "Eligibility enquiries and document checklists",
    href: "mailto:info@albalqan.com",
  },
  {
    label: "WhatsApp",
    value: "Chat with a case officer",
    sub: "Direct messaging, Sunday through Thursday",
    href: "https://wa.me/97167494905",
  },
  {
    label: "Office Hours",
    value: "Sunday – Thursday",
    sub: "09:00 – 18:00 Gulf Standard Time",
  },
  {
    label: "First Response",
    value: "Within 24 business hours",
    sub: "Eligibility review before consultation scheduling",
  },
];
