import {getTranslations, unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <div className="shell">
      <header className="page-header">
        <span className="eyebrow">MINAKARI</span>
        <h1>{t("sections.craft")}</h1>
        <p>{t("sections.craftText")}</p>
      </header>
    </div>
  );
}
