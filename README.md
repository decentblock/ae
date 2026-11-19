# COGS Global — cogsglobal.ae SEO site

Static, multi-lingual (EN/AR) marketing site generated from content modules. Implements the SEO & GEO plan: service hubs, `hreflang`, JSON-LD, sitemaps, and analytics hooks.

## Build

```bash
cd sites/cogsglobal-ae
npm run build
```

Output: [`dist/`](./dist/) — deploy entire folder to production web root.

Optional: `npm run meta-matrix` → [`docs/meta-matrix.csv`](./docs/meta-matrix.csv)

## Deploy

1. Run build on CI or locally.
2. Upload `dist/` to hosting for `cogsglobal.ae`.
3. Configure **non-www** canonical host (see [`docs/domain-redirect-map.md`](./docs/domain-redirect-map.md)).
4. Apply **301 rules** from `.com` where approved.
5. Set GA4 ID in [`content/site-config.json`](./content/site-config.json) and rebuild.
6. Follow [`docs/gsc-ga4-setup.md`](./docs/gsc-ga4-setup.md) and [`docs/technical-seo-checklist.md`](./docs/technical-seo-checklist.md).  
7. **DigitalOcean:** [`docs/deploy-digitalocean.md`](./docs/deploy-digitalocean.md) — App Platform, Droplet, or Spaces.

## Content source of truth

| File | Purpose |
|------|---------|
| [`content/entity-fact-sheet.json`](./content/entity-fact-sheet.json) | NAP, metrics, schema facts (GEO) |
| [`content/pages-en.js`](./content/pages-en.js) | English pages |
| [`content/pages-ar.js`](./content/pages-ar.js) | Arabic pages |
| [`scripts/build.mjs`](./scripts/build.mjs) | HTML + sitemap generator |

## Plan deliverables (docs/)

- [`gsc-ga4-setup.md`](./docs/gsc-ga4-setup.md)
- [`competitor-keyword-baseline.md`](./docs/competitor-keyword-baseline.md)
- [`domain-redirect-map.md`](./docs/domain-redirect-map.md)
- [`technical-seo-checklist.md`](./docs/technical-seo-checklist.md)
- [`schema-spec.json`](./docs/schema-spec.json)
- [`gbp-linkedin-geo-playbook.md`](./docs/gbp-linkedin-geo-playbook.md)
- [`geo-prompt-test-log.csv`](./docs/geo-prompt-test-log.csv)
- [`editorial-calendar-12mo.md`](./docs/editorial-calendar-12mo.md)
- [`weekly-execution-plan-90d.md`](./docs/weekly-execution-plan-90d.md) — 13-week SEO + BD + social schedule (.ae only)
- [`social-media-playbook.md`](./docs/social-media-playbook.md)
- [`social-media-weekly-calendar.csv`](./docs/social-media-weekly-calendar.csv)
- [`execution/`](./execution/) — **Intern pack:** Excel master + `by-date/` daily Word/Markdown briefs (run `npm run generate`)

## Core Web Vitals notes

- Single CSS file, deferred analytics script
- Replace hero photography with compressed WebP when brand assets available
- Serve via CDN with Brotli/gzip

### Local preview

```bash
npx --yes serve dist -p 4173
```

- English home: http://localhost:4173/
- **Arabic home:** http://localhost:4173/ar/ (include trailing slash)
- Toggle language with **العربية / English** in the header (uses relative links so local preview works).

If you use `python3 -m http.server`, open `/ar/` not `/ar` alone.
