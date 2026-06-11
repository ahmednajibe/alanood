/**
 * Centralized Arabic-first content for the Princess Alanood Foundation
 * landing page. Kept in one place so copy can be reviewed and localized
 * without touching layout/JSX.
 */

export const nav = {
  brandLine1: "مؤسسة الأميرة العنود",
  brandLine2: "الخيرية",
  brandEn: "Princess Alanood Foundation",
  links: [
    { label: "الرئيسية", labelEn: "Home", href: "#home" },
    { label: "من نحن", labelEn: "About Us", href: "#about" },
    { label: "المراكز", labelEn: "Centers", href: "#centers" },
    { label: "المركز الإعلامي", labelEn: "Media Center", href: "#media" },
    { label: "اتصل بنا", labelEn: "Contact Us", href: "#contact" },
  ],
  sso: "الدخول الموحد للحساب",
  ssoEn: "SSO Account Access",
};

export const hero = {
  eyebrow: "رؤية إنسانية · أثر مستدام",
  title: "تمكين الإنسان.. استدامة الأثر",
  subtitle:
    "نُكرّس إرث الأميرة العنود في خدمة المجتمع، عبر منظومة متكاملة من البرامج الخيرية والتنموية والاستثمارية التي ترافق الإنسان في كل مراحل حياته وتصنع أثرًا يمتد للأجيال.",
  primaryCta: "استكشف البرامج",
  primaryCtaEn: "Explore Programs",
  secondaryCta: "التقرير السنوي",
  secondaryCtaEn: "Annual Report",
  imageCaption: "تنمية المجتمع وصون الموروث الثقافي السعودي",
  stats: [
    { value: "+40", label: "عامًا من العطاء" },
    { value: "+1.2M", label: "مستفيد ومستفيدة" },
    { value: "13", label: "منطقة في المملكة" },
  ],
};

export type Sector = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  cta: string;
};

export const sectorCharity: Sector = {
  id: "charity",
  badge: "القطاع الخيري",
  title: "قطاع العنود الخيرية",
  subtitle: "تمكين مستدام لا عطاء مؤقت",
  description:
    "نُصمّم برامج نوعية تنتقل بالمستفيد من الحاجة إلى الاكتفاء، وترتكز على بناء القدرات وتنمية الأسر وصناعة فرص حقيقية للأجيال القادمة.",
  bullets: [
    "برامج تمكين الأسر المنتجة",
    "الرعاية الصحية والاجتماعية",
    "المنح التعليمية وبناء القدرات",
    "الإغاثة والاستجابة الإنسانية",
  ],
  cta: "ادخل إلى القطاع",
};

export const sectorInvestment: Sector = {
  id: "investment",
  badge: "القطاع الاستثماري",
  title: "قطاع العنود للاستثمار",
  subtitle: "استثمار يصنع الاستدامة المالية",
  description:
    "ذراع استثماري احترافي يُنمّي أوقاف المؤسسة وأصولها وفق حوكمة رشيدة، ليضمن تدفقًا ماليًا مستدامًا يغذّي العطاء الخيري على المدى الطويل.",
  bullets: [
    "العقارات والتطوير العمراني",
    "الأسواق المالية والصكوك",
    "الشراكات والمشاريع النوعية",
    "إدارة الأوقاف الاستثمارية",
  ],
  cta: "زيارة الشركة الاستثمارية",
};

export const investmentMetrics = [
  { value: "8.4%", label: "متوسط العائد السنوي" },
  { value: "+24", label: "محفظة استثمارية" },
  { value: "AA", label: "تصنيف الحوكمة" },
];

export type Center = {
  title: string;
  titleEn: string;
  description: string;
  tag: string;
  icon: "youth" | "family" | "training" | "jobs";
};

export const centers: Center[] = [
  {
    title: "مركز وارف لتنمية الشباب",
    titleEn: "Warif Youth Center",
    description:
      "منصّة لصناعة قادة المستقبل عبر برامج الريادة والابتكار والتطوع وبناء المهارات.",
    tag: "تنمية الشباب",
    icon: "youth",
  },
  {
    title: "مركز شذن للتمكين الأسري",
    titleEn: "Shadhan Family Center",
    description:
      "تمكين الأسرة وحمايتها من خلال الإرشاد والتأهيل وبرامج الاستقرار والاستدامة المعيشية.",
    tag: "التمكين الأسري",
    icon: "family",
  },
  {
    title: "مركز العنود الدولي للتدريب",
    titleEn: "International Training Center",
    description:
      "منصّة تعلّم إلكترونية معتمدة (LMS) تقدّم مسارات تدريب احترافية وشهادات دولية.",
    tag: "منصة التعلّم · LMS",
    icon: "training",
  },
  {
    title: "بوابة التوظيف الرقمية",
    titleEn: "Digital Job Portal",
    description:
      "بوابة ذكية تربط الكفاءات الوطنية بفرص العمل وتدعم رحلة التوظيف من التقديم حتى التمكين.",
    tag: "التوظيف الرقمي",
    icon: "jobs",
  },
];

export type NewsItem = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

export const news: NewsItem[] = [
  {
    category: "أخبار المؤسسة",
    date: "12 يونيو 2026",
    title: "إطلاق المرحلة الثانية من برنامج تمكين الأسر المنتجة في خمس مناطق",
    excerpt:
      "يستهدف البرنامج تأهيل أكثر من ثلاثة آلاف أسرة وربطها بسلاسل الإمداد المحلية ضمن مستهدفات رؤية المملكة 2030.",
  },
  {
    category: "شراكات",
    date: "03 يونيو 2026",
    title: "توقيع مذكرة تفاهم لتطوير منصة العنود الدولية للتدريب الرقمي",
    excerpt:
      "تتيح الشراكة مسارات تعلّم معتمدة دوليًا لأكثر من خمسين ألف متدرب عبر منصة التعلّم الإلكتروني.",
  },
  {
    category: "أبحاث ومنشورات",
    date: "21 مايو 2026",
    title: "إصدار التقرير البحثي حول قياس الأثر الاجتماعي للبرامج التنموية",
    excerpt:
      "يقدّم التقرير منهجية متكاملة لقياس الأثر طويل المدى ومؤشرات الاستدامة للمبادرات الخيرية.",
  },
];

export const footer = {
  about:
    "مؤسسة الأميرة العنود الخيرية — منظومة وطنية رائدة تجمع العمل الخيري والتنموي والاستثماري لخدمة الإنسان وصناعة أثر مستدام في المملكة العربية السعودية.",
  columns: [
    {
      title: "المؤسسة",
      links: ["من نحن", "مجلس الإدارة", "الرؤية والرسالة", "الفرص الوظيفية"],
    },
    {
      title: "الحوكمة والامتثال",
      links: [
        "اللوائح والسياسات",
        "التقارير السنوية",
        "الإفصاح والشفافية",
        "سياسة الخصوصية",
      ],
    },
    {
      title: "القطاعات والمراكز",
      links: [
        "قطاع العنود الخيرية",
        "قطاع العنود للاستثمار",
        "مركز وارف لتنمية الشباب",
        "بوابة التوظيف الرقمية",
      ],
    },
  ],
  contact: {
    title: "تواصل معنا",
    address: "الرياض، المملكة العربية السعودية",
    pmo: "مرجع مكتب إدارة المشاريع (PMO): PMO-ALN-2026",
    phone: "+966 11 000 0000",
    email: "info@alanood.org.sa",
  },
  rights: "جميع الحقوق محفوظة لمؤسسة الأميرة العنود الخيرية",
};
