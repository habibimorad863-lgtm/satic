import Link from "next/link";
import {getTranslations, unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
import {collections} from "@/data/collections";
import type {Locale} from "@/data/products";

export default async function CollectionsPage({params}: {params: Promise<{locale:string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations();

  return (
    <div className="shell">
      <header className="page-header">
        <span className="eyebrow">COLLECTIONS</span>
        <h1>{t("nav.collections")}</h1>
      </header>
      <div className="b2b-grid">
        {collections.map((item) => (
          <Link href={`/${l}/collections/${item.slug}`} className="b2b-card" key={item.slug}>
            <span className="eyebrow">{item.slug.toUpperCase()}</span>
            <h3>{item.title[l]}</h3>
            <p>{item.description[l]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
