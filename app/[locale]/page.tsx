import Image from "next/image";
import Link from "next/link";
import {getTranslations} from "next-intl/server";
import type {Locale} from "@/data/products";
import {products} from "@/data/products";
import {ProductCard} from "@/components/product-card";

export default async function Home({params}: {params: Promise<{locale:string}>}) {
  const {locale} = await params;
  const l = locale as Locale;
  const t = await getTranslations();

  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <span className="eyebrow">{t("hero.eyebrow")}</span>
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.description")}</p>
          <div className="button-row">
            <Link className="button button-dark" href={`/${l}/b2b`}>{t("hero.cta")}</Link>
            <Link className="button" href={`/${l}/products`}>{t("hero.secondary")}</Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract enamel artwork" />
      </section>

      <section className="shell section">
        <div className="section-head">
          <h2>{t("sections.featured")}</h2>
          <Link className="text-link" href={`/${l}/products`}>{t("common.view")}</Link>
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.slug} product={product} locale={l} />)}
        </div>
      </section>

      <section className="shell section">
        <div className="section-head">
          <h2>{t("sections.b2bTitle")}</h2>
          <p>{t("sections.b2bText")}</p>
        </div>
        <div className="b2b-grid">
          {[
            ["01","Corporate gifting","gift"],
            ["02","Events & recognition","events"],
            ["03","Custom projects","custom"]
          ].map(([number,title,key]) => (
            <Link key={key} href={`/${l}/b2b`} className="b2b-card">
              <span className="eyebrow">{number}</span>
              <h3>{t(`b2b.${key}`)}</h3>
              <p>{t(`b2b.${key}Text`)}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
