import {getTranslations} from "next-intl/server";
import {site} from "@/data/site";

export default async function ContactPage() {
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
