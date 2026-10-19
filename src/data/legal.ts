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
      "تعرّف على كيفية جمع AL BALQAN للمعلومات التي ترسلها إلينا عبر موقعنا الإلكتروني، وكيفية استخدامها وحمايتها.",
    h1: "سياسة الخصوصية",
    sections: [
      {
        lead: "1. من نحن.",
        body: 'شركة AL BALQAN للسياحة والتأشيرات ("AL BALQAN"، "نحن"، "إيانا") هي شركة مقرّها دولة الإمارات العربية المتحدة.',
      },
      {
        lead: "2. المعلومات التي نجمعها.",
        body: "لا نجمع إلا ما تختار إرساله إلينا عبر نماذج التواصل والاستفسار: اسمك، وعنوان بريدك الإلكتروني، ورقم هاتفك، وجنسيتك، والدولة التي تهمّك، والرسالة التي تكتبها. كما قد نجمع بيانات تقنية أساسية مثل نوع المتصفح والصفحات التي تتصفحها، وذلك لتحسين الموقع.",
      },
      {
        lead: "3. كيف نستخدمها.",
        body: "نستخدم معلوماتك للردّ على استفسارك، وتقديم الخدمات التي تطلبها، وتحسين موقعنا الإلكتروني. كما أننا لا نبيع بياناتك الشخصية.",
      },
      {
        lead: "4. المشاركة.",
        body: "لا نشارك المعلومات إلا مع مزودي خدمات موثوقين يساعدوننا في إدارتنا لأعمالنا، أو عندما يقتضي ذلك القانون.",
      },
      {
        lead: "5. الاحتفاظ.",
        body: "لا نحتفظ بمعلوماتك إلا للمدة اللازمة لهذه الأغراض، أو كما يقتضي ذلك القانون.",
      },
      {
        lead: "6. حقوقك.",
        body: "يمكنك في أي وقت طلب الاطلاع على معلوماتك أو تصحيحها أو حذفها، وذلك بالتواصل معنا.",
      },
      {
        lead: "7. الأمان.",
        body: "نتخذ خطوات معقولة لحماية معلوماتك، لكن لا يمكن ضمان أمان أي نظام إلكتروني بالكامل.",
      },
      {
        lead: "8. ملفات تعريف الارتباط.",
        body: "قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك التحكّم في هذه الملفات من خلال إعدادات متصفحك.",
      },
      {
        lead: "9. التعديلات.",
        body: "قد نُحدّث هذه السياسة من وقت لآخر، وسيظهر تاريخ آخر تحديث أعلاه.",
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
      "اطّلع على الشروط التي تنطبق عند استخدامك موقع AL BALQAN وخدمات الاستشارات.",
    h1: "شروط الخدمة",
    sections: [
      {
        lead: "1. القبول.",
        body: "باستخدامك لهذا الموقع، فإنك تُقرّ بالموافقة على هذه الشروط.",
      },
      {
        lead: "2. دورنا.",
        body: "يقدّم AL BALQAN خدمات استشارية ودعمًا إداريًا للتأشيرات والإقامة وتأسيس الشركات. نحن لسنا جهة حكومية، ولا نُصدر التأشيرات أو تصاريح الإقامة.",
      },
      {
        lead: "3. المعلومات على هذا الموقع.",
        body: "المحتوى الوارد في هذا الموقع للاستعلام العام فقط، ولا يُعدّ استشارة قانونية. وقد تتغير المتطلبات التي تحددها الجهات المختصة في كل دولة دون إشعار مسبق.",
      },
      {
        lead: "4. لا ضمانات.",
        body: "جميع القرارات تعود إلى الجهات المختصة. ولا نضمن الموافقة أو المواعيد أو النتائج.",
      },
      {
        lead: "5. مسؤولياتك.",
        body: "توافق على تقديم معلومات صحيحة وكاملة. وقد يؤدي تقديم معلومات غير دقيقة إلى تأخير أو رفض الطلب.",
      },
      {
        lead: "6. الرسوم.",
        body: "تُحدَّد رسوم الخدمة، إن وُجدت، كتابيًا قبل مباشرة العمل. أما الرسوم الحكومية فمستقلة وتُحدَّد من قبل الجهات المختصة.",
      },
      {
        lead: "7. الملكية الفكرية.",
        body: "جميع المحتويات والشعارات والتصميم الواردة في هذا الموقع مملوكة لشركة AL BALQAN، ولا يجوز نسخها دون إذن.",
      },
      {
        lead: "8. تحديد المسؤولية.",
        body: "في الحد المسموح به قانونًا، لا تتحمّل AL BALQAN مسؤولية أي خسائر ناتجة عن استخدام هذا الموقع، أو عن قرارات تتخذه الجهات المختصة.",
      },
      {
        lead: "9. القانون الحاكم.",
        body: "تخضع هذه الشروط لأنظمة وقوانين دولة الإمارات العربية المتحدة.",
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
      "معلومات هامة حول ترخيص AL BALQAN، وطبيعة خدماتنا، وحدود دورنا.",
    h1: "الإفصاحات التنظيمية",
    sections: [
      {
        lead: "الحالة القانونية للشركة.",
        body: `شركة AL BALQAN للسياحة والتأشيرات هي شركة مرخّصة في دولة الإمارات العربية المتحدة.${
          siteConfig.licenseDetails
            ? ` تفاصيل الترخيص: ${siteConfig.licenseDetails}.`
            : ""
        }`,
      },
      {
        lead: "طبيعة الخدمات.",
        body: "نقدّم خدمات استشارية ودعمًا في إعداد الطلبات. نحن لسنا مكتب محاماة، ولا يُعدّ أي من المحتويات الواردة في هذا الموقع استشارة قانونية أو ضريبية أو مالية. أما في المسائل القانونية، فيُرجى استشارة محامٍ مؤهّل.",
      },
      {
        lead: "لا انتماء حكومي.",
        body: "نحن لسنا جزءًا من أي حكومة أو سفارة، ولا نمثّل أيًا منهما. وتُصدر جميع التأشيرات والتصاريح من قبل الجهات المختصة في كل دولة على حدة.",
      },
      {
        lead: "لا ضمانات.",
        body: "لا يضمن الحصول على الموافقة أبدًا. وقد تتغير المتطلبات والرسوم ومدد المعالجة في أي وقت.",
      },
      {
        lead: "الأطراف الثالثة.",
        body: "عندما نعمل مع شركاء محليين أو مهنيين في دول أخرى، فإنهم يعملون بشكل مستقل، وهم المسؤولون عن خدماتهم.",
      },
      {
        lead: "الشكاوى.",
        body: `إذا لم تكن راضيًا عن خدمتنا، فيُرجى مراسلتنا على ${siteConfig.email}. سنطّلع على شكواك ونردّ عليك في أقرب وقت ممكن.`,
      },
    ],
  },
};

export const legalPages: Record<Lang, LegalPage[]> = {
  en: [privacyPolicy.en, termsOfService.en, regulatoryDisclosures.en],
  ar: [privacyPolicy.ar, termsOfService.ar, regulatoryDisclosures.ar],
};

export const legalSlugs = legalPages.en.map((p) => p.slug);
