import { siteConfig } from "@/config/site";
import type { Lang } from "@/lib/i18n";

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

export const privacyPolicy: Record<Lang, LegalPage> = {
  en: {
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
  },
  ar: {
    slug: "privacy-policy",
    label: "سياسة الخصوصية",
    seoTitle: "سياسة الخصوصية | AL BALQAN",
    metaDescription:
      "تعرّف على كيفية جمع AL BALQAN للمعلومات التي ترسلها عبر موقعنا واستخدامها وحمايتها.",
    h1: "سياسة الخصوصية",
    sections: [
      {
        lead: "1. من نحن.",
        body: 'شركة AL BALQAN للسياحة والتأشيرات ("AL BALQAN"، "نحن"، "لدينا") هي شركة مقرها الإمارات العربية المتحدة.',
      },
      {
        lead: "2. المعلومات التي نجمعها.",
        body: "نجمع فقط ما تختار إرساله إلينا عبر نماذج التواصل والاستفسار: اسمك، وعنوان بريدك الإلكتروني، ورقم هاتفك، وجنسيتك، ودولة اهتمامك، والرسالة التي تكتبها. كما قد نجمع بيانات تقنية أساسية مثل نوع المتصفح والصفحات التي تزورها، لتحسين الموقع.",
      },
      {
        lead: "3. كيف نستخدمها.",
        body: "نستخدم معلوماتك للرد على استفسارك، وتوفير الخدمات التي تطلبها، وتحسين موقعنا. لا نبيع بياناتك الشخصية.",
      },
      {
        lead: "4. المشاركة.",
        body: "نشارك المعلومات فقط مع مزودي خدمات موثوقين يساعدوننا في عملنا، أو عندما يقتضي القانون ذلك.",
      },
      {
        lead: "5. الاحتفاظ.",
        body: "نحتفظ بعلوماتك فقط للمدة اللازمة لهذه الأغراض أو كما يقتضي القانون.",
      },
      {
        lead: "6. حقوقك.",
        body: "يمكنك طلب الاطلاع على معلوماتك أو تصحيحها أو حذفها في أي وقت بالتواصل معنا.",
      },
      {
        lead: "7. الأمان.",
        body: "نتخذ خطوات معقولة لحماية معلوماتك، لكن أي نظام عبر الإنترنت ليس آمنًا تمامًا.",
      },
      {
        lead: "8. ملفات تعريف الارتباط.",
        body: "قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك التحكم فيها عبر إعدادات متصفحك.",
      },
      {
        lead: "9. التعديلات.",
        body: "قد نحدّث هذه السياسة وسننشر التاريخ الجديد أعلاه.",
      },
      {
        lead: "10. للتواصل.",
        body: siteConfig.email,
      },
    ],
  },
};

export const termsOfService: Record<Lang, LegalPage> = {
  en: {
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
  },
  ar: {
    slug: "terms-of-service",
    label: "شروط الخدمة",
    seoTitle: "شروط الخدمة | AL BALQAN",
    metaDescription:
      "اقرأ الشروط التي تنطبق عند استخدامك لموقع AL BALQAN وخدمات الاستشارات.",
    h1: "شروط الخدمة",
    sections: [
      {
        lead: "1. القبول.",
        body: "باستخدامك لهذا الموقع، فإنك توافق على هذه الشروط.",
      },
      {
        lead: "2. دورنا.",
        body: "يوفر AL BALQAN استشارات وإدارة داعمة للتأشيرات والإقامة وتأسيس الشركات. لسنا جهة حكومية ولا نصدر تأشيرات أو تصاريح إقامة.",
      },
      {
        lead: "3. المعلومات على هذا الموقع.",
        body: "المحتوى للاستعلام العام فقط وقد يتغير. ليس استشارة قانونية. المتطلبات تضعها سلطات كل بلد وقد تتغير دون إشعار.",
      },
      {
        lead: "4. لا ضمانات.",
        body: "كل القرارات تعود للسلطات المختصة. لا نضمن الموافقة أو الجداول أو النتائج.",
      },
      {
        lead: "5. مسؤولياتك.",
        body: "توافق على تقديم معلومات دقيقة وكاملة. المعلومات الخاطئة قد تسبب تأخيرًا أو رفضًا.",
      },
      {
        lead: "6. الرسوم.",
        body: "رسوم الخدمة، عند تطبيقها، تتفق عليها كتابيًا قبل بدء العمل. الرسوم الحكومية منفصلة وتضعها السلطات.",
      },
      {
        lead: "7. الملكية الفكرية.",
        body: "كل المحتوى والشعارات والتصميم على هذا الموقع ملك لـ AL BALQAN ولا يجوز نسخها دون إذن.",
      },
      {
        lead: "8. تحديد المسؤولية.",
        body: "في الحد الذي يسمح به القانون، لا يتحمل AL BALQAN أي خسائر ناتجة عن استخدام هذا الموقع أو عن قرارات صادرة عن السلطات.",
      },
      {
        lead: "9. القانون الحاكم.",
        body: "تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة.",
      },
      {
        lead: "10. للتواصل.",
        body: siteConfig.email,
      },
    ],
  },
};

export const regulatoryDisclosures: Record<Lang, LegalPage> = {
  en: {
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
  },
  ar: {
    slug: "regulatory-disclosures",
    label: "الإفصاحات التنظيمية",
    seoTitle: "الإفصاحات التنظيمية | AL BALQAN",
    metaDescription:
      "معلومات مهمة حول ترخيص AL BALQAN وطبيعة خدماتنا وحدود دورنا.",
    h1: "الإفصاحات التنظيمية",
    sections: [
      {
        lead: "حالة الشركة.",
        body: `AL BALQAN للسياحة والتأشيرات شركة مرخّصة في دولة الإمارات العربية المتحدة.${
          siteConfig.licenseDetails
            ? ` تفاصيل الترخيص: ${siteConfig.licenseDetails}.`
            : ""
        }`,
      },
      {
        lead: "طبيعة الخدمات.",
        body: "نقدم استشارات ودعمًا للطلبات. لسنا مكتب محاماة، ولا شيء على هذا الموقع يمثل استشارة قانونية أو ضريبية أو مالية. للمسائل القانونية، يرجى استشارة محامٍ مؤهل.",
      },
      {
        lead: "لا انتماء حكومي.",
        body: "لسنا جزءًا من أي حكومة أو سفارة ولا نمثّلها. جميع التأشيرات والتصاريح تصدرها السلطات المختصة في كل بلد حصريًا.",
      },
      {
        lead: "لا ضمانات.",
        body: "لا تُضمن الموافقة أبدًا. قد تتغير المتطلبات والرسوم وأوقات المعالجة في أي وقت.",
      },
      {
        lead: "أطراف ثالثة.",
        body: "عند عملنا مع شركاء محليين أو مهنيين في دول أخرى، فإنهم يعملون باستقلالية ومسؤولية عن خدماتهم.",
      },
      {
        lead: "الشكاوى.",
        body: `إذا كنت غير راضٍ عن خدمتنا، يرجى الكتابة إلى ${siteConfig.email}. سنراجع شكواك ونرد عليك في أسرع وقت.`,
      },
    ],
  },
};

export const legalPages: Record<Lang, LegalPage[]> = {
  en: [privacyPolicy.en, termsOfService.en, regulatoryDisclosures.en],
  ar: [privacyPolicy.ar, termsOfService.ar, regulatoryDisclosures.ar],
};

export const legalSlugs = legalPages.en.map((p) => p.slug);
