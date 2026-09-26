import {getTranslations, unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
import type {Locale} from "@/data/products";
import {products} from "@/data/products";
import {ProductCard} from "@/components/product-card";

export default async function ProductsPage({params}: {params: Promise<{locale:string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations();

  return (
    <div className="shell">
      <header className="page-header">
        <span className="eyebrow">COLLECTION</span>
        <h1>{t("nav.products")}</h1>
        <p>{t("hero.description")}</p>
      </header>
      <div className="product-grid">
        {products.map((product) => <ProductCard key={product.slug} product={product} locale={l} />)}
      </div>
    </div>
  );
}
