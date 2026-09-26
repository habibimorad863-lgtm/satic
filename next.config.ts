import type {NextConfig} from "next";

/**
 * NOTE: `next-intl/plugin` is intentionally NOT used here.
 * The plugin injects middleware/proxy support that requires reading request
 * headers at render time, which is incompatible with `output: "export"`.
 * Locale resolution is fully static instead: every page calls
 * `unstable_setRequestLocale(locale)` and `generateStaticParams()` emits all
 * locale variants at build time. See i18n/routing.ts + messages/*.json.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
