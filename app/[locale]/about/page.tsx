import {getTranslations} from "next-intl/server";

export default async function AboutPage() {
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
