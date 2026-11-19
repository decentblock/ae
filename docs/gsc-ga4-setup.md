# Google Search Console & GA4 — cogsglobal.ae

Phase 0 measurement setup. Replace placeholder IDs after creating properties.

## 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property **URL prefix**: `https://cogsglobal.ae` (preferred if DNS/HTML verification is easier).
3. Optionally add **Domain property**: `cogsglobal.ae` (requires DNS TXT at registrar).
4. Verify using one of:
   - **HTML file**: upload `googleXXXXXXXX.html` to site root (see `public/` after deploy).
   - **DNS TXT** record at `.ae` registrar.
   - **Google Analytics** linking (after GA4 exists).
5. Submit sitemaps:
   - `https://cogsglobal.ae/sitemap.xml`
   - `https://cogsglobal.ae/sitemap-en.xml`
   - `https://cogsglobal.ae/sitemap-ar.xml`
6. Set **International targeting** (legacy) or rely on `hreflang` — confirm `en-AE` / `ar-AE` on bilingual URLs.
7. Week 2 baseline export: Performance → last 28 days → Queries, Pages, Countries (filter United Arab Emirates).

## 2. Google Analytics 4

1. Admin → Create property **COGS Global — cogsglobal.ae**.
2. Web data stream: `https://cogsglobal.ae`, enhanced measurement ON.
3. Copy **Measurement ID** (`G-XXXXXXXXXX`) into:
   - `sites/cogsglobal-ae/content/site-config.json` → `ga4MeasurementId`
   - Re-run `pnpm --filter cogsglobal-ae build` (or `node scripts/build.mjs`).
4. Link GA4 ↔ GSC (Admin → Product links).

### Recommended conversion events

| Event name | Trigger |
|------------|---------|
| `generate_lead` | Contact form successful submit |
| `click_phone` | `tel:` link click (UAE/Oman numbers) |
| `click_email` | `mailto:info@cogsglobal.ae` |
| `download_panel_pdf` | Panel one-pager download (when published) |
| `language_switch` | EN ↔ AR navigation |

Event parameters (custom):

- `service_line` — hidden field on contact form
- `page_language` — `en` or `ar`
- `lead_source` — default `organic` or UTM capture

Mark `generate_lead` as **Key event** in GA4 for reporting.

## 3. Dashboard spec (Looker Studio or GA4 explorations)

**Weekly (marketing)**

- Organic sessions & engaged sessions (UAE filter)
- Top landing pages (EN service hubs)
- `generate_lead` and phone/email clicks

**Monthly (BD + leadership)**

- GSC impressions/clicks for target clusters (see `competitor-keyword-baseline.md`)
- Branded vs non-branded split
- Contact conversions by `service_line`

## 4. UTM convention for BD campaigns

```
?utm_source=linkedin&utm_medium=social&utm_campaign=panel_uae_2026&utm_content=loss_adjustment
```

Contact form should persist `utm_*` from query string into hidden fields for CRM handoff.

## 5. Post-deploy checklist

- [ ] GSC verified, sitemaps submitted, no critical coverage errors
- [ ] GA4 receiving realtime hits on staging and production
- [ ] Key events firing in DebugView
- [ ] Baseline spreadsheet saved (`docs/baseline-week2-template.csv`)
