import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
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
    ar: "ميناكاري — المينا الفارسية المعاصرة",
    zh: "MINAKARI — 当代波斯珐琅艺术"
  };
  return {title: titles[locale as keyof typeof titles] ?? titles.en};
}

const rtlLocales: readonly string[] = ["fa", "ar"];

export default async function LocaleLayout({
  children,
  params
}: Readonly<{children: React.ReactNode; params: Promise<{locale:string}>}>) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as never)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={rtlLocales.includes(locale) ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
