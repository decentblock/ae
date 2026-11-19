# Google Business Profile & LinkedIn — GEO entity alignment

Align off-site signals with [`content/entity-fact-sheet.json`](../content/entity-fact-sheet.json). GEO (generative engine optimization) depends on **consistent facts** across the open web.

## Google Business Profile (Dubai HQ)

1. **Find or claim** listing for Al Khaleej Center, Bur Dubai address (single NAP from fact sheet).
2. **Primary category** (pick closest fit with local SEO review):
   - Insurance agency *or* Business management consultant *or* Consultant — avoid misleading categories.
3. **Secondary categories**: Marine surveyor (if available), Insurance broker only if accurate (usually **no**).
4. **Website**: `https://cogsglobal.ae` (not .com for UAE listing).
5. **Phone**: +971 589808009 (match site click tracking).
6. **Hours**: Mon–Fri business hours; note 24/7 CAT escalation in description, not hours field unless true.
7. **Description** (750 chars max) — use:
   - Licensed surveyors & loss adjusters (Central Bank UAE)
   - Lines: marine, property, engineering, valuation, risk engineering
   - Tagline: We Investigate to Alleviate
   - Link panel inquiries to `/en/contact/`
8. **Photos**: office signage, reception, team with consent, Dubai skyline context.
9. **Services** (GBP products/services): mirror top service URLs.
10. **Appointment link**: `https://cogsglobal.ae/en/contact/`

## LinkedIn ([company/cogsglobal](https://www.linkedin.com/company/cogsglobal))

| Field | Value |
|-------|--------|
| Website | `https://cogsglobal.ae` |
| Industry | Insurance / Professional services |
| Company size | Match HR records |
| Headquarters | Dubai, UAE |
| About | Copy from `/en/about/` + fact sheet metrics (**20K+** claims on .ae) |
| Hashtags | #COGSGlobal #LossAdjusters #InsuranceSurveyors #UAE |

**Post playbook (BD + GEO)**

- Every campaign post links to a **specific .ae hub** (not homepage only).
- Include one extractable fact (license, geography, service line).
- Founder/leadership posts should repeat legal entity name once.

## Directory citations (ethical)

Submit **identical NAP** to:

- Industry associations (CILA member listing if applicable)
- UAE business directories (quality over quantity)
- Marine & insurance trade association member lists where eligible

## Quarterly GEO prompt test

Use [`geo-prompt-test-log.csv`](./geo-prompt-test-log.csv). Test in ChatGPT, Perplexity, Gemini, Google AI Mode with UAE VPN/locale where possible.

**Fix loop**: wrong fact → update fact sheet + site schema → update LinkedIn/GBP → recheck in 14 days.
