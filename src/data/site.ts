import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";

export type NavLink = { label: string; href: string; desc: string };

export const navLinks: Record<Lang, NavLink[]> = {
  en: [
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
  ],
  ar: [
    {
      label: "الرئيسية",
      href: "/",
      desc: "ابدأ مع AL BALQAN — نظرة شاملة واحدة على برامج التأشيرات والإقامة والتنقل، والدول التي نغطيها، ومدى سرعة انتقال ملفك من أول استشارة حتى الموافقة النهائية.",
    },
    {
      label: "من نحن",
      href: "/about",
      desc: "تعرّف على الفريق ومعايير الالتزام أولًا خلف AL BALQAN — مرخّصون في الإمارات، ونهج يقوم على السرية والشفافية، ومستندات تجتز المراجعة من أول مرة.",
    },
    {
      label: "خدماتنا",
      href: "/services",
      desc: "من التأشيرات قصيرة وطويلة الإقامة إلى إقامة الذهب وتصديق المستندات والخدمات القنصلية التنفيذية — كل خدمة تُدار من البداية إلى النهاية على يد ضابط ملف مخصص.",
    },
    {
      label: "الدول",
      href: "/countries",
      desc: "اكتشف الوجهات التي نفتحها — صربيا وباقي دول البلقان وجهات أوروبية مختارة، لكل منها أهلية واضحة وجداول زمنية واقعية وخبرة محلية ميدانية.",
    },
    {
      label: "تواصل معنا",
      href: "/contact",
      desc: "احجز استشارة سرية مع مستشار مرخّص. نراجع ملفك ونرسم لك الخيارات الواقعية ونرد خلال يوم عمل واحد — دون أي التزام، وبسرية تامة.",
    },
  ],
};

export type HeroSlide = {
  image?: string;
  tag: string;
  title: string;
  subtitle: string;
};

export const heroSlides: Record<Lang, HeroSlide[]> = {
  en: [
    {
      image: asset("/assets/slide-kosovo.jpg"),
      tag: "Service 01 · Short Stay",
      title: "Visit Visa.",
      subtitle:
        "Tourism, family visits and short business stays across the Western Balkans — applications prepared, filed and tracked end to end until the approval decision lands.",
    },
    {
      image: asset("/assets/hero-sasun.png"),
      tag: "Service 02 · Long Stay",
      title: "Resident Visa.",
      subtitle:
        "Renewable residency permits for you and your family — documented, compliant and managed through every renewal cycle across all five corridor countries.",
    },
    {
      image: asset("/assets/dest-serbia.jpg"),
      tag: "Service 03 · Golden Pathways",
      title: "Investor Visa.",
      subtitle:
        "Golden residency and investment-linked permits for capital, property and company formation — structured around your portfolio, your timeline and your exit.",
    },
  ],
  ar: [
    {
      image: asset("/assets/slide-kosovo.jpg"),
      tag: "الخدمة 01 · إقامة قصيرة",
      title: "تأشيرة زيارة.",
      subtitle:
        "السياحة وزيارات العائلة وإقامات العمل القصيرة في دول غرب البلقان — نُعدّ الطلبات ونقدّمها ونتابعها من أول خطوة حتى صدور قرار الموافقة.",
    },
    {
      image: asset("/assets/hero-sasun.png"),
      tag: "الخدمة 02 · إقامة طويلة",
      title: "تأشيرة إقامة.",
      subtitle:
        "تصاريح إقامة قابلة للتجديد لك ولعائلتك — موثقة ومتوافقة مع الأنظمة، وتُدار في كل دورة تجديد عبر دول البلقان الخمس.",
    },
    {
      image: asset("/assets/dest-serbia.jpg"),
      tag: "الخدمة 03 · المسارات الذهبية",
      title: "تأشيرة المستثمر.",
      subtitle:
        "إقامة ذهبية وتصاريح مرتبطة بالاستثمار لرأس المال والعقار وتأسيس الشركات — مصمّمة على محفظتك وجدولك الزمني واستراتيجية خروجك.",
    },
  ],
};

export type Destination = {
  name: string;
  tagline: string;
  image: string;
  text: string;
  suited: string;
};

export const destinations: Record<Lang, Destination[]> = {
  en: [
    {
      name: "Albania",
      tagline: "The Adriatic gateway.",
      image: asset("/assets/dest-albania.jpg"),
      text: "A coastal gateway blending untouched Adriatic and Ionian shorelines with a rapidly maturing investment climate. Albania offers streamlined pathways to residency, property ownership, and business establishment for those seeking early entry into one of Europe's most promising emerging markets.",
      suited: "Investors seeking an early-stage market, and families drawn to a coastal lifestyle.",
    },
    {
      name: "Kosovo",
      tagline: "A young economy on the rise.",
      image: asset("/assets/dest-kosovo.jpg"),
      text: "A young and fast-liberalizing economy at the heart of the Balkans. Kosovo presents distinctive opportunities in trade, services, and light industry for investors and professionals drawn to its growing market, favorable tax environment, and increasingly EU-aligned regulatory framework.",
      suited: "Entrepreneurs and professionals entering a fast-growing market.",
    },
    {
      name: "Serbia",
      tagline: "The regional powerhouse.",
      image: asset("/assets/dest-serbia.jpg"),
      text: "The region's largest and most diversified economy, anchored by thriving manufacturing, technology, and services sectors. Serbia offers robust infrastructure, competitive incentives for foreign investors, and a strategic position bridging Central Europe, the Balkans, and beyond.",
      suited: "Established businesses and professionals seeking scale and connectivity.",
    },
    {
      name: "Montenegro",
      tagline: "Refined Adriatic living.",
      image: asset("/assets/dest-montenegro.jpg"),
      text: "An Adriatic destination renowned for its dramatic coastline and luxury real estate market. Montenegro provides an accessible route to residency for investors and families seeking a refined European lifestyle alongside a stable, tourism-driven economy on the path toward EU accession.",
      suited: "Investors and families seeking lifestyle and property opportunities.",
    },
    {
      name: "North Macedonia",
      tagline: "The strategic crossroads.",
      image: asset("/assets/dest-macedonia.jpg"),
      text: "A strategic crossroads linking Western Europe with the wider Balkans, distinguished by its low cost of doing business, expanding free trade zones, and candidate status for EU membership. North Macedonia is an increasingly attractive base for company formation and long-term investment.",
      suited: "Business owners focused on cost efficiency and regional trade.",
    },
  ],
  ar: [
    {
      name: "ألبانيا",
      tagline: "بوابة البحر الأدرياتيكي.",
      image: asset("/assets/dest-albania.jpg"),
      text: "بوابة ساحلية تمزج شواطئ بحر الأدرياتيك والأيوني السليمة بمناخ استثماري سريع النضج. تقدّم ألبانيا مسارات مبسطة نحو الإقامة وتمليك العقار وتأسيس الأعمال لمن يرغب في الدخول المبكر إلى واحدة من أكثر أسواق أوروبا الصاعدة وعدًا.",
      suited: "المستثمرون الباحثون عن سوق في مراحله الأولى، والعائلات التي تنجذب إلى الحياة الساحلية.",
    },
    {
      name: "كوسوفو",
      tagline: "اقتصاد شاب في صعود.",
      image: asset("/assets/dest-kosovo.jpg"),
      text: "اقتصاد شاب يشهد تحررًا سريعًا في قلب البلقان. يقدّم كوسوفو فرصًا مميزة في التجارة والخدمات والصناعات الخفيفة للمستثمرين والمهنيين المنجذبين إلى سوقه المتنامية وبيئته الضريبية المواتية وإطاره التنظيمي المتناغم أكثر فأكثر مع الاتحاد الأوروبي.",
      suited: "رواد الأعمال والمهنيون الذين يدخلون سوقًا سريع النمو.",
    },
    {
      name: "صربيا",
      tagline: "القوة الاقتصادية للمنطقة.",
      image: asset("/assets/dest-serbia.jpg"),
      text: "أكبر اقتصادات المنطقة وأوسعها تنوعًا، تعتمد على قطاعات الصناعة التحويلية والتقنية والخدمات المزدهرة. تقدّم صربيا بنية تحتية قوية وحوافز تنافسية للمستثمرين الأجانب وموقعًا استراتيجيًا يربط أوروبا الوسطى بالبلقان وما بعدهما.",
      suited: "الشركات القائمة والمهنيون الباحثون عن التوسع والوصول إلى الأسواق.",
    },
    {
      name: "الجبل الأسود",
      tagline: "حياة أدرياتيكية راقية.",
      image: asset("/assets/dest-montenegro.jpg"),
      text: "وجهة أدرياتيكية تشتهر بسواحلها الخلابة وسوق عقارها الفاخر. يوفّر الجبل الأسود مسارًا ميسّرًا نحو الإقامة للمستثمرين والعائلات الباحثين عن نمط أوروبي راقٍ إلى جانب اقتصاد مستقر يعتمد على السياحة ويسير في طريق الانضمام إلى الاتحاد الأوروبي.",
      suited: "المستثمرون والعائلات الباحثون عن فرص نمط الحياة والعقار.",
    },
    {
      name: "مقدونيا الشمالية",
      tagline: "التقاطع الاستراتيجي.",
      image: asset("/assets/dest-macedonia.jpg"),
      text: "تقاطع استراتيجي يربط أوروبا الغربية بباقي دول البلقان، يتميز بانخفاض تكاليف ممارسة الأعمال ومناطق التجارة الحرة المتسعة وصفة المرشحية للانضمام إلى الاتحاد الأوروبي. وتزداد مقدونيا الشمالية جاذبية كقاعدة لتأسيس الشركات والاستثمار طويل الأمد.",
      suited: "أصحاب الشركات المهتمون بكفاءة التكلفة والتجارة الإقليمية.",
    },
  ],
};

export const countryServices: Record<Lang, string[]> = {
  en: [
    "Tourist Visa",
    "Work Contracts & Residency",
    "Investor Residency",
    "Company Formation",
    "Family Residency",
  ],
  ar: [
    "تأشيرة سياحية",
    "عقود العمل والإقامة",
    "إقامة المستثمر",
    "تأسيس الشركات",
    "إقامة العائلة",
  ],
};

export type Step = { label: string; number: string; text: string };

export const steps: Record<Lang, Step[]> = {
  en: [
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
  ],
  ar: [
    {
      label: "استشارة",
      number: "01",
      text: "نستمع إلى متطلباتك ونقيّم مسار التأشيرة أو الإقامة الأنسب لك.",
    },
    {
      label: "تجهيز المستندات",
      number: "02",
      text: "نرشدك إلى المستندات المطلوبة ونجهّز ملف طلبك كاملًا.",
    },
    {
      label: "التقديم والمعالجة",
      number: "03",
      text: "نقدّم ملفك وننسّق مع الجهات القنصلية والحكومية المختصة طوال فترة المعالجة.",
    },
    {
      label: "الإنجاز",
      number: "04",
      text: "تُصدر تأشيرتك أو إقامتك، ونواصل دعمك عند الحاجة.",
    },
  ],
};

export type WhyCard = {
  id: string;
  title: string;
  text: string;
  icon: string;
  wide: boolean;
  span: string;
};

const whyCardsEn: WhyCard[] = [
  {
    id: "team",
    title: "20+ Years Team Experience",
    text: "Consular officers, licensed attorneys, and corporate relocation directors bringing two decades of grounded execution.",
    icon: asset("/assets/icon-team-experience.png"),
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "integrated",
    title: "Integrated Services",
    text: "All-in-one solutions encompassing visas, bank account introduction, notary legalizations, tax ID issuance, and real estate review.",
    icon: asset("/assets/icon-intergrated-services.png"),
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "balkan",
    title: "Balkan-Focused Expertise",
    text: "Hyper-specialized focus exclusively on the 5 Balkan states rather than diluted, generic worldwide offerings.",
    icon: asset("/assets/icon-balkan-focused-expertise.png"),
    wide: true,
    span: "md:col-span-6",
  },
  {
    id: "family",
    title: "Family Solutions",
    text: "Turnkey dependent synchronization ensuring schooling approvals, European health coverage, and unified residency renewal cycles.",
    icon: asset("/assets/icon-family-solutions.png"),
    wide: true,
    span: "md:col-span-6",
  },
  {
    id: "personalized",
    title: "Personalized Guidance",
    text: "Dedicated senior case managers based in Dubai and Abu Dhabi providing direct, single-point-of-contact accountability.",
    icon: asset("/assets/icon-personalized-guidance.png"),
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "confidentiality",
    title: "Absolute Confidentiality",
    text: "Case files are handled under strict non-disclosure protocols — no third-party brokers, no data resale, complete professional discretion.",
    icon: asset("/assets/icon-absolute-confidentiality.png"),
    wide: false,
    span: "md:col-span-3",
  },
];

const whyCardsAr: WhyCard[] = [
  {
    id: "team",
    title: "خبرة فريق تتجاوز 20 عامًا",
    text: "ضابطون قنصليون ومحامون مرخّصون ومديرو انتقال مؤسسي يجمعون عشرين عامًا من التنفيذ الميداني الراسخ.",
    icon: asset("/assets/icon-team-experience.png"),
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "integrated",
    title: "خدمات متكاملة",
    text: "حلول شاملة تشمل التأشيرات والتوصية بفتح الحسابات البنكية وتصديق المستندات لدى الكاتب العدلي وإصدار الرقم الضريبي ومراجعة العقارات.",
    icon: asset("/assets/icon-intergrated-services.png"),
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "balkan",
    title: "تخصص مركّز على البلقان",
    text: "تركيز دقيق وحصري على دول البلقان الخمس فقط، لا على عروض عامة متناثرة حول العالم.",
    icon: asset("/assets/icon-balkan-focused-expertise.png"),
    wide: true,
    span: "md:col-span-6",
  },
  {
    id: "family",
    title: "حلول عائلية",
    text: "تنسيق متكامل جاهز للأفراد التابعين، يضمن موافقات الالتحاق بالمدارس والتغطية الصحية الأوروبية ودورات تجديد إقامة موحّدة.",
    icon: asset("/assets/icon-family-solutions.png"),
    wide: true,
    span: "md:col-span-6",
  },
  {
    id: "personalized",
    title: "إرشاد مخصص",
    text: "مدير ملفّين كبيرين مخصّصين مقيمين في دبي وأبوظبي، يقدّمان مساءلة مباشرة عبر نقطة تواصل واحدة.",
    icon: asset("/assets/icon-personalized-guidance.png"),
    wide: false,
    span: "md:col-span-3",
  },
  {
    id: "confidentiality",
    title: "سرية مطلقة",
    text: "تُدار ملفات الحالات وفق بروتوكولات عدم الإفصاح الصارمة — بلا وسطاء من طرف ثالث، بلا إعادة بيع للبيانات، وسرية احترافية كاملة.",
    icon: asset("/assets/icon-absolute-confidentiality.png"),
    wide: false,
    span: "md:col-span-3",
  },
];

export const whyCards: Record<Lang, WhyCard[]> = {
  en: whyCardsEn,
  ar: whyCardsAr,
};

export type ConsultationStep = { n: string; title: string; text: string };

export const consultationSteps: Record<Lang, ConsultationStep[]> = {
  en: [
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
  ],
  ar: [
    {
      n: "1",
      title: "تُرسل طلبك.",
      text: "شاركنا بعض التفاصيل عن أهدافك — يستغرق الأمر دقيقتين فقط.",
    },
    {
      n: "2",
      title: "نراجع بياناتك.",
      text: "يتحقق فريقنا من أهدافك ومن أهليتك المحتملة.",
    },
    {
      n: "3",
      title: "نتواصل معك.",
      text: "تصلك خطوة تالية واضحة وصادقة، دون أي التزام.",
    },
  ],
};

export const countries: Record<Lang, string[]> = {
  en: ["Albania", "Kosovo", "Montenegro", "North Macedonia", "Serbia"],
  ar: ["ألبانيا", "كوسوفو", "الجبل الأسود", "مقدونيا الشمالية", "صربيا"],
};

export const serviceTypes: Record<Lang, string[]> = {
  en: [
    "Tourist Visa",
    "Work Contracts & Residency",
    "Investor Residency",
    "Company Formation",
    "Family Residency",
    "General Inquiry",
    "Other",
  ],
  ar: [
    "تأشيرة سياحية",
    "عقود العمل والإقامة",
    "إقامة المستثمر",
    "تأسيس الشركات",
    "إقامة العائلة",
    "استفسار عام",
    "أخرى",
  ],
};

export const topicPrefill: Record<
  Lang,
  Record<string, { country?: string; service?: string }>
> = {
  en: {
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
  },
  ar: {
    "albania-residency": { country: "ألبانيا" },
    "kosovo-investment": { country: "كوسوفو" },
    "serbia-golden-visa": { country: "صربيا" },
    "montenegro-corporate": { country: "الجبل الأسود" },
    "north-macedonia-pathway": { country: "مقدونيا الشمالية" },
    "tourist-visa": { service: "تأشيرة سياحية" },
    "work-contracts-residency": { service: "عقود العمل والإقامة" },
    "investor-residency": { service: "إقامة المستثمر" },
    "company-formation": { service: "تأسيس الشركات" },
    "family-residency": { service: "إقامة العائلة" },
  },
};

export type FaqItem = { q: string; a: string };

export const faqs: Record<Lang, FaqItem[]> = {
  en: [
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
  ],
  ar: [
    {
      q: "ما متطلبات التأشيرة العامة لسكان الإمارات الداخلين إلى غرب البلقان؟",
      a: "تختلف المتطلبات حسب الجنسية والوجهة، لكنها تشمل عمومًا جواز سفر ساري، ونموذج طلب مكتمل، وإثبات مكان الإقامة، وإثبات حجز رحلة مواصلة، وإثبات توفر الموارد المالية. يؤكد لك مستشارونا قائمة المستندات الدقيقة المطلوبة لجوازك خلال مراجعة الأهلية الأولى.",
    },
    {
      q: "كيف يتم فحص عقود العمل وتصاريح العمل وتصديقها قانونيًا؟",
      a: "تُراجع العقود لمطابقتها لقانون العمل المحلي، وتُصادق لدى الكاتب العدلي عند الحاجة، ثم تُعتمد عبر الوزارات والقنصلية المختصة. وندير سلسلة التصديق كاملة نيابةً عنك.",
    },
    {
      q: "ما الحد الأدنى للاستثمار المطلوب للتأهل لإقامة المستثمر في دول البلقان الأوروبية؟",
      a: "تختلف الحدود بشكل كبير بين دول البلقان الخمس وتخضع للتغييرات التنظيمية. نقيّم ملفك وفق البرامج الحالية، ولا نعرض إلا المسارات التي تفي فيها أموالك بالحد المطلوب.",
    },
    {
      q: "أي أفراد العائلة يمكن إدراجهم في طلب إقامة واحد؟",
      a: "تسمح معظم دول البلقان بإقامة الأزواج والأطفال التابعين، وتمتد بعضها إلى الوالدين والمعولين الآخرين. نرسم صورة أسرتك كاملة في مرحلة الاستشارة، ليكون الالتحاق بالمدارس والتغطية الصحية متزامنين من اليوم الأول.",
    },
    {
      q: "ما الجداول الزمنية المعتادة من إيداع الملف حتى إصدار التصريح؟",
      a: "تختلف الجداول الزمنية حسب الوجهة والموسم واكتمال الملف. وبعد مراجعة الأهلية نزوّدك بمدة واقعية، ثم نتتبع ملفك في كل مرحلة حتى الإصدار.",
    },
  ],
};

export const quickAnswers: Record<Lang, FaqItem[]> = {
  en: [
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
  ],
  ar: [
    {
      q: "هل يجب أن أرفع المستندات الآن؟",
      a: "لا. تُطلب المستندات لاحقًا وخارج الموقع، بمجرد بدء إجراءات ملفك.",
    },
    {
      q: "هل الاستشارة الأولى مجانية؟",
      a: "نعم — مراجعة الأهلية والاستشارة الأولى مجانيتان، دون أي التزام بالمتابعة.",
    },
    {
      q: "هل يمكنني التواصل معكم عبر واتساب؟",
      a: "نعم، استخدم الرقم أعلاه للأسئلة السريعة.",
    },
  ],
};

export type FooterColumn = {
  title: string;
  items: { label: string; href: string }[];
};

export const footerColumns: Record<Lang, FooterColumn[]> = {
  en: [
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
  ],
  ar: [
    {
      title: "برامج دول البلقان",
      items: [
        { label: "إقامة ألبانيا", href: "/countries/albania-residency" },
        { label: "الاستثمار في كوسوفو", href: "/countries/kosovo-investment" },
        { label: "الإقامة الذهبية لصربيا", href: "/countries/serbia-golden-visa" },
        { label: "الشركات في الجبل الأسود", href: "/countries/montenegro-corporate" },
        { label: "مسار مقدونيا الشمالية", href: "/countries/north-macedonia-pathway" },
      ],
    },
    {
      title: "خدماتنا",
      items: [
        { label: "تأشيرة سياحية", href: "/services/tourist-visa" },
        { label: "عقود العمل والإقامة", href: "/services/work-contracts-residency" },
        { label: "إقامة المستثمر", href: "/services/investor-residency" },
        { label: "تأسيس الشركات", href: "/services/company-formation" },
        { label: "إقامة العائلة", href: "/services/family-residency" },
      ],
    },
  ],
};

export const legalLinks: Record<Lang, { label: string; href: string }[]> = {
  en: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Regulatory Disclosures", href: "/regulatory-disclosures" },
  ],
  ar: [
    { label: "سياسة الخصوصية", href: "/privacy-policy" },
    { label: "شروط الخدمة", href: "/terms-of-service" },
    { label: "الإفصاحات التنظيمية", href: "/regulatory-disclosures" },
  ],
};

export const socials = [
  {
    src: asset("/assets/social-facebook.svg"),
    alt: "Facebook",
    altAr: "فيسبوك",
    href: "https://www.facebook.com/share/1E1AM7GD9a/",
  },
  {
    src: asset("/assets/social-instagram.svg"),
    alt: "Instagram",
    altAr: "إنستغرام",
    href: "https://www.instagram.com/albalqan.tvs",
  },
  {
    src: asset("/assets/social-tiktok.svg"),
    alt: "TikTok",
    altAr: "تيك توك",
    href: "https://www.tiktok.com/@albalqan.tvs",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Record<Lang, Stat[]> = {
  en: [
    { value: 20, suffix: "+", label: "Years Combined Experience" },
    { value: 5, suffix: "", label: "Balkan Corridor Countries" },
    { value: 600, suffix: "+", label: "Files Managed" },
    { value: 24, suffix: "h", label: "First Response Time" },
  ],
  ar: [
    { value: 20, suffix: "+", label: "سنوات خبرة مجتمعة" },
    { value: 5, suffix: "", label: "دول البلقان الخمس" },
    { value: 600, suffix: "+", label: "ملف تمت إدارته" },
    { value: 24, suffix: "h", label: "زمن أول رد" },
  ],
};

export type Insight = {
  n: string;
  date: string;
  cat: string;
  title: string;
  read: string;
  excerpt: string;
  body: string[];
};

export const insights: Record<Lang, Insight[]> = {
  en: [
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
  ],
  ar: [
    {
      n: "01",
      date: "18 سبتمبر 2026",
      cat: "تنظيم",
      title:
        "إقامة المستثمر في صربيا: 50,000 يورو في حساب بنكي صربي وشركة مسجّلة",
      read: "5 دقائق",
      excerpt:
        "مسار إقامة المستثمر في صربيا يقوم على ركيزتين: شركة محلية مسجّلة، ورصيد بنكي يثبت ممارسة نشاط اقتصادي فعلي. إليك كيف تعملان معًا وما الذي يجب أن يثبته ملفك فعلًا.",
      body: [
        "تبقى إقامة المستثمر في صربيا من أسهل مسارات البلقان، لكن هذه البساطة مبالغ فيها بعض الشيء. فالبرنامج ليس مخططًا لإيداع سلبي، بل يرتكز على مشاركة اقتصادية فعلية: تؤسس شركة، وتموّل رأس مالها، وتُثبت أن المال مُوظَّف فعلًا في الاقتصاد الصربي، لا مجرد مبلغ مودع لغرض التأشيرة وحدها.",
        "المبلغ المعلن، 50,000 يورو، يُحوَّل إلى حساب بنكي صربي تملكه الشركة. وهذا المبلغ ليس رسومًا حكومية، بل رأس عامل يعود إلى عملك. ترغب السلطات في أن يظهر أن المال قادمًا من مصدر أجنبي محدّد الهوية، ويُودَع في حساب شركة مفتوح رسميًا، ثم يُستخدم بما يتوافق مع نشاط الشركة المصرّح به. والتحويل النظيف القابل للتتبع أهمّ بكثير من حجم الرصيد في أي يوم.",
        "يجب أن تكون الشركة مسجّلة لدى إدارة السجلات التجارية الصربية (APR) بنشاط حقيقي يتوافق مع ملفك — تجارة أو خدمات أو استشارات أو شركة فرعية تعمل فعليًا. وأي شركة واجهة بلا نشاط وإيداع بمبلغ مقطوع ستواجه تدقيقًا. وخطة عملك وسجل تجارك وسجلك الضريبي تشكّل الهيكل الذي يُبنى عليه ملف الإقامة.",
        "ولأن صربيا ليست عضوًا كاملًا في شينجن بعد، فتصريح الإقامة تصريح وطني. يمنحك إقامة قانونية وحق إدارة شركتك ويضعك في مسار واضح طويل الأمد — لكن التنقل داخل منطقة شينجن يخضع لقواعد الإقامة القصيرة المعتادة حتى اكتمال الانضمام. أمّا المستثمرون المنوّون بنقل عائلاتهم، فليحسبوا المدارس والرعاية الصحية ضمن السنة الأولى، لا بعد إصدار التصريح.",
        "يستغرق الانتقال من الملف المكتمل إلى صدور التصريح عادة بضعة أشهر، بشرط سلامة المستندات وعدم تغيّر الأنظمة أثناء المسار. وأقوى الطلبات تُهيّأ فيها تأسيس الشركة والحساب البنكي وتحويل رأس المال بترتيبها الصحيح قبل تقديم ملف الإقامة — لا تُضاف إليها لاحقًا استدراكًا.",
      ],
    },
    {
      n: "02",
      date: "2 سبتمبر 2026",
      cat: "بنكية",
      title:
        "فتح حساب بنكي صربي كأجنبي: قواعد غير المقيمين",
      read: "4 دقائق",
      excerpt:
        "فتح حساب لغير المقيمين في صربيا ممكن، لكنه يحتاج إلى مستندات كثيرة. القواعد تقوم على إثبات الهوية ومصدر الأموال وغرض الحساب — وكل بنك يزن هذه الثلاثة بوزن مختلف.",
      body: [
        "فتح حساب بنكي في صربيا كأجنبي ممكن تمامًا، لكن التجربة تختلف جذريًا بين أن تقدّم كسائح غير مقيم، أو مستثمر مرشح، أو مدير شركة مسجّلة بالفعل. تتعامل البنوك مع كل فئة بمستوى مخاطر مختلف، وتتغير قائمة المستندات وفقًا لذلك.",
        "الحد الأدنى لكل طلب غير مقيم: جواز سفر ساري، وإثبات عنوان في بلدك، وبيان واضح لغرض الحساب. لحساب شركة ستحتاج أيضًا مستخرج تسجيل APR، وشهادة التسجيل الضريبي، وإثبات صلاحيتك التصرف عن الشركة. وأدلة مصدر الأموال — كشوف حساب بنكي حديثة أو عقد عمل أو وثائق بيع أصول — تُطلب في أغلب الحالات.",
        "ونقطة الاحتكاك العملية أن البنوك الصربية تطبّق فحوصات مكافحة غسل الأموال بصرامة حقيقية. فالتحويل الوارد من كيان في ملاذ خارجي دون مبرر تجاري واضح يستدعي إجراءات العناية الواجبة الموسعة والتأخير. أمّا التحويلات المرتبطة بنشاط تجاري مُصرّح به أو راتب أو استثمار موثّق فتمرّ بسلاسة أكبر.",
        "التوقيت هو المتغير الثاني. فالحساب الشخصي العادي يمكن فتحه خلال أيام عمل معدودة بعد اكتمال المستندات، بينما الحساب المرتبط بشركة حديثة التأسيس يستغرق أطول، لأن البنك يتحقق بشكل مستقل من تسجيل الشركة ومالكها الفعلي. وإدراج ذلك ضمن جدول إقامتك — بدل اعتباره أمرًا لاحقًا — يمنع أن يصبح الحساب عنق الزجاجة لتحويل رأس المال الذي يعتمد عليه ملف الإقامة.",
      ],
    },
    {
      n: "03",
      date: "21 أغسطس 2026",
      cat: "استراتيجية",
      title:
        "إسبانيا أغلقت التأشيرة الذهبية في 2025 — واليونان تبدأ الآن من 800,000 يورو",
      read: "6 دقائق",
      excerpt:
        "إغلاق إسبانيا لبرنامج التأشيرة الذهبية وحد اليونان البالغ 800,000 يورو أعادا رسم خريطة الإقامة الأوروبية. صار البلقان الخيار العملي في المستوى المتوسط للمستثمرين الذين ما زالوا يبحثون عن قاعدة أوروبية.",
      body: [
        "أنهت إسبانيا برنامج التأشيرة الذهبية في 2025، مغلقةً مسارًا استقطب رؤوس أموال غير أوروبية كبيرة إلى سوقها العقاري طوال عقد كامل. وكان الإغلاق مدفوعًا بضغط سكني محلي لا بفشل نموذج الإقامة ذاته — لكن الأثر العملي أن أحد أشهر أبواب الإقامة بالاستثمار في الاتحاد الأوروبي صار مغلقًا أمام المتقدمين الجدد.",
        "اليونان، التي كانت المسار المتوسطي الآخر الأكثر استخدامًا، استجابت لنفس مخاوف السكن برفع الحد العقاري لليابسة إلى 800,000 يورو، مع إبقاء أرضية 400,000 يورو فقط لمناطق محددة كثافة سكانها منخفضة ومحلات تجارية محوّلة. وقد انتهى عصر التأشيرات الذهبية اليونانية الميسورة التكلفة نهائيًا.",
        "أمّا بالنسبة للمستثمرين الذين هدفهم الأساسي قاعدة أوروبية — للعائلة، وللوصول البنكي، ولمرونة الخيارات — فقد تغيّرت المعادلة. لم تعد المسارات المتوسطية الخيار الأول الواضح، بل انتقل غرب البلقان من بديل محدود إلى موقع عملي في المستوى المتوسط: عتبات رأس مال أدنى، ونشاط اقتصادي حقيقي بدل مضاربة عقارية خالصة، وتصاريح إقامة تدعم انتقالًا فعليًا.",
        "صربيا وألبانيا والجبل الأسود وكوسوفو تسعّر مساراتها بشكل مختلف، لكن جميعها تنخفض عن 800,000 يورو بفارق كبير. والأهم أن بعضها يكافئ النشاط الاقتصادي الفعلي — شركة أو عقد أو منشأة تشغيلية — على شراء عقار سلبي. وهذا أنسب لرواد الأعمال ممن يسعون إلى الحفاظ على رأس مالهم فحسب، ولهذا ظلت دول البلقان جذابة حتى مع تشديد برامج جنوب أوروبا.",
        "القراءة الاستراتيجية لعام 2026: إن كان هدفك إقامة مجاورة للاتحاد الأوروبي بمسار واقعي نحو استقرار طويل الأمد، فإن دول البلقان تقدّم أكثر الطرق المتبقية في المنطقة وفورًا في رأس المال. والمقابل أنها تصاريح وطنية خارج منطقة شينجن حاليًا — لذا يجب أن يستند قرارك إلى أين تنوي فعلًا أن تعيش وتعمل، لا إلى خرائط السفر بدون تأشيرة وحدها.",
      ],
    },
  ],
};

export type Service = {
  n: string;
  title: string;
  text: string;
  includes: string[];
  bestFor: string;
};

export const services: Record<Lang, Service[]> = {
  en: [
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
  ],
  ar: [
    {
      n: "01",
      title: "تأشيرة سياحية",
      text: "مساعدة احترافية في طلبات التأشيرات السياحية لوجهات البلقان المختارة.",
      includes: [
        "مراجعة جنسيتك ووضع إقامتك وغرض السفر",
        "إرشادك إلى المستندات المطلوبة",
        "تجهيز الطلب ومراجعته",
        "المتابعة حتى صدور القرار",
      ],
      bestFor:
        "المسافرون والعائلات والمهنيون المخططون لزيارات قصيرة للسياحة أو استكشاف الأعمال.",
    },
    {
      n: "02",
      title: "عقود العمل والإقامة",
      text: "دعم للأفراد الباحثين عن فرص مهنية في البلقان، بما في ذلك الإجراءات التي تلي عقد العمل.",
      includes: [
        "تقييم ملفك والفرص المتاحة",
        "إرشادك حول إجراءات العقد والإقامة",
        "تجهيز المستندات ودعم التقديم",
        "التنسيق مع الأطراف المختصة",
      ],
      bestFor: "المهنيون والعاملون المهرة الباحثون عن العمل في المنطقة.",
    },
    {
      n: "03",
      title: "إقامة المستثمر",
      text: "فرص إقامة مرتبطة بتأسيس الأعمال والاستثمار في دول بلقان مختارة.",
      includes: [
        "استشارة لاختيار الدولة الأنسب",
        "تأسيس الشركة وحجز الاسم التجاري",
        "إجراءات إقامة المستثمر",
        "إجراءات إقامة الزوج والأبناء عند توفر الشروط",
      ],
      bestFor:
        "رواد الأعمال والمستثمرون الباحثون عن قاعدة أوروبية لعملهم وعائلتهم.",
    },
    {
      n: "04",
      title: "تأسيس الشركات",
      text: "تأسيس شركة في البلقان بالهيكل الأنسب لنشاطك.",
      includes: [
        "إرشادك في نوع الشركة والهيكل",
        "حجز الاسم التجاري",
        "تجهيز وثائق التأسيس",
        "دعم إجراءات التسجيل",
      ],
      bestFor: "أصحاب الشركات المتوسعين في المنطقة والمؤسسين لأول مرة.",
    },
    {
      n: "05",
      title: "إقامة العائلة",
      text: "نساعد العائلات على المضي قدمًا معًا بمجرد اكتمال مسار مقدّم الطلب الرئيسي.",
      includes: [
        "مراجعة أهلية الزوج والأبناء",
        "تجهيز مستندات كل فرد من أفراد العائلة",
        "تقديم منسّق ومتابعة",
      ],
      bestFor: "عائلات المستثمرين والمهنين المنتقلين إلى البلقان.",
    },
  ],
};

export const contactCards: Record<
  Lang,
  {
    label: string;
    value: string;
    sub?: string;
    href?: string;
  }[]
> = {
  en: [
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
  ],
  ar: [
    {
      label: "المكتب",
      value: "الطابق 101، سارا بلازا 2، الجرف 2",
      sub: "فوق فرع الإمارات الإسلامي بنك — عجمان، الإمارات العربية المتحدة",
      href: "https://www.google.com/maps/search/?api=1&query=FLOOR%20101%2C%20SARA%20PLAZA%202%2C%20AL%20JURF%202%2C%20AJMAN%2C%20UAE",
    },
    {
      label: "الهاتف",
      value: "(+971) 6 749 4905",
      href: "tel:+97167494905",
    },
    {
      label: "البريد الإلكتروني",
      value: "info@albalqan.com",
      sub: "استفسارات الأهلية وقوائم تحقق المستندات",
      href: "mailto:info@albalqan.com",
    },
    {
      label: "واتساب",
      value: "تحدّث مع ضابط الملف",
      sub: "مراسلة مباشرة، من الأحد إلى الخميس",
      href: "https://wa.me/97167494905",
    },
    {
      label: "ساعات العمل",
      value: "الأحد – الخميس",
      sub: "09:00 – 18:00 بتوقيت الخليج",
    },
    {
      label: "الرد الأول",
      value: "خلال 24 ساعة عمل",
      sub: "مراجعة الأهلية قبل جدولة الاستشارة",
    },
  ],
};
