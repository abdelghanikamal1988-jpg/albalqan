import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";

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

export const countryDetailPages: Record<Lang, CountryDetailPage[]> = {
  en: [
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
  ],
  ar: [
    {
      slug: "albania-residency",
      country: "ألبانيا",
      label: "إقامة ألبانيا",
      seoTitle: "خدمات الإقامة في ألبانيا | AL BALQAN",
      metaDescription:
        "احصل على إرشاد متخصص في الإقامة بألبانيا للمهنيين والمستثمرين والعائلات. يدعمك AL BALQAN من الاستشارة حتى الموافقة.",
      h1: "مسارك نحو الإقامة في ألبانيا",
      intro:
        "تقدم ألبانيا مسارًا مرحبًا نحو الإقامة طويلة الأمد في البلقان، باقتصاد متنامٍ وسواحل متوسطية وإجراءات بسيطة لكثير من المتقدمين. يرشدك AL BALQAN من أول استشارة حتى الموافقة النهائية.",
      whoItSuits: [
        "المهنيون أصحاب عروض عمل",
        "المستثمرون",
        "أصحاب الأعمال",
        "العائلات الباحثة عن قاعدة مستقرة في أوروبا",
      ],
      howWeHelp: [
        "نقيّم أهليتك ونوصي بفئة الإقامة المناسبة",
        "نجهّز مستنداتك ونراجعها",
        "نقدّم طلبك ونتابعه مع السلطات",
        "ندعمك بعد الوصول",
      ],
      cta: "اطلب استشارة مجانية",
      image: asset("/assets/dest-albania.jpg"),
    },
    {
      slug: "kosovo-investment",
      country: "كوسوفو",
      label: "الاستثمار في كوسوفو",
      seoTitle: "دعم الاستثمار والإقامة في كوسوفو | AL BALQAN",
      metaDescription:
        "استكشف فرص الاستثمار والأعمال في كوسوفو. يرشدك AL BALQAN خلال الخطوات القانونية وطلبات الإقامة.",
      h1: "استثمر وابنِ في كوسوفو",
      intro:
        "كوسوفو سوق ناشئ بسكان شباب وفرص في التجارة والخدمات والعقارات. نساعد المستثمرين على فهم الخيارات والمضي قدمًا بثقة.",
      whoItSuits: [
        "المستثمرون",
        "رواد الأعمال الباحثون عن حضور تجاري",
        "المتقدمون المرتبط إقامتهم باستثمار",
      ],
      howWeHelp: [
        "نراجع أهداف استثمارك والمسارات المناسبة",
        "نرشدك في الخطوات القانونية والإدارية",
        "ننسّق مع الشركاء والسلطات المحلية",
        "ندعم طلب إقامتك",
      ],
      cta: "اطلب استشارة مجانية",
      image: asset("/assets/dest-kosovo.jpg"),
    },
    {
      slug: "serbia-golden-visa",
      country: "صربيا",
      label: "الإقامة الذهبية لصربيا",
      seoTitle: "التأشيرة الذهبية وإرشاد الإقامة في صربيا | AL BALQAN",
      metaDescription:
        "افهم خيارات إقامتك واستثمارك في صربيا. يجهّز AL BALQAN طلبك ويتتبعه خطوة بخطوة.",
      h1: "الإقامة من خلال صربيا",
      intro:
        "تقع صربيا في قلب البلقان وتجذب المستثمرين والمهنيين بموقعها المركزي وصلاتها القوية بأوروبا. نساعدك على فهم المسارات المتاحة واختيار ما يناسب خططك.",
      whoItSuits: ["المستثمرون", "أصحاب الأعمال", "المهنيون المهرة"],
      howWeHelp: [
        "نشرح خيارات الإقامة والاستثمار المتاحة",
        "نجهّز ملف طلب واضحًا ومنظّمًا",
        "نتولى التقديم والمتابعة",
        "نرشدك للخطوات التالية بعد الموافقة",
      ],
      cta: "اطلب استشارة مجانية",
      image: asset("/assets/dest-serbia.jpg"),
    },
    {
      slug: "montenegro-corporate",
      country: "الجبل الأسود",
      label: "الشركات في الجبل الأسود",
      seoTitle: "تأسيس الشركات والإقامة في الجبل الأسود | AL BALQAN",
      metaDescription:
        "سجّل شركة في الجبل الأسود واحصل على إقامة مرتبطة بعملك. يدعم AL BALQAN المؤسسين والفرق الشركاتية.",
      h1: "أطلق عملك في الجبل الأسود",
      intro:
        "يشتهر الجبل الأسود بحياته الساحلية وبيئته الداعمة للأعمال. ندعم الشركات ورواد الأعمال الراغبين في تسجيل نشاط والحصول على إقامة مرتبطة به.",
      whoItSuits: [
        "أصحاب الأعمال",
        "مؤسسو الشركات",
        "الفرق الشركاتية المنتقلة بموظفين",
      ],
      howWeHelp: [
        "نرشدك في هيكل الشركة والتسجيل",
        "ندعم المستندات الشركاتية",
        "نرتب إقامة المالكين والموظفين الرئيسيين",
        "نقدم إرشادات إدارية مستمرة",
      ],
      cta: "اطلب استشارة مجانية",
      image: asset("/assets/dest-montenegro.jpg"),
    },
    {
      slug: "north-macedonia-pathway",
      country: "مقدونيا الشمالية",
      label: "مسار مقدونيا الشمالية",
      seoTitle: "مسارات الإقامة في مقدونيا الشمالية | AL BALQAN",
      metaDescription:
        "اعثر على مسار الإقامة المناسب للعمل أو الأعمال أو العائلة في مقدونيا الشمالية بدعم متخصص من AL BALQAN.",
      h1: "مسار عملي إلى مقدونيا الشمالية",
      intro: "تقدم مقدونيا الشمالية قاعدة اقتصادية فعّالة مع وصول للأسواق الإقليمية. نرشدك خلال المسارات المتاحة لإقامة العمل والأعمال والعائلة.",
      whoItSuits: [
        "العمال",
        "رواد الأعمال",
        "العائلات الباحثة عن خيار عملي طويل الأمد",
      ],
      howWeHelp: [
        "نحدد المسار الذي يطابق وضعك",
        "نجهّز مستنداتك ونتحقق منها",
        "نتابع ملفك مع السلطات المختصة",
        "ندعمك خلال الاستقرار",
      ],
      cta: "اطلب استشارة مجانية",
      image: asset("/assets/dest-macedonia.jpg"),
    },
  ],
};

export const countryDetailSlugs = countryDetailPages.en.map((p) => p.slug);
