# COGS Global — 90-day weekly execution plan (cogsglobal.ae only)

**Scope:** All digital growth, SEO, GEO, BD enablement, and social media drive traffic and leads to **https://cogsglobal.ae/** only.  
**Primary business goal:** UAE insurer / broker **panel & claims** leads.  
**Secondary:** Oman marine agency conversations (supporting URLs on .ae).  
**Out of scope for primary CTAs:** cogsglobal.com (India/global may be mentioned in copy but **links and UTM default to .ae**).

**North-star metrics (review weekly):**

| Metric | Source |
|--------|--------|
| Organic impressions/clicks (UAE queries) | Google Search Console |
| `generate_lead`, `click_phone`, `click_email` | GA4 on .ae |
| LinkedIn engagement → .ae landing sessions | GA4 (UTM) |
| Panel / RFP inquiries (qualitative) | BD CRM / inbox |

**Roles:** Marketing (M), BD (B), Dev/hosting (D), Compliance (C), Leadership (L).

---

## Social media strategy (cogsglobal.ae–centric)

### Channel priority

| Channel | Priority | Audience | Role for .ae |
|---------|----------|----------|--------------|
| **LinkedIn** (company + leadership) | P0 | Insurers, brokers, reinsurers, marine, risk | Main B2B engine; every campaign links to a **specific .ae hub** |
| **Google Business Profile** | P0 | Local “near me” + brand | Website = .ae; services match site URLs |
| **YouTube** (optional) | P2 | Technical buyers | Short explainers; link in description to .ae |
| **Instagram / Facebook** | P3 | Employer brand, events | Light repost from LinkedIn; bio link **cogsglobal.ae/en/contact/** |
| **X (Twitter)** | P3 | Industry news | Only if capacity; same link discipline |

**Do not** split attention across .com in post CTAs. India network posts (if any) are a **separate monthly slot** and still should not cannibalize .ae UAE campaigns.

### Content pillars (rotate weekly)

1. **Authority** — CBUAE/IRDAI context, CILA/RICS, process (survey → adjustment → report).  
2. **Capability** — marine, property/fire, CAR/EAR, valuation, pre-risk (one line per week).  
3. **Geography** — Dubai HQ, UAE coverage, Oman marine (month 2+).  
4. **Proof** — stats from [entity fact sheet](../content/entity-fact-sheet.json) only (20K+ claims, etc.).  
5. **People** — leadership insight (with L approval); tag sparingly.  
6. **GEO snippets** — one “extractable fact” per post (AI-friendly sentences).

### Post formats (LinkedIn)

| Format | Frequency | .ae tie-in |
|--------|-----------|------------|
| Single-image + 120–180 word caption | 2× / week | Link to service hub in first comment |
| Document carousel (PDF, 5–8 slides) | 2× / month | Panel one-pager → `/en/loss-adjustment-uae/` |
| Short video (60–90s founder/expert) | 1× / month | Pin comment with hub URL + UTM |
| Repost + comment on industry news | 1× / week | No link or soft link to `/en/affiliations-licenses/` |
| Arabic post (parallel or translated) | 2× / month | `/ar/loss-adjustment-uae/` or `/ar/contact/` |

### UTM standard (all social links)

```
https://cogsglobal.ae/en/{page}/?utm_source=linkedin&utm_medium=social&utm_campaign={week12_campaign}&utm_content={post_slug}
```

Campaign names: `panel_uae_w01`, `marine_oman_w05`, `cat_roster_w08`, etc.

### Compliance guardrails (every post)

- C review for **license wording** and **$10M / CAT** claims before publish.  
- No client names unless written approval.  
- No “guaranteed settlement” or legal advice.  
- Hashtags: `#COGSGlobal` `#LossAdjusters` `#InsuranceSurveyors` `#UAE` `#Dubai` + line-specific (`#MarineSurvey` `#CAR`) — max 5.

### Engagement SLA (BD + Marketing)

- Respond to **comments/DMs within 4 business hours** (UAE time).  
- DM script: offer `info@cogsglobal.ae` + link to `/en/contact/` with `service_line=loss-adjustment`.  
- Weekly: L or B engages on **10 targeted insurer/broker posts** ( thoughtful comments, no spam).

---

## Week-by-week plan (13 weeks ≈ 90 days)

### Week 1 — Truth, analytics, deploy foundation

| Day | SEO / site (.ae) | Social | BD / other |
|-----|------------------|--------|------------|
| Mon | Approve [entity-fact-sheet.json](../content/entity-fact-sheet.json) with C; align LinkedIn “About” | Audit LinkedIn company page: website → **cogsglobal.ae** | B: list top 20 UAE panel targets |
| Tue | GSC + GA4 property on .ae ([setup guide](./gsc-ga4-setup.md)) | Draft 4-week LinkedIn content batch in sheet | — |
| Wed | Deploy or schedule deploy of multi-page site (`dist/`); robots + sitemap live | **Post 1 (Authority):** “Licensed surveyors & loss adjusters in UAE” → comment link `/en/affiliations-licenses/` | D: www → non-www, HTTPS |
| Thu | GSC: submit sitemaps; baseline export template | **Post 2 (Proof):** one stat card (20K+ claims) → `/en/about/` | GBP: claim/verify Dubai HQ |
| Fri | Competitor SERP snapshot ([baseline doc](./competitor-keyword-baseline.md)) | Schedule week 2 posts | M: weekly metrics doc v1 |

**Week 1 KPIs:** GSC verified; GA4 realtime hits; 2 LinkedIn posts published; NAP consistent on GBP draft.

---

### Week 2 — MVP hubs indexed + LinkedIn rhythm

| Focus | Tasks |
|-------|--------|
| **Site** | Request indexing: `/`, `/en/loss-adjustment-uae/`, `/en/insurance-surveyors-dubai/`, `/en/contact/` |
| **SEO** | Fill baseline CSV; fix any crawl errors in GSC |
| **Social** | **3 posts:** (1) Loss adjustment process 4 steps → `/en/loss-adjustment-uae/` (2) Dubai office NAP + map narrative → `/en/insurance-surveyors-dubai/` (3) Poll: “What slows panel onboarding?” (engagement only) |
| **BD** | Send 5 personalized panel intros; link **loss-adjustment** hub in email signature |
| **GEO** | Run 5 prompts; log in [geo-prompt-test-log.csv](./geo-prompt-test-log.csv) |

---

### Week 3 — Domain policy + comment engagement

| Focus | Tasks |
|-------|--------|
| **Site** | Implement .com redirect map ([domain-redirect-map.md](./domain-redirect-map.md)) for approved URLs |
| **SEO** | Technical checklist items 50%+ ([technical-seo-checklist.md](./technical-seo-checklist.md)) |
| **Social** | **2 posts + 1 carousel:** “Survey vs adjustment vs valuation” table (screenshot from site) → loss-adjustment hub; **Arabic post #1** → `/ar/loss-adjustment-uae/` |
| **BD** | B comments on 10 insurer posts; track in simple CRM |
| **Leadership** | L reshares company post with 2-sentence personal note (panel-ready messaging) |

---

### Week 4 — Contact conversion + first panel PDF

| Focus | Tasks |
|-------|--------|
| **Site** | QA contact form events in GA4 DebugView; sticky CTAs on mobile |
| **SEO** | Rich Results test on FAQ pages |
| **Social** | **Post:** “Request panel documentation” CTA → `/en/contact/?service_line=loss-adjustment`; **Video or voice note** (60s) from L on “Investigate to Alleviate” |
| **BD** | First follow-up wave to Week 2 targets; attach panel talking points (not .com deck) |
| **Content** | Publish/refine insight: [UAE claims process](/en/insights/uae-insurance-claims-process/) — **LinkedIn long post** excerpt + link |

---

### Week 5 — Remaining EN service hubs

| Focus | Tasks |
|-------|--------|
| **Site** | Live: marine UAE, property/fire, engineering CAR/EAR, valuation, risk engineering, CAT capacity |
| **SEO** | Internal link pass; footer QA; meta matrix spot-check |
| **Social** | **Theme week — Marine:** 2 posts → `/en/marine-cargo-hull-surveys-uae/`; tag marine specialists internally |
| **BD** | Oman marine: share `/en/marine-surveys-oman/` in agency outreach (secondary) |
| **Metrics** | Month-1 review: organic + social-assisted sessions to .ae |

---

### Week 6 — Trust pages + affiliations push

| Focus | Tasks |
|-------|--------|
| **Site** | `/en/about/`, `/en/affiliations-licenses/` promoted in nav campaigns |
| **SEO** | Target impression growth for “insurance surveyor dubai” |
| **Social** | **Carousel:** licenses & memberships (5 slides) → affiliations page; **Post:** founder credential highlight → about (C approved) |
| **GEO** | Second prompt test batch; fix wrong facts on LinkedIn if needed |
| **BD** | 10 broker touchpoints with affiliations link |

---

### Week 7 — Arabic expansion QA

| Focus | Tasks |
|-------|--------|
| **Site** | RTL QA on top 5 AR mirrors; hreflang validation |
| **SEO** | Submit `sitemap-ar.xml`; inspect AR URLs in GSC |
| **Social** | **2 Arabic posts** (insurance survey + contact); **1 EN post** cross-linking AR switcher |
| **BD** | UAE Arabic-speaking stakeholder meetings; leave `/ar/contact/` |
| **Compliance** | C reviews AR insurance terms |

---

### Week 8 — CAT & engineering narrative (panel RFP season)

| Focus | Tasks |
|-------|--------|
| **Site** | Refresh engineering + CAT pages with FAQ additions from BD objections |
| **SEO** | Publish insight: [CAT readiness](/en/insights/cat-readiness-insurers-uae/) |
| **Social** | **Week theme CAT:** checklist teaser (PDF or carousel) → CAT hub + insight; L speaks at virtual/webinar if available — clip to LinkedIn |
| **BD** | CAT roster conversations; track leads by `utm_campaign=cat_roster_w08` |

---

### Week 9 — Property & fire + social proof

| Focus | Tasks |
|-------|--------|
| **Site** | Property/fire hub refresh; anonymized case **types** (no names) |
| **Social** | **2 posts:** property/fire capability; **reshare** team field photo (with consent) |
| **SEO** | GSC: compare week 1 vs week 9 impressions |
| **BD** | Property line insurer shortlist — 8 outreaches |

---

### Week 10 — Oman marine (BD secondary)

| Focus | Tasks |
|-------|--------|
| **Site** | `/en/oman/`, `/en/marine-surveys-oman/` in email templates |
| **Content** | Insight: [marine cargo guide](/en/insights/marine-cargo-survey-guide-gcc/) |
| **Social** | **2 posts:** Oman office + port coverage; use `#Oman` `#MarineSurvey`; link marine-surveys-oman |
| **BD** | Oman agency proposals reference .ae URLs only |

---

### Week 11 — Valuation & reinstatement cross-sell

| Focus | Tasks |
|-------|--------|
| **Site** | Valuation hub + insight [reinstatement for insurers](/en/insights/reinstatement-valuation-insurers/) |
| **Social** | **Table post:** why reinstatement matters (GEO-friendly); link valuation hub |
| **SEO** | Internal links from loss-adjustment → valuation |
| **BD** | Insurer sum-insured / valuation program emails |

---

### Week 12 — CRO + schema audit

| Focus | Tasks |
|-------|--------|
| **Site** | Contact form: thank-you message, optional `service_line` preselect from UTM; schema re-validation |
| **Social** | **Post:** “How to appoint a surveyor in UAE” → contact; A/B caption test (two variants, same link) |
| **Analytics** | GA4 funnel: session → contact click → generate_lead |
| **GEO** | Full quarterly prompt test (20–30 prompts) |

---

### Week 13 — 90-day retrospective + Q2 calendar

| Focus | Tasks |
|-------|--------|
| **Reporting** | Deck: GSC, GA4, LinkedIn analytics, BD pipeline, GEO log |
| **SEO** | Update [competitor-keyword-baseline.md](./competitor-keyword-baseline.md); plan next 13 weeks |
| **Social** | **Post:** milestone/thank-you + link homepage; schedule Q2 content batch |
| **Leadership** | KPI review; approve Q2 themes (pre-risk, case study, panel PDF v2) |

---

## Weekly operating rhythm (every Friday, 45 min)

1. **GSC** — top queries, pages, indexing issues.  
2. **GA4** — organic vs `linkedin / social` to .ae; conversions by `service_line`.  
3. **LinkedIn** — impressions, engagement, top post; adjust next week themes.  
4. **BD** — inquiries tied to UTM campaign.  
5. **GEO** — any new AI wrong facts? → fact sheet + post correction.  
6. **Backlog** — next week’s 2–3 posts drafted and C-slotted if needed.

---

## Social content calendar template (copy per week)

| Mon | Tue | Wed | Thu | Fri |
|-----|-----|-----|-----|-----|
| — | Draft post A | **Publish A** + comment link | Engage 10 accounts | Draft post B |
| — | — | **Publish B** (or AR) | Schedule next week | Metrics snapshot |

Use [`social-media-weekly-calendar.csv`](./social-media-weekly-calendar.csv) for dates and UTM columns.

---

## Related assets in this repo

| Document | Use |
|----------|-----|
| [gsc-ga4-setup.md](./gsc-ga4-setup.md) | Week 1–2 |
| [gbp-linkedin-geo-playbook.md](./gbp-linkedin-geo-playbook.md) | Ongoing social + local |
| [editorial-calendar-12mo.md](./editorial-calendar-12mo.md) | Months 4–12 after day 90 |
| [content/entity-fact-sheet.json](../content/entity-fact-sheet.json) | Single truth for posts |

---

## Immediate next 7 days (if starting Monday)

1. Compliance sign-off on fact sheet + license lines.  
2. GSC/GA4 on **cogsglobal.ae** only.  
3. Deploy site build with sitemaps; verify robots.txt.  
4. LinkedIn company URL → **https://cogsglobal.ae**.  
5. Publish Week 1–2 posts (4 total) with hub links in **first comment**.  
6. BD: 5 panel emails with `/en/loss-adjustment-uae/` + `/en/contact/`.  
7. GBP verification submitted.
