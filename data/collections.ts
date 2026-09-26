export const collections = [
  {
    slug: "executive",
    title: {
      fa: "هدایای مدیریتی",
      en: "Executive Gifts",
      ar: "الهدايا الإدارية",
      zh: "高管礼品"
    },
    description: {
      fa: "محصولات منتخب برای هدیه‌های رسمی و مدیریتی.",
      en: "Selected objects for formal and executive gifting.",
      ar: "منتجات مختارة للهدايا الرسمية والإدارية.",
      zh: "精选正式与商务礼赠作品。"
    }
  },
  {
    slug: "awards",
    title: {
      fa: "تقدیر و تندیس",
      en: "Awards & Trophies",
      ar: "التكريم والدروع",
      zh: "奖杯与表彰"
    },
    description: {
      fa: "تندیس و یادبود برای رویدادها و برنامه‌های تقدیر.",
      en: "Recognition objects for events and award programs.",
      ar: "قطع للتكريم والفعاليات وبرامج الجوائز.",
      zh: "面向活动与表彰计划的纪念器物。"
    }
  }
] as const satisfies ReadonlyArray<{
  slug: string;
  title: Record<import("@/i18n/routing").AppLocale, string>;
  description: Record<import("@/i18n/routing").AppLocale, string>;
}>;
