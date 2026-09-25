import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getTranslations} from "next-intl/server";
import type {Locale} from "@/data/products";
import {products, getProduct} from "@/data/products";

export function generateStaticParams() {
  return ["fa","en","ar"].flatMap((locale) =>
    products.map((product) => ({locale, slug: product.slug}))
  );
}

export default async function ProductPage({params}: {params: Promise<{locale:string;slug:string}>}) {
  const {locale, slug} = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const l = locale as Locale;
  const content = product.translations[l];
  const t = await getTranslations();

  return (
    <div className="shell">
      <div className="page-header">
        <Link href={`/${l}/products`} className="text-link">← {t("common.back")}</Link>
      </div>
      <section className="detail-grid">
        <div className="gallery-main">
          <Image src={product.image} alt={content.name} fill priority sizes="(max-width: 900px) 100vw, 55vw" style={{objectFit:"cover"}} />
        </div>
        <div className="detail-copy">
          <span className="eyebrow">{product.sku}</span>
          <h2>{content.name}</h2>
          <p>{content.description}</p>
          <div className="specs">
            <div className="spec"><small>{t("common.material")}</small>{content.material}</div>
            <div className="spec"><small>{t("common.dimensions")}</small>{content.dimensions}</div>
            <div className="spec"><small>{t("common.sku")}</small>{product.sku}</div>
            <div className="spec"><small>Category</small>{product.category}</div>
          </div>
          <div className="button-row">
            <Link className="button button-dark" href={`/${l}/contact`}>{t("common.contact")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
