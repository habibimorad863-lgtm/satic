"use client";

import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {routing} from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
  zh: "中文"
};

export function Header() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const links = [
    ["products", `/${locale}/products`],
    ["collections", `/${locale}/collections`],
    ["b2b", `/${locale}/b2b`],
    ["studio", `/${locale}/studio`],
    ["about", `/${locale}/about`],
    ["contact", `/${locale}/contact`]
  ] as const;

  return (
    <header className="site-header">
      <div className="shell nav">
        <Link href={`/${locale}`} className="brand">MINAKARI</Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([key, href]) => <Link key={key} href={href}>{t(key)}</Link>)}
        </nav>
        <div className="locales">
          {routing.locales.map((item) => (
            <Link key={item} href={`/${item}`} aria-label={`Switch to ${localeLabels[item] ?? item}`}>
              <span className={item === locale ? "locale-active" : ""}>{localeLabels[item] ?? item.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
