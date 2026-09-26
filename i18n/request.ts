import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";

/**
 * Static-export friendly configuration: the active locale is provided by each
 * page via `unstable_setRequestLocale()`, so this config never reads request
 * headers (which would force dynamic rendering and break `output: "export"`).
 */
export default getRequestConfig(async ({locale}) => {
  const active = typeof locale === "string" && routing.locales.includes(locale as never)
    ? locale
    : routing.defaultLocale;

  return {
    locale: active,
    messages: (await import(`../messages/${active}.json`)).default
  };
});
