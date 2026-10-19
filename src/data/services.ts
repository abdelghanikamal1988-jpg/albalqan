import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";

export type ServiceDetailPage = {
  slug: string;
  label: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatWeDo: string[];
  cta: string;
  image: string;
};

export const serviceDetailPages: Record<Lang, ServiceDetailPage[]> = {
  en: [
    {
      slug: "tourist-visa",
      label: "Tourist Visa",
      seoTitle: "Balkan Tourist Visa Assistance | AL BALQAN",
      metaDescription:
        "Simple, guided tourist visa support for the Balkans. AL BALQAN reviews your documents and keeps you updated until a decision.",
      h1: "Travel to the Balkans With Ease",
      intro:
        "Planning a visit for tourism, family, or short business trips? We simplify the visa process so you can focus on your trip.",
      whatWeDo: [
        "Check which visa type you need",
        "Review your documents before submission",
        "Guide you on supporting papers such as bookings and itineraries",
        "Keep you updated until you receive a decision",
      ],
      cta: "Start Your Visa Inquiry",
      image: asset("/assets/slide-kosovo.jpg"),
    },
    {
      slug: "work-contracts-residency",
      label: "Work Contracts & Residency",
      seoTitle: "Work Contracts & Residency Permits | AL BALQAN",
      metaDescription:
        "Handle work contracts and employment-based residency in the Balkans correctly. AL BALQAN supports employers and employees.",
      h1: "Work Abroad With the Right Papers",
      intro:
        "If you have a job opportunity in the Balkans, we help you handle the contract and residency requirements correctly.",
      whatWeDo: [
        "Review work contract requirements",
        "Guide employers and employees through permit procedures",
        "Prepare the residency application linked to employment",
        "Support renewals and changes",
      ],
      cta: "Speak to an Advisor",
      image: asset("/assets/dest-kosovo.jpg"),
    },
    {
      slug: "investor-residency",
      label: "Investor Residency",
      seoTitle: "Investor Residency in the Balkans | AL BALQAN",
      metaDescription:
        "Compare investor residency options across five Balkan countries. AL BALQAN explains the requirements and follows your application.",
      h1: "Residency Linked to Your Investment",
      intro:
        "Investment-based residency can give you and your family a legal base in the Balkans. We explain the options clearly and help you choose with confidence.",
      whatWeDo: [
        "Compare investor programs across our five countries",
        "Explain the requirements in simple terms",
        "Coordinate the legal and administrative steps",
        "Follow your application until a decision is issued",
      ],
      cta: "Request an Investor Consultation",
      image: asset("/assets/dest-serbia.jpg"),
    },
    {
      slug: "company-formation",
      label: "Company Formation",
      seoTitle: "Company Formation in the Balkans | AL BALQAN",
      metaDescription:
        "Set up your company in the Balkans with expert guidance, from choosing the structure to completing registration.",
      h1: "Launch Your Business in the Balkans",
      intro:
        "From choosing the right structure to completing registration, we guide you through setting up a company in the country that best fits your plans.",
      whatWeDo: [
        "Advise on company type and country selection",
        "Prepare registration documents",
        "Coordinate with local authorities and partners",
        "Connect company ownership with residency options",
      ],
      cta: "Plan Your Company",
      image: asset("/assets/dest-macedonia.jpg"),
    },
    {
      slug: "family-residency",
      label: "Family Residency",
      seoTitle: "Family Residency Support | AL BALQAN",
      metaDescription:
        "Bring your spouse, children, and dependents with you. AL BALQAN supports family residency applications in the Balkans.",
      h1: "Keep Your Family Together",
      intro:
        "We help spouses, children, and eligible dependents join you through family residency routes.",
      whatWeDo: [
        "Confirm who qualifies as a dependent",
        "Prepare family documents and guide you on translations",
        "Submit and track each application",
        "Support your family after arrival",
      ],
      cta: "Ask About Family Residency",
      image: asset("/assets/dest-montenegro.jpg"),
    },
  ],
  ar: [
    {
      slug: "tourist-visa",
      label: "تأشيرة سياحية",
      seoTitle: "مساعدة التأشيرات السياحية لبلقان | AL BALQAN",
      metaDescription:
        "دعم بسيط وموجّه للتأشيرة السياحية إلى البلقان. يراجع AL BALQAN مستنداتك ويظلّك على اطلاع حتى القرار.",
      h1: "سافر إلى البلقان بكل سهولة",
      intro:
        "تخطط لزيارة للسياحة أو العائلة أو رحلة عمل قصيرة؟ نبسّط إجراءات التأشيرة لتركّز أنت على رحلتك.",
      whatWeDo: [
        "نحدد نوع التأشيرة الذي تحتاجه",
        "نراجع مستنداتك قبل التقديم",
        "نرشدك للمستندات الداعمة كحجوزات وبرامج السفر",
        "نحدّثك حتى تصلك الموافقة",
      ],
      cta: "ابدأ استفسارك عن التأشيرة",
      image: asset("/assets/slide-kosovo.jpg"),
    },
    {
      slug: "work-contracts-residency",
      label: "عقود العمل والإقامة",
      seoTitle: "عقود العمل وتصاريح الإقامة | AL BALQAN",
      metaDescription:
        "تعامل مع عقود العمل والإقامة القائمة على التوظيف في البلقان بشكل صحيح. يدعم AL BALQAN أصحاب العمل والعاملين.",
      h1: "اعمل في الخارج بالمستندات الصحيحة",
      intro:
        "إذا كان لديك فرصة عمل في البلقان، نساعدك في تأمين متطلبات العقد والإقامة بشكل صحيح.",
      whatWeDo: [
        "نراجع متطلبات عقد العمل",
        "نرشد أصحاب العمل والعاملين خلال إجراءات التصاريح",
        "نجهّز طلب الإقامة المرتبط بالتوظيف",
        "ندعم التجديدات والتغييرات",
      ],
      cta: "تحدث إلى مستشار",
      image: asset("/assets/dest-kosovo.jpg"),
    },
    {
      slug: "investor-residency",
      label: "إقامة المستثمر",
      seoTitle: "إقامة المستثمر في البلقان | AL BALQAN",
      metaDescription:
        "قارن خيارات إقامة المستثمرين عبر خمس دول بلقانية. يشرح AL BALQAN المتطلبات ويتتبع طلبك.",
      h1: "إقامة مرتبطة باستثمارك",
      intro:
        "الإقامة القائمة على الاستثمار تمنحك ولعائلتك قاعدة قانونية في البلقان. نشرح الخيارات بوضوح ونساعدك على الاختيار بثقة.",
      whatWeDo: [
        "نقارن برامج المستثمرين في دولنا الخمس",
        "نشرح المتطلبات بأسلوب مبسّط",
        "ننسّق الخطوات القانونية والإدارية",
        "نتتبع طلبك حتى صدور القرار",
      ],
      cta: "اطلب استشارة مستثمر",
      image: asset("/assets/dest-serbia.jpg"),
    },
    {
      slug: "company-formation",
      label: "تأسيس الشركات",
      seoTitle: "تأسيس الشركات في البلقان | AL BALQAN",
      metaDescription:
        "أسّس شركتك في البلقان بإرشاد متخصص، من اختيار الهيكل حتى استكمال التسجيل.",
      h1: "أطلق عملك في البلقان",
      intro:
        "من اختيار الهيكل المناسب حتى استكمال التسجيل، نرشدك لتأسيس شركة في الدولة الأنسب لخططك.",
      whatWeDo: [
        "نرشدك لنوع الشركة واختيار الدولة",
        "نجهّز مستندات التسجيل",
        "ننسّق مع السلطات والشركاء المحليين",
        "نربط ملكية الشركة بخيارات الإقامة",
      ],
      cta: "خطط لشركتك",
      image: asset("/assets/dest-macedonia.jpg"),
    },
    {
      slug: "family-residency",
      label: "إقامة العائلة",
      seoTitle: "دعم إقامة العائلة | AL BALQAN",
      metaDescription:
        "أحضر زوجك وأطفالك ومعيّليك معك. يدعم AL BALQAN طلبات إقامة العائلة في البلقان.",
      h1: "حافظ على عائلتك معًا",
      intro:
        "نساعد الأزواج والأطفال والمعيّلين المؤهلين على الانضمام إليك عبر مسارات إقامة العائلة.",
      whatWeDo: [
        "نؤكد من يتأهل كمعيّل",
        "نجهّز مستندات العائلة ونرشدك للترجمات",
        "نقدّم ونتتبع كل طلب",
        "ندعم عائلتك بعد الوصول",
      ],
      cta: "اسأل عن إقامة العائلة",
      image: asset("/assets/dest-montenegro.jpg"),
    },
  ],
};

export const serviceDetailSlugs = serviceDetailPages.en.map((p) => p.slug);
