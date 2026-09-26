import type {AppLocale} from "@/i18n/routing";

export type Locale = AppLocale;

export type Product = {
  slug: string;
  sku: string;
  category: string;
  image: string;
  gallery: string[];
  translations: Record<Locale, {
    name: string;
    short: string;
    description: string;
    material: string;
    dimensions: string;
  }>;
};

export const products: Product[] = [
  {
    slug: "executive-enamel-set",
    sku: "MINA-ADM-001",
    category: "executive",
    image: "/images/products/executive-set.svg",
    gallery: [
      "/images/products/executive-set.svg",
      "/images/products/executive-detail.svg"
    ],
    translations: {
      fa: {
        name: "ست مدیریتی میناکاری",
        short: "ست سازمانی برای هدیه‌های مدیریتی و مناسبت‌های رسمی.",
        description: "ترکیبی از فرم معاصر و هنر میناکاری، مناسب برنامه‌های هدیه سازمانی و روابط عمومی.",
        material: "فلز و لعاب مینا",
        dimensions: "قابل تنظیم بر اساس پروژه"
      },
      en: {
        name: "Executive Enamel Set",
        short: "A refined corporate set for executive gifting and formal occasions.",
        description: "A contemporary interpretation of Persian enamel craft for corporate gifting and recognition programs.",
        material: "Metal and enamel",
        dimensions: "Project-dependent"
      },
      ar: {
        name: "طقم إداري بالمينا",
        short: "طقم مؤسسي للهدايا الإدارية والمناسبات الرسمية.",
        description: "مزيج من الشكل المعاصر وفن المينا للهدايا المؤسسية وبرامج التكريم.",
        material: "معدن ومينا",
        dimensions: "حسب المشروع"
      },
      zh: {
        name: "珐琅高管礼品套装",
        short: "适用于高管礼赠与正式场合的精致企业套装。",
        description: "以当代设计语言诠释波斯珐琅工艺，适合企业礼赠表彰项目。",
        material: "金属与珐琅",
        dimensions: "可按项目定制"
      }
    }
  },
  {
    slug: "corporate-trophy",
    sku: "MINA-TRO-002",
    category: "awards",
    image: "/images/products/corporate-trophy.svg",
    gallery: [
      "/images/products/corporate-trophy.svg",
      "/images/products/trophy-detail.svg"
    ],
    translations: {
      fa: {
        name: "تندیس سازمانی مینا و بتن",
        short: "تندیس معاصر برای رویدادها، تقدیر و یادبود سازمانی.",
        description: "فرمی معماری‌گونه با ترکیب بتن و مینا، طراحی‌شده برای مراسم تقدیر و رویدادهای سازمانی.",
        material: "بتن و لعاب مینا",
        dimensions: "قابل سفارشی‌سازی"
      },
      en: {
        name: "Enamel & Concrete Corporate Trophy",
        short: "A contemporary award object for events and recognition.",
        description: "An architectural object combining concrete and enamel for corporate ceremonies and recognition.",
        material: "Concrete and enamel",
        dimensions: "Customizable"
      },
      ar: {
        name: "درع مؤسسي من المينا والخرسانة",
        short: "قطعة معاصرة للفعاليات والتكريم المؤسسي.",
        description: "قطعة معمارية تجمع بين الخرسانة والمينا للمناسبات وبرامج التكريم.",
        material: "خرسانة ومينا",
        dimensions: "قابلة للتخصيص"
      },
      zh: {
        name: "珐琅混凝土企业奖杯",
        short: "面向活动与表彰的现代奖项器物。",
        description: "融合混凝土与珐琅的建筑感造型，适用于企业典礼与表彰活动。",
        material: "混凝土与珐琅",
        dimensions: "支持定制"
      }
    }
  },
  {
    slug: "desk-object",
    sku: "MINA-DES-003",
    category: "executive",
    image: "/images/products/desk-object.svg",
    gallery: ["/images/products/desk-object.svg"],
    translations: {
      fa: {
        name: "آبجکت رومیزی میناکاری",
        short: "عنصر دکوراتیو برای میز مدیریت و فضاهای سازمانی.",
        description: "آبجکت مینیمال با سطح میناکاری‌شده برای محیط‌های اداری و هدایای سازمانی.",
        material: "سرامیک و لعاب مینا",
        dimensions: "قابل سفارشی‌سازی"
      },
      en: {
        name: "Enamel Desk Object",
        short: "A refined object for executive desks and corporate spaces.",
        description: "A minimalist enamel-finished object designed for offices and corporate gifting.",
        material: "Ceramic and enamel",
        dimensions: "Customizable"
      },
      ar: {
        name: "قطعة مكتبية بالمينا",
        short: "عنصر ديكوري للمكاتب التنفيذية والمساحات المؤسسية.",
        description: "قطعة بسيطة بسطح مينا للمكاتب والهدايا المؤسسية.",
        material: "سيراميك ومينا",
        dimensions: "قابلة للتخصيص"
      },
      zh: {
        name: "珐琅桌面摆件",
        short: "适合高管办公桌与企业空间的雅致摆件。",
        description: "极简造型搭配珐琅表面，适用于办公环境与商务礼赠。",
        material: "陶瓷与珐琅",
        dimensions: "支持定制"
      }
    }
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
