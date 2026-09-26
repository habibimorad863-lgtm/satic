import {getTranslations, unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function B2BPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const cards = [
    ["01", "gift", "giftText"],
    ["02", "events", "eventsText"],
    ["03", "custom", "customText"]
  ] as const;

  return (
    <div className="shell">
      <header className="page-header">
        <span className="eyebrow">B2B</span>
        <h1>{t("b2b.title")}</h1>
        <p>{t("b2b.intro")}</p>
      </header>
      <div className="b2b-grid">
        {cards.map(([number,title,text]) => (
          <article className="b2b-card" key={title}>
            <span className="eyebrow">{number}</span>
            <h3>{t(`b2b.${title}`)}</h3>
            <p>{t(`b2b.${text}`)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
