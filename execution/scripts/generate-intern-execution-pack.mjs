/**
 * Generates COGS Global 90-day intern execution pack:
 * - execution/output/COGS_Execution_Plan.xlsx
 * - execution/by-date/YYYY-MM-DD/daily-brief.docx + daily-brief.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import XLSX from 'xlsx';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from 'docx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXEC_ROOT = path.join(__dirname, '..');
const OUTPUT = path.join(EXEC_ROOT, 'output');
const BY_DATE = path.join(EXEC_ROOT, 'by-date');

/** Program start: first Monday after plan approval (adjust if needed) */
const START_DATE = '2026-11-03';

const ROLES = {
  M: 'Marketing intern / coordinator',
  B: 'BD intern',
  D: 'Dev / hosting (or vendor)',
  C: 'Compliance / legal reviewer',
  L: 'Leadership (Founder/Director)',
};

const SITE = 'https://cogsglobal.ae';

function parseDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function formatDateISO(d) {
  return d.toISOString().slice(0, 10);
}

function addDays(d, n) {
  const x = new Date(d);
  x.setUTCDate(x.getUTCDate() + n);
  return x;
}

function dayName(d) {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getUTCDay()];
}

const WEEK_THEMES = [
  'W1: Truth, analytics, deploy foundation',
  'W2: MVP hubs indexed + LinkedIn rhythm',
  'W3: Domain policy + comment engagement',
  'W4: Contact conversion + panel narrative',
  'W5: Remaining EN service hubs + marine social',
  'W6: Trust pages + affiliations push',
  'W7: Arabic expansion QA',
  'W8: CAT & engineering narrative',
  'W9: Property & fire + social proof',
  'W10: Oman marine (secondary BD)',
  'W11: Valuation & reinstatement',
  'W12: CRO + schema audit + GEO quarterly',
  'W13: 90-day retrospective + Q2 planning',
];

/** Daily task templates by week (Mon=0 .. Sun=6). Weekends = light monitoring. */
function getWeekTasks(weekIndex, dateISO, dow) {
  const w = weekIndex + 1;
  const campaign = `panel_uae_w${String(w).padStart(2, '0')}`;

  if (dow === 0 || dow === 6) {
    return {
      focus: 'Weekend — light monitoring',
      tasks: [
        task(1, M, 'Check LinkedIn notifications; flag DMs to BD lead within 2h on Monday', '15m', 'LinkedIn', 'No AI auto-reply to legal questions.', 'Inbox triaged'),
        task(2, M, 'Optional: read one competitor .ae SERP (incognito UAE VPN if available)', '20m', 'Browser', 'Use AI to summarize SERP patterns — human verifies.', 'Notes in weekly folder'),
      ],
    };
  }

  if (dow === 1) return week1to13Mon(w, campaign);
  if (dow === 2) return week1to13Tue(w, campaign);
  if (dow === 3) return week1to13Wed(w, campaign);
  if (dow === 4) return week1to13Thu(w, campaign);
  if (dow === 5) return week1to13Fri(w, campaign);

  return { focus: 'General execution', tasks: [] };
}

function task(step, role, action, time, tools, aiAutomation, done) {
  return { step, role, action, time, tools, aiAutomation, done };
}

const M = 'M';
const B = 'B';
const D = 'D';
const C = 'C';
const L = 'L';

function week1to13Mon(w, campaign) {
  const commonTasks = [
    task(1, M, 'Open daily brief; confirm all links use cogsglobal.ae only (not .com)', '10m', 'daily-brief', '—', 'Checklist ticked'),
    task(2, M, 'Team standup: report blockers to Marketing lead', '15m', 'Teams/Slack', 'AI: draft standup notes from yesterday log', 'Standup done'),
  ];
  const byW = {
    1: [
      task(3, C, 'Review entity-fact-sheet.json NAP + stats; email written approval to M', '45m', '../content/entity-fact-sheet.json', 'AI: highlight diffs vs LinkedIn About — C must approve', 'Approval saved'),
      task(4, M, 'Update LinkedIn company About to match fact sheet; set Website to cogsglobal.ae', '60m', 'LinkedIn', 'AI: draft About text from fact sheet; human paste after C OK', 'Website field = .ae'),
      task(5, B, 'Build list of 20 UAE insurer/broker panel targets in spreadsheet', '90m', 'Excel/CRM', 'AI: research public names — B verifies titles', '20 rows with company, contact, line'),
    ],
    2: [
      task(3, M, 'GSC: URL inspection for homepage + 3 MVP hubs; Request indexing', '45m', 'Google Search Console', '—', '4 URLs submitted'),
      task(4, D, 'Fix any crawl errors from Coverage report', '60m', 'GSC', 'AI: explain error codes to intern; D implements', 'Zero critical errors'),
    ],
    3: [task(3, D, 'Implement approved 301 redirects from domain-redirect-map.md', '120m', 'Hosting', '—', 'Redirects tested')],
    4: [task(3, M, 'GA4 DebugView: test contact form + phone clicks on staging/production', '45m', 'GA4', '—', 'Events fire')],
    5: [task(3, D, 'Deploy remaining EN service pages from dist build', '90m', 'Hosting/FTP', '—', 'URLs 200 OK')],
    6: [task(3, M, 'Promote about + affiliations in LinkedIn featured links', '30m', 'LinkedIn', '—', 'Links live')],
    7: [task(3, M, 'RTL QA on 5 Arabic URLs; log bugs for D', '90m', 'Browser', 'AI: compare EN/AR side-by-side checklist', 'Bug list sent')],
    8: [task(3, M, 'Add BD FAQ objections to engineering + CAT pages (content ticket to D/M)', '60m', 'pages-en.js', 'AI: draft FAQ from call notes — C review', 'PR or content updated')],
    9: [task(3, M, 'Refresh property/fire page with anonymized case types', '60m', 'Site content', 'AI draft — compliance no client names', 'Published')],
    10: [task(3, B, 'Add Oman .ae URLs to agency email template', '30m', 'Email', '—', 'Template saved')],
    11: [task(3, M, 'Valuation hub cross-links from loss-adjustment page', '45m', 'Content', '—', 'Links live')],
    12: [task(3, D, 'Contact form thank-you + UTM service_line prefill', '90m', 'site.js', '—', 'QA passed')],
    13: [task(3, M, 'Prepare 90-day metrics deck skeleton (GSC, GA4, LinkedIn, BD)', '120m', 'Slides', 'AI: chart captions — data from exports only', 'Draft v1')],
  };
  const extra = byW[w] || [task(3, M, 'SEO/content task from weekly-execution-plan-90d.md', '60m', 'Docs', 'Ask lead', 'Done')];
  return {
    focus: `Week kickoff + site/SEO — ${WEEK_THEMES[w - 1]}`,
    tasks: [...commonTasks, ...extra],
  };
}

function week1to13Tue(w, campaign) {
  const tasks = [
    task(1, M, 'Draft LinkedIn post(s) for Wed/Thu per social-media-weekly-calendar.csv', '90m', 'CSV + Canva', 'AI: 3 caption variants; pick one; C if licenses mentioned', 'Draft in sheet row'),
  ];
  if (w === 1) {
    tasks.push(
      task(2, M, 'Create GSC + GA4 properties for cogsglobal.ae (follow gsc-ga4-setup.md)', '120m', 'Google', '—', 'Realtime hits'),
      task(3, M, 'Paste GA4 ID into site-config.json; run npm run build; hand off to D for deploy', '45m', 'Repo', '—', 'ID live'),
    );
  }
  if (w === 2) tasks.push(task(2, M, 'Fill baseline-week2-template.csv from GSC (28-day when available)', '60m', 'GSC', '—', 'Saved'));
  if (w === 3) tasks.push(task(2, M, 'Technical SEO checklist: complete 50%+ items', '90m', 'technical-seo-checklist.md', 'AI: explain unchecked items', 'Checklist updated'));
  if (w === 4) tasks.push(task(2, M, 'Google Rich Results test on loss-adjustment FAQ URL', '30m', 'Google', '—', 'Screenshot saved'));
  if (w === 8) tasks.push(task(2, M, 'Publish/refine CAT readiness insight page content', '60m', 'Content', 'AI draft FAQ — C review', 'Live'));
  if (w === 10) tasks.push(task(2, M, 'Marine cargo insight article QA + internal links', '45m', 'Site', '—', 'Done'));
  if (w === 12) tasks.push(task(2, M, 'Run 20 GEO prompts; log geo-prompt-test-log.csv', '120m', 'ChatGPT/Perplexity', 'AI automation: batch prompts; human logs results', 'Log complete'));
  return { focus: 'Drafts, analytics setup, QA', tasks };
}

function week1to13Wed(w, campaign) {
  const tasks = [
    task(1, M, 'Publish LinkedIn Post A (Wed); add first comment with .ae UTM link', '45m', 'LinkedIn', 'Schedule via LinkedIn native scheduler if approved', 'Post live + comment'),
    task(2, B, 'Meaningful comments on 3 insurer/broker posts (no spam links)', '30m', 'LinkedIn', 'AI: draft thoughtful comment — human edits', '3 comments logged'),
  ];
  if (w === 1) {
    tasks.push(
      task(3, D, 'Deploy dist/ to production; verify robots.txt + sitemap.xml 200', '120m', 'Hosting', '—', 'Live'),
      task(4, M, 'Post 1: Authority licensed adjusters → comment /en/affiliations-licenses/', '30m', 'LinkedIn', 'Caption from playbook', 'Done'),
    );
  }
  if (w === 2) tasks.push(task(3, M, 'Post C: 4-step loss adjustment → /en/loss-adjustment-uae/', '30m', 'LinkedIn', '—', 'Done'));
  if (w === 3) tasks.push(task(3, M, 'Publish carousel survey vs adjustment vs valuation', '60m', 'Canva/PDF', 'AI: slide copy from site table', 'Done'));
  if (w === 5) tasks.push(task(3, M, 'Marine theme post → /en/marine-cargo-hull-surveys-uae/', '45m', 'LinkedIn', '—', 'Done'));
  if (w === 6) tasks.push(task(3, M, 'Licenses carousel → affiliations page', '60m', 'LinkedIn', 'C approval before publish', 'Done'));
  if (w === 8) tasks.push(task(3, M, 'CAT week post + link insight + CAT hub', '45m', 'LinkedIn', '—', 'Done'));
  return { focus: 'Publish day (social + deploy)', tasks };
}

function week1to13Thu(w, campaign) {
  const tasks = [
    task(1, M, 'Publish LinkedIn Post B OR engage: reply all comments from Wed post', '45m', 'LinkedIn', 'AI: draft replies — no legal admissions', 'Engagement done'),
  ];
  if (w === 1) {
    tasks.push(
      task(2, M, 'GSC submit sitemaps; export performance baseline', '45m', 'GSC', '—', 'Sitemaps OK'),
      task(3, M, 'Post 2: 20K stats → /en/about/', '30m', 'LinkedIn', '—', 'Done'),
      task(4, M, 'Start GBP claim for Dubai HQ (gbp-linkedin-geo-playbook.md)', '60m', 'Google Business', '—', 'Verification started'),
    );
  }
  if (w === 2) tasks.push(task(2, M, 'Post D: Dubai NAP → /en/insurance-surveyors-dubai/', '30m', 'LinkedIn', '—', 'Done'));
  if (w === 3) tasks.push(task(2, M, 'Arabic post #1 → /ar/loss-adjustment-uae/ (C approved)', '45m', 'LinkedIn', 'AI translate — C must review', 'Done'));
  if (w === 4) tasks.push(task(2, L, 'Record 60s video Investigate to Alleviate; M uploads', '60m', 'Phone/LinkedIn', 'AI: teleprompter script only', 'Published'));
  if (w === 7) tasks.push(task(2, M, 'Arabic post insurance surveyors', '45m', 'LinkedIn', 'C review', 'Done'));
  if (w === 9) tasks.push(task(2, M, 'Property/fire capability post', '45m', 'LinkedIn', '—', 'Done'));
  if (w === 10) tasks.push(task(2, M, 'Oman marine office post → marine-surveys-oman', '45m', 'LinkedIn', '—', 'Done'));
  if (w === 11) tasks.push(task(2, M, 'Reinstatement table graphic post', '45m', 'Canva', 'AI: table text from site', 'Done'));
  if (w === 12) tasks.push(task(2, M, 'A/B test contact CTA captions (same URL)', '45m', 'LinkedIn', 'AI: 2 variants', 'Both scheduled'));
  return { focus: 'Second post + local SEO + engagement', tasks };
}

function week1to13Fri(w, campaign) {
  const tasks = [
    task(1, M, 'Weekly metrics snapshot (45 min rhythm from weekly plan)', '45m', 'GSC+GA4+LinkedIn', 'AI: summarize week — lead validates numbers', 'Notes in KPI sheet'),
    task(2, M, 'Schedule next week LinkedIn drafts; mark compliance_ok in CSV', '60m', 'social-media-weekly-calendar.csv', '—', 'Week+1 rows ready'),
    task(3, B, 'Log BD outreaches and replies in CRM', '30m', 'CRM', '—', 'Updated'),
  ];
  if (w === 1) tasks.push(task(4, M, 'Competitor SERP snapshot for 8 P0 keywords', '60m', 'Browser', 'AI: SERP summary — intern verifies', 'Doc updated'));
  if (w === 2) {
    tasks.push(task(4, B, 'Send 5 personalized panel intro emails with .ae links', '90m', 'Email', 'AI: personalize first line — B reviews', '5 sent'));
    tasks.push(task(5, M, 'Post E: poll panel onboarding', '20m', 'LinkedIn', '—', 'Done'));
  }
  if (w === 3) tasks.push(task(4, L, 'Reshare company post with 2-sentence personal note', '15m', 'LinkedIn', 'AI draft — L edits', 'Done'));
  if (w === 4) tasks.push(task(4, B, 'Follow-up wave to week 2 targets', '60m', 'Email', '—', 'Logged'));
  if (w === 5) tasks.push(task(4, M, 'Month-1 review deck section: organic vs social UTM', '60m', 'GA4', '—', 'Slide done'));
  if (w === 6) tasks.push(task(4, B, '10 broker touchpoints with affiliations link', '90m', 'Email/LinkedIn', '—', 'Logged'));
  if (w === 13) tasks.push(task(4, L, 'KPI review meeting; approve Q2 themes', '60m', 'Meeting', '—', 'Minutes saved'));
  return { focus: 'Metrics + BD logging + prep next week', tasks };
}

function buildAllDays() {
  const start = parseDate(START_DATE);
  const days = [];
  for (let i = 0; i < 91; i++) {
    const d = addDays(start, i);
    const weekIndex = Math.floor(i / 7);
    if (weekIndex > 12) break;
    const dow = d.getUTCDay();
    const dateISO = formatDateISO(d);
    const { focus, tasks } = getWeekTasks(weekIndex, dateISO, dow);
    days.push({
      date: dateISO,
      dayName: dayName(d),
      week: weekIndex + 1,
      weekTheme: WEEK_THEMES[weekIndex],
      focus,
      campaign: `panel_uae_w${String(weekIndex + 1).padStart(2, '0')}`,
      tasks,
    });
  }
  return days;
}

function tasksToRows(days) {
  const rows = [];
  for (const day of days) {
    for (const t of day.tasks) {
      rows.push({
        Date: day.date,
        Day: day.dayName,
        Week: day.week,
        Week_Theme: day.weekTheme,
        Daily_Focus: day.focus,
        Step: t.step,
        Owner: t.role,
        Owner_Role: ROLES[t.role] || t.role,
        Action: t.action,
        Est_Time: t.time,
        Tools: t.tools,
        AI_Automation_Notes: t.aiAutomation,
        Definition_of_Done: t.done,
        Status: '',
        Intern_Initials: '',
        Manager_Signoff: '',
      });
    }
  }
  return rows;
}

function buildWorkbook(days) {
  const wb = XLSX.utils.book_new();

  const internReadme = [
    ['COGS Global — 90-Day Execution Plan (cogsglobal.ae ONLY)'],
    ['Start date', START_DATE],
    [''],
    ['HOW TO USE'],
    ['1', 'Each day: open folder by-date/YYYY-MM-DD/ and read daily-brief.docx'],
    ['2', 'Log progress in Daily_Master sheet (Status column)'],
    ['3', 'Never post license/CAT/$10M claims without Compliance (C) approval'],
    ['4', 'All public links must be https://cogsglobal.ae/... — NOT cogsglobal.com'],
    ['5', 'LinkedIn links go in FIRST COMMENT with UTM (see UTM_Reference sheet)'],
    [''],
    ['ROLES', 'Code', 'Meaning'],
    ['', 'M', ROLES.M],
    ['', 'B', ROLES.B],
    ['', 'D', ROLES.D],
    ['', 'C', ROLES.C],
    ['', 'L', ROLES.L],
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(internReadme), 'README_Interns');

  const master = tasksToRows(days);
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(master), 'Daily_Master');

  const weekSummary = days
    .filter((d) => d.dayName === 'Monday')
    .map((d) => ({
      Week: d.week,
      Theme: d.weekTheme,
      Week_Start: d.date,
      Campaign_UTM: d.campaign,
      KPI_Notes: '',
    }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(weekSummary), 'Week_Summary');

  const socialPath = path.join(EXEC_ROOT, '..', 'docs', 'social-media-weekly-calendar.csv');
  if (fs.existsSync(socialPath)) {
    const wbCsv = XLSX.read(fs.readFileSync(socialPath), { type: 'buffer' });
    const social = XLSX.utils.sheet_to_json(wbCsv.Sheets[wbCsv.SheetNames[0]], { defval: '' });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(social), 'Social_Posts');
  }

  const kpi = [
    { Week: 1, Metric: 'GSC verified', Target: 'Yes', Actual: '', Source: 'GSC' },
    { Week: 1, Metric: 'GA4 realtime', Target: 'Yes', Actual: '', Source: 'GA4' },
    { Week: 1, Metric: 'LinkedIn posts', Target: '2', Actual: '', Source: 'LinkedIn' },
    { Week: 2, Metric: 'URLs indexed (MVP)', Target: '4+', Actual: '', Source: 'GSC' },
    { Week: 2, Metric: 'Panel emails sent', Target: '5', Actual: '', Source: 'CRM' },
    { Week: 4, Metric: 'generate_lead events', Target: '>0', Actual: '', Source: 'GA4' },
    { Week: 13, Metric: '90-day report', Target: 'Complete', Actual: '', Source: 'Deck' },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(kpi), 'KPI_Tracker');

  const utm = [
    { Field: 'utm_source', Value: 'linkedin', Example: 'linkedin' },
    { Field: 'utm_medium', Value: 'social', Example: 'social' },
    { Field: 'utm_campaign', Value: 'panel_uae_w01', Example: 'panel_uae_w02 ... w13' },
    { Field: 'utm_content', Value: 'post_slug', Example: 'licensed_uae' },
    {
      Field: 'full_url_example',
      Value: `${SITE}/en/loss-adjustment-uae/?utm_source=linkedin&utm_medium=social&utm_campaign=panel_uae_w02&utm_content=process_4step`,
    },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(utm), 'UTM_Reference');

  const aiGuide = [
    { Task: 'LinkedIn caption draft', AI_OK: 'Yes', Human_Required: 'Compliance + tone edit', Tool: 'ChatGPT/Claude' },
    { Task: 'Arabic translation', AI_OK: 'Draft only', Human_Required: 'Native/SME reviewer (C)', Tool: 'AI translate + reviewer' },
    { Task: 'SERP competitor summary', AI_OK: 'Yes', Human_Required: 'Verify URLs manually', Tool: 'Perplexity' },
    { Task: 'GEO prompt batch', AI_OK: 'Run prompts', Human_Required: 'Log results in CSV', Tool: 'Multiple LLMs' },
    { Task: 'Auto-post without review', AI_OK: 'NO', Human_Required: 'Always', Tool: '—' },
    { Task: 'Auto-reply to claims/legal DMs', AI_OK: 'NO', Human_Required: 'Escalate to B + C', Tool: '—' },
    { Task: 'GA4/GSC exports', AI_OK: 'Summarize', Human_Required: 'Use official UI numbers', Tool: 'GA4 + AI summary' },
    { Task: 'Canva carousel from site copy', AI_OK: 'Outline slides', Human_Required: 'Brand colors + C review', Tool: 'Canva + AI' },
    {
      Task: 'LinkedIn scheduling',
      AI_OK: 'Optional',
      Human_Required: 'Native LinkedIn scheduler or approved tool',
      Tool: 'LinkedIn',
    },
    {
      Task: 'Cursor/agent code deploy',
      AI_OK: 'Dev only',
      Human_Required: 'D reviews build before production',
      Tool: 'Cursor / npm run build',
    },
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(aiGuide), 'AI_Automation_Guide');

  return wb;
}

async function writeDailyDocx(day) {
  const children = [
    new Paragraph({
      text: `COGS Global — Daily Brief`,
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [
        new TextRun({ text: `Date: ${day.date} (${day.dayName})`, bold: true }),
        new TextRun({ text: `  |  Week ${day.week}: ${day.weekTheme}` }),
      ],
    }),
    new Paragraph({ text: `Focus: ${day.focus}` }),
    new Paragraph({ text: '' }),
    new Paragraph({ text: 'Rules for interns', heading: HeadingLevel.HEADING_1 }),
    new Paragraph({
      text: '• Use cogsglobal.ae only in all links and UTMs.\n• Get Compliance (C) approval before any license, CAT, or $10M language.\n• Log completion in Excel Daily_Master tab.',
    }),
    new Paragraph({ text: 'Steps today', heading: HeadingLevel.HEADING_1 }),
  ];

  for (const t of day.tasks) {
    children.push(
      new Paragraph({
        text: `Step ${t.step} — Owner: ${t.role} (${ROLES[t.role]}) — ${t.time}`,
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph({ text: t.action }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Tools: ', bold: true }),
          new TextRun({ text: t.tools }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'AI / automation: ', bold: true }),
          new TextRun({ text: t.aiAutomation }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Done when: ', bold: true }),
          new TextRun({ text: t.done }),
        ],
      }),
      new Paragraph({ text: 'Intern notes / blockers:' }),
      new Paragraph({ text: '_______________________________________________' }),
      new Paragraph({ text: '' }),
    );
  }

  children.push(
    new Paragraph({ text: 'End of day checklist', heading: HeadingLevel.HEADING_1 }),
    new Paragraph({
      text: '[ ] Updated Excel Daily_Master status\n[ ] Saved screenshots to this date folder if requested\n[ ] Flagged compliance questions to C',
    }),
  );

  const doc = new Document({ sections: [{ children }] });
  return Packer.toBuffer(doc);
}

function writeDailyMd(day, dir) {
  const lines = [
    `# Daily brief — ${day.date} (${day.dayName})`,
    '',
    `**Week ${day.week}:** ${day.weekTheme}`,
    '',
    `**Focus:** ${day.focus}`,
    '',
    '## Intern rules',
    '',
    '- Links: **https://cogsglobal.ae** only (not cogsglobal.com for UAE campaigns).',
    '- Compliance (C) must approve license / CAT / large loss wording before social publish.',
    '- Log status in `execution/output/COGS_Execution_Plan.xlsx` → sheet **Daily_Master**.',
    '',
    '## Steps',
    '',
  ];
  for (const t of day.tasks) {
    lines.push(`### Step ${t.step} — ${t.role} (${ROLES[t.role]}) · ${t.time}`);
    lines.push('');
    lines.push(t.action);
    lines.push('');
    lines.push(`- **Tools:** ${t.tools}`);
    lines.push(`- **AI / automation:** ${t.aiAutomation}`);
    lines.push(`- **Done when:** ${t.done}`);
    lines.push('');
    lines.push('**Notes / blockers:**');
    lines.push('');
    lines.push('---');
    lines.push('');
  }
  lines.push('## End of day');
  lines.push('');
  lines.push('- [ ] Excel status updated');
  lines.push('- [ ] Manager notified of blockers');
  lines.push('');
  fs.writeFileSync(path.join(dir, 'daily-brief.md'), lines.join('\n'), 'utf8');
}

async function main() {
  if (fs.existsSync(BY_DATE)) fs.rmSync(BY_DATE, { recursive: true });
  if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive: true });

  const days = buildAllDays();
  const wb = buildWorkbook(days);
  const xlsxPath = path.join(OUTPUT, 'COGS_Execution_Plan.xlsx');
  XLSX.writeFile(wb, xlsxPath);

  for (const day of days) {
    const dir = path.join(BY_DATE, day.date);
    fs.mkdirSync(dir, { recursive: true });
    writeDailyMd(day, dir);
    const buf = await writeDailyDocx(day);
    fs.writeFileSync(path.join(dir, 'daily-brief.docx'), buf);
  }

  const index = {
    program: 'COGS Global cogsglobal.ae 90-day execution',
    startDate: START_DATE,
    totalDays: days.length,
    xlsx: 'output/COGS_Execution_Plan.xlsx',
    dailyFolders: 'by-date/YYYY-MM-DD/',
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(EXEC_ROOT, 'INDEX.json'), JSON.stringify(index, null, 2));
  fs.writeFileSync(
    path.join(EXEC_ROOT, 'README.md'),
    `# COGS Global execution pack (intern)

**Start date:** ${START_DATE}  
**Domain focus:** https://cogsglobal.ae/

## Files

| Path | Description |
|------|-------------|
| [output/COGS_Execution_Plan.xlsx](./output/COGS_Execution_Plan.xlsx) | Master tracker — all days, social, KPI, UTM, AI guide |
| [by-date/](./by-date/) | One folder per calendar day with \`daily-brief.docx\` + \`daily-brief.md\` |

## Regenerate

\`\`\`bash
cd sites/cogsglobal-ae/execution
npm install
npm run generate
\`\`\`

Change start date in \`scripts/generate-intern-execution-pack.mjs\` (\`START_DATE\`).
`,
  );

  console.log(`Generated ${days.length} daily folders, XLSX: ${xlsxPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
