# Minakari Static B2B Showcase

A deliberately simple, code-first, production-oriented static website foundation.

## Architecture

- Next.js App Router
- TypeScript
- next-intl for FA/EN/AR
- Plain CSS (no Tailwind, no UI framework)
- React Three Fiber for the optional 3D studio
- No database
- No admin panel
- No server API
- Static export

Next.js is configured with:

```ts
output: "export"
```

The production build is emitted into `out/`.

## Requirements

Node.js 20.9+.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open:

- http://localhost:3000/fa
- http://localhost:3000/en
- http://localhost:3000/ar

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

A successful build creates `out/`.

## Local static preview

After `npm run build`, serve `out/` with any static HTTP server. For example:

```bash
npx serve out
```

## Where to edit the website

Product data:

`data/products.ts`

Collections:

`data/collections.ts`

Company/contact data:

`data/site.ts`

Translations:

`messages/fa.json`
`messages/en.json`
`messages/ar.json`

Global visual system:

`app/globals.css`

Main homepage:

`app/[locale]/page.tsx`

Product page:

`app/[locale]/products/[slug]/page.tsx`

B2B page:

`app/[locale]/b2b/page.tsx`

3D studio:

`components/studio.tsx`

## Images

Replace the SVG demo images under:

`public/images/products/`

with your real WebP/AVIF/JPEG/PNG product photography.

Because this is a static export, `next/image` is configured with `unoptimized: true`. The files are still processed by the browser/CDN as normal static assets. If you later move to a Next.js server deployment, remove `unoptimized` and use the built-in image optimization pipeline.

## 3D

Put real optimized GLB files under:

`public/models/`

Then replace the demo geometry in `components/studio.tsx` with `useGLTF`.

Do not put secrets, private customer files, API keys, passwords or confidential pricing logic in this static project. Anything shipped to the browser is public.

## Deployment

The `out/` directory can be deployed to a normal static host/CDN.

If you later require RFQ submission, authentication, private documents or an admin panel, keep this frontend and add a small backend/API rather than turning every page into a database-backed page.
