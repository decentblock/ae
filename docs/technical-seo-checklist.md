# Technical SEO completion checklist — cogsglobal.ae

Use after deploying `sites/cogsglobal-ae/dist/` to production.

## Crawl & index

- [ ] `https://cogsglobal.ae/robots.txt` returns 200, references sitemap
- [ ] `https://cogsglobal.ae/sitemap.xml` returns 200
- [ ] `sitemap-en.xml` and `sitemap-ar.xml` linked from index sitemap
- [ ] No accidental `noindex` on production service pages
- [ ] GSC sitemaps submitted, valid URL count matches deploy

## Host & security

- [ ] HTTPS everywhere, HTTP 301 to HTTPS
- [ ] Single preferred host (non-www per site-config)
- [ ] Valid TLS chain

## On-page

- [ ] Unique `<title>` and meta description per URL (see `meta-matrix.csv`)
- [ ] One H1 per page
- [ ] Canonical URL on every page
- [ ] `hreflang` en-AE / ar-AE + x-default on bilingual pairs
- [ ] Internal links: footer service list + in-content cross-links

## Structured data

- [ ] Organization + LocalBusiness on site (JSON-LD)
- [ ] Service + FAQPage on service hubs
- [ ] Validate with Google Rich Results Test / Schema.org validator

## Performance (CWV)

- [ ] Hero images compressed (WebP where supported)
- [ ] `loading="lazy"` on below-fold images
- [ ] Minimal blocking JS; analytics deferred
- [ ] Mobile LCP target &lt; 2.5s on 4G (field data in GSC when available)

## Analytics

- [ ] GA4 measurement ID live
- [ ] Key events: generate_lead, click_phone, click_email
- [ ] GSC linked to GA4

## Domain policy

- [ ] Redirect map from `domain-redirect-map.md` applied on .com where approved
- [ ] NAP matches `entity-fact-sheet.json` site-wide

## Sign-off

| Item | Owner | Date |
|------|-------|------|
| Dev deploy | | |
| Marketing QA | | |
| Compliance (license copy) | | |
