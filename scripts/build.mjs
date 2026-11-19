import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pagesEn } from '../content/pages-en.js';
import { pagesAr } from '../content/pages-ar.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const publicDir = path.join(root, 'public');

const entity = JSON.parse(fs.readFileSync(path.join(root, 'content/entity-fact-sheet.json'), 'utf8'));
const siteConfig = JSON.parse(fs.readFileSync(path.join(root, 'content/site-config.json'), 'utf8'));

const SITE = siteConfig.siteUrl.replace(/\/$/, '');

/** Hero imagery — Dubai skyline; compress via CDN params */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=960&q=85';

const navEn = [
  { slug: '', label: 'Home' },
  { slug: 'loss-adjustment-uae', label: 'Loss adjustment' },
  { slug: 'insurance-surveyors-dubai', label: 'Surveyors Dubai' },
  { slug: 'affiliations-licenses', label: 'Licenses' },
  { slug: 'about', label: 'About' },
  { slug: 'contact', label: 'Contact' },
];

const navAr = [
  { slug: '', label: 'الرئيسية' },
  { slug: 'loss-adjustment-uae', label: 'تعديل الخسارة' },
  { slug: 'insurance-surveyors-dubai', label: 'مساحو التأمين' },
  { slug: 'affiliations-licenses', label: 'التراخيص' },
  { slug: 'about', label: 'من نحن' },
  { slug: 'contact', label: 'اتصل بنا' },
];

const footerServicesEn = [
  'loss-adjustment-uae',
  'insurance-surveyors-dubai',
  'marine-cargo-hull-surveys-uae',
  'property-fire-claims-uae',
  'engineering-claims-car-ear-uae',
  'risk-engineering-pre-risk-surveys-uae',
  'insurance-valuation-reinstatement-uae',
  'catastrophe-claims-capacity',
  'marine-surveys-oman',
];

function outFile(locale, slug) {
  const seg = slug ? slug.split('/') : [];
  if (locale === 'en' && !slug) return path.join(dist, 'index.html');
  if (locale === 'en' && slug) return path.join(dist, 'en', ...seg, 'index.html');
  if (!slug) return path.join(dist, 'ar', 'index.html');
  return path.join(dist, 'ar', ...seg, 'index.html');
}

function urlPath(locale, slug) {
  const prefix = locale === 'en' ? '/en' : '/ar';
  if (!slug) return locale === 'en' ? '/' : '/ar/';
  return `${prefix}/${slug}/`;
}

function altUrls(slug) {
  const enPath = urlPath('en', slug);
  const arPath = urlPath('ar', slug);
  return { en: SITE + enPath, ar: SITE + arPath };
}

/** Relative paths for language toggle (works on localhost and production) */
function altPathsRelative(slug) {
  return { en: urlPath('en', slug), ar: urlPath('ar', slug) };
}

function renderHeroMetrics(isEn) {
  const items = [
    [entity.publicMetrics.claimsAdjusted, isEn ? 'Claims adjusted' : 'مطالبات مُعدّلة'],
    [entity.publicMetrics.valuationsCompleted, isEn ? 'Valuations' : 'تقييمات'],
    [entity.publicMetrics.riskInspections, isEn ? 'Risk inspections' : 'فحوصات مخاطر'],
    [entity.publicMetrics.yearsExperience, isEn ? 'Years experience' : 'سنوات الخبرة'],
  ];
  return `<div class="hero-metrics" role="list">${items
    .map(
      ([val, label]) =>
        `<div class="hero-metric" role="listitem"><strong>${escapeHtml(val)}</strong><span>${escapeHtml(label)}</span></div>`,
    )
    .join('')}</div>`;
}

function renderHomeHero(page, isEn, prefix) {
  const imgAlt = isEn
    ? 'Dubai skyline — COGS Global UAE headquarters region'
    : 'أفق دبي — منطقة مقر COGS Global في الإمارات';
  const chips = isEn
    ? [
        { label: 'Marine & cargo', slug: 'marine-cargo-hull-surveys-uae' },
        { label: 'Property & fire', slug: 'property-fire-claims-uae' },
        { label: 'CAR / EAR', slug: 'engineering-claims-car-ear-uae' },
        { label: 'GCC + India', slug: 'about' },
      ]
    : [
        { label: 'بحرية وبضائع', slug: 'marine-cargo-hull-surveys-uae' },
        { label: 'ممتلكات وحريق', slug: 'property-fire-claims-uae' },
        { label: 'CAR / EAR', slug: 'engineering-claims-car-ear-uae' },
        { label: 'الخليج والهند', slug: 'about' },
      ];
  const chipHtml = chips
    .map((c) => `<li><a href="${prefix}/${c.slug}/">${escapeHtml(c.label)}</a></li>`)
    .join('');
  const licensesHref = `${prefix}/affiliations-licenses/`;
  const licensesLabel = isEn ? 'View licenses & affiliations' : 'التراخيص والانتسابات';

  return `<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <a class="hero-badge" href="${licensesHref}">${escapeHtml(page.hero.badge)}</a>
      <p class="hero-tagline">${escapeHtml(entity.tagline)}</p>
      <h1>${escapeHtml(page.h1)}</h1>
      <p class="hero-lead">${escapeHtml(page.hero.lead)}</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="${prefix}/contact/">${escapeHtml(page.hero.ctaPrimary)}</a>
        <a class="btn btn-secondary" href="${prefix}/loss-adjustment-uae/">${escapeHtml(page.hero.ctaSecondary)}</a>
      </div>
      <p class="hero-licenses-link"><a href="${licensesHref}">${escapeHtml(licensesLabel)} →</a></p>
    </div>
    <div class="hero-media">
      <figure class="hero-figure">
        <img class="hero-photo" src="${HERO_IMAGE}" alt="${escapeHtml(imgAlt)}" width="960" height="640" fetchpriority="high" decoding="async" />
        <figcaption class="hero-figure-cap">${isEn ? 'Dubai · Bur Dubai HQ' : 'دبي · مقر بر دبي'}</figcaption>
      </figure>
      <ul class="hero-service-chips">${chipHtml}</ul>
    </div>
  </div>
  ${page.showStats ? renderHeroMetrics(isEn) : ''}
</section>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function organizationSchema() {
  const hq = entity.nap.headquarters;
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: entity.legalName,
    alternateName: entity.brandName,
    url: SITE,
    logo: `${SITE}/assets/og-default.svg`,
    slogan: entity.tagline,
    foundingDate: String(entity.foundedYear),
    email: entity.contact.emailPrimary,
    telephone: entity.contact.phonesUae[0],
    sameAs: entity.sameAs,
    areaServed: entity.serviceRegions,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hq.streetAddress,
      addressLocality: hq.addressLocality,
      addressRegion: hq.addressRegion,
      addressCountry: hq.addressCountry,
    },
  };
}

function serviceSchema(page, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.description,
    provider: { '@type': 'Organization', name: entity.legalName, url: SITE },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    url,
  };
}

function faqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function renderBlocks(blocks) {
  if (!blocks?.length) return '';
  return blocks
    .map((b) => {
      if (b.type === 'html') return `<div class="content-block">${b.html}</div>`;
      if (b.type === 'list') {
        const items = b.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('');
        return `<div class="content-block"><h2>${escapeHtml(b.title)}</h2><ul>${items}</ul></div>`;
      }
      if (b.type === 'steps') {
        const items = b.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('');
        return `<div class="content-block"><h2>${escapeHtml(b.title)}</h2><ol>${items}</ol></div>`;
      }
      if (b.type === 'table') {
        const head = b.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('');
        const rows = b.rows
          .map((row) => `<tr>${row.map((c) => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`)
          .join('');
        return `<div class="content-block"><h2>${escapeHtml(b.title)}</h2><table class="compare-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      }
      return '';
    })
    .join('\n');
}

function renderPage(page, locale, allPagesBySlug) {
  const slug = page.slug;
  const isEn = locale === 'en';
  const nav = isEn ? navEn : navAr;
  const dir = isEn ? 'ltr' : 'rtl';
  const lang = isEn ? 'en-AE' : 'ar-AE';
  const prefix = isEn ? '/en' : '/ar';
  const canonicalPath = slug === '' && isEn ? '/' : slug === '' ? '/ar/' : `${prefix}/${slug}/`;
  const canonical = SITE + (canonicalPath === '/' ? '/' : canonicalPath);
  const alt = altUrls(slug);
  const altRel = altPathsRelative(slug);
  const otherLocale = isEn ? 'ar' : 'en';
  const otherLabel = isEn ? siteConfig.locales.ar.label : siteConfig.locales.en.label;
  const otherHref = isEn ? altRel.ar : altRel.en;

  const schemas = [organizationSchema()];
  if (page.pageType === 'service' || page.pageType === 'geo') schemas.push(serviceSchema(page, canonical));
  const faq = faqSchema(page.faqs);
  if (faq) schemas.push(faq);
  if (page.pageType === 'about' && page.person) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: page.person.name,
      jobTitle: page.person.title,
      worksFor: { '@type': 'Organization', name: entity.legalName },
    });
  }

  const jsonLd = schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');

  const navLinks = nav
    .map((n) => {
      const href = n.slug === '' ? (isEn ? '/' : '/ar/') : `${prefix}/${n.slug.split('/').join('/')}/`;
      return `<a href="${href}">${escapeHtml(n.label)}</a>`;
    })
    .join('\n');

  const footerServiceLinks = footerServicesEn
    .map((s) => {
      const p = allPagesBySlug[s];
      const label = isEn ? p?.navLabel || p?.h1 : pagesAr.find((x) => x.slug === s)?.navLabel || p?.h1;
      return `<li><a href="${prefix}/${s}/">${escapeHtml(label || s)}</a></li>`;
    })
    .join('\n');

  const faqHtml = page.faqs?.length
    ? `<div class="content-block faq"><h2>${escapeHtml(page.faqTitle || (isEn ? 'Frequently asked questions' : 'أسئلة شائعة'))}</h2>${page.faqs
        .map((f) => `<details><summary>${escapeHtml(f.q)}</summary><p>${escapeHtml(f.a)}</p></details>`)
        .join('')}</div>`
    : '';

  const hero =
    page.slug === '' && page.hero
      ? renderHomeHero(page, isEn, prefix)
      : `<div class="page-title-bar"><h1>${escapeHtml(page.h1)}</h1></div>`;

  /** Homepage stats live inside hero; other pages unchanged */
  const stats = '';

  const serviceGrid =
    page.slug === '' && page.showServiceGrid
      ? `<div class="service-grid">${footerServicesEn.slice(0, 6)
          .map((s) => {
            const pe = pagesEn.find((x) => x.slug === s);
            const pa = pagesAr.find((x) => x.slug === s);
            const title = isEn ? pe?.h1 : pa?.h1;
            const desc = isEn ? pe?.description?.slice(0, 120) + '…' : pa?.description?.slice(0, 120) + '…';
            return `<article class="service-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p><a href="${prefix}/${s}/">${isEn ? 'Learn more' : 'اقرأ المزيد'} →</a></article>`;
          })
          .join('')}</div>`
      : '';

  const contactForm =
    page.pageType === 'contact'
      ? `<form id="contact-form" class="contact-form" data-thanks="${escapeHtml(isEn ? 'Thank you. Our technical team will respond shortly.' : 'شكراً لكم. سيتواصل فريقنا معكم قريباً.')}">
      <label>${isEn ? 'Name' : 'الاسم'}</label><input name="name" required />
      <label>${isEn ? 'Organization' : 'الجهة'}</label><input name="organization" />
      <label>${isEn ? 'Service line' : 'خط الخدمة'}</label>
      <select name="service_line">
        <option value="loss-adjustment">${isEn ? 'Loss adjustment / panel' : 'تعديل الخسارة / لوحة'}</option>
        <option value="marine">${isEn ? 'Marine surveys' : 'مسوحات بحرية'}</option>
        <option value="valuation">${isEn ? 'Valuation' : 'تقييم'}</option>
        <option value="risk">${isEn ? 'Risk engineering' : 'هندسة المخاطر'}</option>
        <option value="other">${isEn ? 'Other' : 'أخرى'}</option>
      </select>
      <label>${isEn ? 'Email' : 'البريد الإلكتروني'}</label><input type="email" name="email" required />
      <label>${isEn ? 'Message' : 'الرسالة'}</label><textarea name="message" required></textarea>
      <input type="hidden" name="utm_source" value="" /><input type="hidden" name="utm_medium" value="" />
      <input type="hidden" name="utm_campaign" value="" /><input type="hidden" name="utm_content" value="" />
      <button type="submit" class="btn btn-primary">${isEn ? 'Submit inquiry' : 'إرسال'}</button>
    </form>
    <div class="content-block"><h2>${isEn ? 'UAE headquarters' : 'المقر — الإمارات'}</h2><p>${escapeHtml(entity.nap.headquarters.formatted)}</p>
    <p><a href="tel:${entity.contact.phonesUae[0]}">${entity.contact.phonesUae[0]}</a> · <a href="mailto:${entity.contact.emailPrimary}">${entity.contact.emailPrimary}</a></p></div>`
      : '';

  const phone = entity.contact.phonesUae[0];

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="en-AE" href="${alt.en}" />
  <link rel="alternate" hreflang="ar-AE" href="${alt.ar}" />
  <link rel="alternate" hreflang="x-default" href="${alt.en}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(page.title)}" />
  <meta property="og:description" content="${escapeHtml(page.description)}" />
  <meta property="og:site_name" content="COGS Global" />
  <meta property="og:image" content="${SITE}/assets/og-default.svg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="stylesheet" href="/assets/styles.css" />
  ${jsonLd}
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a class="logo" href="${isEn ? '/' : '/ar/'}">COGS <span>Global</span></a>
      <nav class="nav-main" aria-label="Primary">${navLinks}
        <a class="lang-switch" href="${otherHref}" hreflang="${otherLocale === 'en' ? 'en-AE' : 'ar-AE'}">${escapeHtml(otherLabel)}</a>
      </nav>
    </div>
  </header>
  ${hero}
  <main class="${page.slug === '' ? 'home-main' : ''}">
    ${stats}
    ${renderBlocks(page.blocks)}
    ${serviceGrid}
    ${contactForm}
    ${faqHtml}
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div><h4>${isEn ? 'Services' : 'الخدمات'}</h4><ul>${footerServiceLinks}</ul></div>
        <div><h4>${isEn ? 'Company' : 'الشركة'}</h4><ul>
          <li><a href="${prefix}/about/">${isEn ? 'About' : 'من نحن'}</a></li>
          <li><a href="${prefix}/affiliations-licenses/">${isEn ? 'Licenses' : 'التراخيص'}</a></li>
          <li><a href="${prefix}/contact/">${isEn ? 'Contact' : 'اتصل بنا'}</a></li>
        </ul></div>
        <div><h4>${isEn ? 'Contact' : 'تواصل'}</h4><p>${escapeHtml(entity.nap.headquarters.formatted)}</p>
        <p><a href="mailto:${entity.contact.emailPrimary}">${entity.contact.emailPrimary}</a></p></div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${escapeHtml(entity.legalName)} · ${escapeHtml(entity.tagline)}</div>
    </div>
  </footer>
  <div class="sticky-contact">
    <a href="tel:${phone}">${isEn ? 'Call UAE' : 'اتصل'}</a>
    <a href="${prefix}/contact/">${isEn ? 'Inquiry' : 'استفسار'}</a>
  </div>
  <script>window.COGS_SITE_CONFIG=${JSON.stringify({ ga4MeasurementId: siteConfig.ga4MeasurementId })};</script>
  <script src="/assets/site.js" defer></script>
</body>
</html>`;
}

function writePage(outPath, html) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name);
    const d = path.join(dest, name);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// Build
if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true });
fs.mkdirSync(dist, { recursive: true });
copyDir(publicDir, dist);

const enBySlug = Object.fromEntries(pagesEn.map((p) => [p.slug, p]));
const urlsEn = [];
const urlsAr = [];

for (const page of pagesEn) {
  const html = renderPage(page, 'en', enBySlug);
  writePage(outFile('en', page.slug), html);
  if (page.slug === '') {
    writePage(path.join(dist, 'en', 'index.html'), html);
    urlsEn.push('/');
    urlsEn.push('/en/');
  } else {
    urlsEn.push(urlPath('en', page.slug));
  }
}

for (const page of pagesAr) {
  const html = renderPage(page, 'ar', enBySlug);
  writePage(outFile('ar', page.slug), html);
  urlsAr.push(urlPath('ar', page.slug));
}

function sitemap(urls, locPrefix = '') {
  const body = urls
    .map((u) => {
      const loc = SITE + u;
      return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${u === '/' || u === '/ar/' ? '1.0' : '0.8'}</priority></url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

fs.writeFileSync(path.join(dist, 'sitemap-en.xml'), sitemap([...new Set(urlsEn)]));
fs.writeFileSync(path.join(dist, 'sitemap-ar.xml'), sitemap([...new Set(urlsAr)]));
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${SITE}/sitemap-en.xml</loc></sitemap>\n  <sitemap><loc>${SITE}/sitemap-ar.xml</loc></sitemap>\n</sitemapindex>\n`,
);

console.log(`Built ${urlsEn.length} EN + ${urlsAr.length} AR URLs → ${dist}`);
