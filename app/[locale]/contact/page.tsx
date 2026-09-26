import {getTranslations, unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {site} from "@/data/site";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <div className="shell">
      <header className="page-header">
        <span className="eyebrow">CONTACT</span>
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.text")}</p>
      </header>
      <section className="b2b-card">
        <p><strong>{t("contact.email")}:</strong> {site.email}</p>
        <p><strong>{t("contact.phone")}:</strong> {site.phone}</p>
      </section>
    </div>
  );
}
