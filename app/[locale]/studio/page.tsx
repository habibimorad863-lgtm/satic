import {unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {Studio} from "@/components/studio";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function StudioPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <div className="shell">
      <header className="page-header">
        <span className="eyebrow">3D</span>
        <h1>Studio</h1>
        <p>Interactive material preview. Replace the demo object with your product GLB when ready.</p>
      </header>
      <Studio />
    </div>
  );
}
