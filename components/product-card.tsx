import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import type {Locale} from "@/data/products";

export function ProductCard({
  product,
  locale
}: {
  product: {
    slug: string;
    sku: string;
    image: string;
    translations: Record<Locale, {name:string; short:string}>;
  };
  locale: Locale;
}) {
  const content = product.translations[locale];
  const t = useTranslations("common");

  return (
    <article className="product-card">
      <Link href={`/${locale}/products/${product.slug}`} className="product-image-wrap">
        <Image
          src={product.image}
          alt={content.name}
          fill
          sizes="(max-width: 800px) 100vw, 33vw"
          className="product-image"
        />
      </Link>
      <div className="product-card-body">
        <span className="eyebrow">{product.sku}</span>
        <h3>{content.name}</h3>
        <p>{content.short}</p>
        <Link href={`/${locale}/products/${product.slug}`} className="text-link">
          {t("detailsLink")}
        </Link>
      </div>
    </article>
  );
}
