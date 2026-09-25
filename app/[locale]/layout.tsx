import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale:string}>}): Promise<Metadata> {
  const {locale} = await params;
  const titles = {
    fa: "میناکاری — هنر ایرانی برای هویت سازمانی",
    en: "MINAKARI — Contemporary Persian Enamel",
    ar: "ميناكاري — المينا الفارسية المعاصرة"
  };
  return {title: titles[locale as keyof typeof titles] ?? titles.en};
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{children: React.ReactNode; params: Promise<{locale:string}>}>) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as never)) notFound();

  const messages = await getMessages();

  return (
    <div lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
