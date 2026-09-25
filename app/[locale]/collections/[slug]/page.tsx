import Link from "next/link";
import {notFound} from "next/navigation";
import {collections} from "@/data/collections";
import {getProductsByCategory} from "@/data/products";
import type {Locale} from "@/data/products";
import {ProductCard} from "@/components/product-card";

export function generateStaticParams() {
  return ["fa","en","ar"].flatMap((locale) =>
    collections.map((collection) => ({locale, slug: collection.slug}))
  );
}

export default async function CollectionPage({params}: {params: Promise<{locale:string;slug:string}>}) {
  const {locale, slug} = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) notFound();

  const l = locale as Locale;
  const collectionProducts = getProductsByCategory(slug);

  return (
    <div className="shell">
      <header className="page-header">
        <Link href={`/${l}/collections`} className="text-link">← Back</Link>
        <h1>{collection.title[l]}</h1>
        <p>{collection.description[l]}</p>
      </header>
      <div className="product-grid">
        {collectionProducts.map((product) => <ProductCard key={product.slug} product={product} locale={l} />)}
      </div>
    </div>
  );
}
