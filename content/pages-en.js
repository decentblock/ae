const faqLossAdjusterEn = [
  {
    q: 'What is a loss adjuster in the UAE?',
    a: 'A loss adjuster investigates insurance claims on behalf of insurers and stakeholders, assesses cause and quantum of loss, and prepares impartial reports to support fair settlement. In the UAE, firms such as COGS Global operate under Central Bank licensing requirements for insurance survey and loss adjustment.',
  },
  {
    q: 'Who can appoint COGS Global?',
    a: 'Insurers, reinsurers, and insurance brokers typically appoint us under panel agreements or per-instruction bases. Insured parties may also encounter our adjusters when we are nominated by the insurer to conduct joint surveys.',
  },
  {
    q: 'Which lines of business do you adjust in the UAE?',
    a: 'We handle marine cargo and hull, property and fire, engineering (CAR/EAR, machinery breakdown), liability and miscellaneous claims, including complex and catastrophic events.',
  },
  {
    q: 'Do you support insurer panel onboarding?',
    a: 'Yes. We provide credentials, license documentation, and indicative service standards for technical and procurement review. Contact us to request panel documentation.',
  },
  {
    q: 'Can you coordinate cross-border files with India?',
    a: 'Where claims involve UAE and India exposures, our IRDAI-registered India operations can support under a single coordination point from Dubai headquarters.',
  },
];

export const pagesEn = [
  {
    slug: '',
    pageType: 'home',
    title: 'COGS Global | Licensed Surveyors & Loss Adjusters — Dubai & UAE',
    description:
      'Central Bank UAE-licensed surveyors and loss adjusters. Marine, property, engineering claims, valuation and risk engineering across the UAE, GCC and beyond.',
    h1: 'Trusted surveyors & loss adjusters in Dubai & the UAE',
    hero: {
      badge: 'Central Bank UAE licensed · IRDAI India · CILA · RICS affiliated',
      lead: 'Independent survey, loss adjustment, valuation and risk engineering for insurers, brokers and reinsurers across the Middle East and Asia.',
      ctaPrimary: 'Request panel documentation',
      ctaSecondary: 'Loss adjustment UAE',
    },
    showStats: true,
    showServiceGrid: true,
    blocks: [
      {
        type: 'html',
        html: `<h2>What we do</h2><p>COGS Global Surveyors & Loss Adjusters L.L.C. delivers prompt, professional claims and risk services with integrity. We represent insurers, insureds and brokers with balanced, evidence-based reporting suitable for reserving and settlement.</p>`,
      },
    ],
    faqs: faqLossAdjusterEn.slice(0, 3),
  },
  {
    slug: 'loss-adjustment-uae',
    pageType: 'service',
    navLabel: 'Loss adjustment UAE',
    title: 'Insurance Loss Adjustment in Dubai & UAE | COGS Global — Licensed Loss Adjusters',
    description:
      'Licensed insurance loss adjustment in the UAE for marine, property, engineering and liability claims. Panel-ready surveyors and adjusters based in Dubai.',
    h1: 'Insurance loss adjustment in the UAE',
    blocks: [
      {
        type: 'html',
        html: `<p>COGS Global provides independent loss adjustment and survey services for UAE insurers, reinsurers and brokers. Our adjusters combine engineering and insurance expertise to establish cause of loss, quantum, and mitigation recommendations.</p>`,
      },
      {
        type: 'list',
        title: 'Lines of business',
        items: [
          'Marine cargo and hull',
          'Fire and property damage',
          'Engineering — CAR, EAR, machinery breakdown',
          'Liability and miscellaneous claims',
          'Catastrophic and large-loss events',
        ],
      },
      {
        type: 'steps',
        title: 'Our process',
        items: [
          'Instruction and conflict checks; file opening with insurer/broker',
          'Site survey, joint inspections, and evidence collection',
          'Interim updates for reserving where required',
          'Final adjustment report with quantum and settlement support',
        ],
      },
      {
        type: 'table',
        title: 'Survey vs loss adjustment vs valuation',
        headers: ['Activity', 'Primary output', 'Typical appointor'],
        rows: [
          ['Survey', 'Factual damage / cause report', 'Insurer, broker'],
          ['Loss adjustment', 'Quantum and settlement recommendation', 'Insurer panel'],
          ['Reinstatement valuation', 'Sum insured / reinstatement basis', 'Insurer, bank'],
        ],
      },
    ],
    faqs: faqLossAdjusterEn,
  },
  {
    slug: 'insurance-surveyors-dubai',
    pageType: 'service',
    navLabel: 'Insurance surveyors Dubai',
    title: 'Insurance Surveyors in Dubai & UAE | COGS Global',
    description:
      'Appointed insurance surveyors in Dubai for damage surveys, claims investigation and technical reporting. Licensed for UAE insurance market.',
    h1: 'Insurance surveyors in Dubai',
    blocks: [
      {
        type: 'html',
        html: `<p>From our Bur Dubai headquarters, COGS Global mobilizes licensed surveyors across the UAE for damage surveys, liability investigations, and specialist engineering assessments. We serve insurer panels and single-instruction appointments.</p><p><strong>Office:</strong> Al Khaleej Center, 6th Floor, Al Mankhool Road, Bur Dubai — near Sharaf DG Metro.</p>`,
      },
      {
        type: 'list',
        title: 'Survey types',
        items: [
          'Initial loss and damage surveys',
          'Joint surveys with insured representatives',
          'Salvage and mitigation oversight',
          'Third-party and subrogation support',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you licensed insurance surveyors in Dubai?',
        a: 'COGS Global Surveyors & Loss Adjusters L.L.C. is registered and licensed for insurance survey and loss adjustment activities in the UAE under the Central Bank of the UAE framework.',
      },
      {
        q: 'How quickly can a surveyor attend in Dubai?',
        a: 'Attendance timing depends on claim severity and access. We prioritize life-safety and major commercial losses; confirm SLA expectations during panel onboarding.',
      },
      {
        q: 'Do you cover other emirates?',
        a: 'Yes. We serve the wider UAE and GCC through resident engineers and mobilization from Dubai and regional offices.',
      },
    ],
  },
  {
    slug: 'contact',
    pageType: 'contact',
    title: 'Contact COGS Global — Dubai HQ | Panel & Surveyor Appointments',
    description: 'Contact COGS Global in Dubai for loss adjustment panel inquiries, surveyor appointments and technical proposals. info@cogsglobal.ae',
    h1: 'Contact our technical team',
    blocks: [
      {
        type: 'html',
        html: `<p>For insurer panel documentation, survey appointments, or marine attendance in Oman, use the form or contact details below.</p>`,
      },
    ],
  },
  {
    slug: 'marine-cargo-hull-surveys-uae',
    pageType: 'service',
    navLabel: 'Marine cargo & hull UAE',
    title: 'Marine Cargo & Hull Surveys UAE | COGS Global',
    description: 'Marine cargo, hull and P&I-related surveys in the UAE. Quality, quantity and damage surveys for trade and insurance.',
    h1: 'Marine cargo and hull surveys in the UAE',
    blocks: [
      {
        type: 'list',
        title: 'Marine services',
        items: [
          'Cargo damage and contamination surveys',
          'Loading and discharge attendance',
          'Hull and vessel condition surveys',
          'Bunker and ROB quantity surveys',
          'Ship-to-ship transfer attendance',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you handle petroleum and chemical cargoes?',
        a: 'Our marine team supports dry bulk, containerized, petroleum and chemical cargoes subject to scope and safety requirements at the port or terminal.',
      },
    ],
  },
  {
    slug: 'property-fire-claims-uae',
    pageType: 'service',
    navLabel: 'Property & fire claims',
    title: 'Property & Fire Claims Adjuster UAE | COGS Global',
    description: 'Fire and property loss assessment and adjustment in the UAE for commercial, industrial and institutional risks.',
    h1: 'Property and fire claims in the UAE',
    blocks: [
      {
        type: 'html',
        html: `<p>We assess fire, flood and property damage with detailed BOQ support, business interruption coordination, and catastrophic event experience on individual claims up to USD 10 million where approved by file facts.</p>`,
      },
    ],
    faqs: [],
  },
  {
    slug: 'engineering-claims-car-ear-uae',
    pageType: 'service',
    navLabel: 'CAR / EAR engineering',
    title: 'CAR & EAR Engineering Claims Surveyor UAE | COGS Global',
    description: 'Construction All Risks and Erection All Risks claims survey and loss adjustment in the UAE.',
    h1: 'Engineering claims — CAR and EAR',
    blocks: [
      {
        type: 'list',
        title: 'Engineering lines',
        items: ['CAR / EAR project damage', 'Machinery breakdown and plant all risks', 'Delay and mitigation analysis with specialists'],
      },
    ],
    faqs: [],
  },
  {
    slug: 'risk-engineering-pre-risk-surveys-uae',
    pageType: 'service',
    navLabel: 'Risk engineering',
    title: 'Pre-Risk Surveys & Risk Engineering UAE | COGS Global',
    description: 'Pre-risk inspections, fire and electrical safety audits, and risk engineering for insurers in the UAE.',
    h1: 'Risk engineering and pre-risk surveys',
    blocks: [
      {
        type: 'list',
        title: 'Risk services',
        items: [
          'Pre-risk and risk improvement surveys',
          'Fire and electrical safety audits',
          'Structural integrity assessments',
          'HAZOP and process safety studies',
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: 'insurance-valuation-reinstatement-uae',
    pageType: 'service',
    navLabel: 'Insurance valuation',
    title: 'Insurance Reinstatement Valuation UAE | COGS Global',
    description: 'Approved reinstatement and market valuations for sum insured, lending and M&A in the UAE.',
    h1: 'Insurance valuation and reinstatement',
    blocks: [
      {
        type: 'html',
        html: `<p>Independent valuations for property, plant and machinery, and specialist assets to support accurate sum insured and financial reporting.</p>`,
      },
    ],
    faqs: [],
  },
  {
    slug: 'catastrophe-claims-capacity',
    pageType: 'service',
    navLabel: 'Catastrophe capacity',
    title: 'Catastrophe Claims Capacity UAE | COGS Global Loss Adjusters',
    description: 'Surge capacity for catastrophic property, marine and engineering claims in the UAE with team-based adjusting.',
    h1: 'Catastrophe claims capacity',
    blocks: [
      {
        type: 'html',
        html: `<p>We maintain team-based adjusting with adjuster and support staff collaboration to handle portfolio surges following storms, floods and major fires. Discuss CAT roster inclusion during panel onboarding.</p>`,
      },
    ],
    faqs: [],
  },
  {
    slug: 'about',
    pageType: 'about',
    title: 'About COGS Global | Surveyors & Loss Adjusters Since 2010',
    description: 'About COGS Global — Dubai HQ, GCC and Asia presence, leadership in loss adjustment, marine, valuation and risk engineering.',
    h1: 'About COGS Global',
    person: { name: 'Shubham Srivastav', title: 'Founder & Director' },
    blocks: [
      {
        type: 'html',
        html: `<p>Established in 2010, COGS Global is recognized for insurance survey, loss adjustment, valuation and marine services across the Middle East and Asia. We operate through specialized verticals with qualified adjusters, engineers and valuers.</p><p>Our mission: trusted professional services with accountability, integrity and continuous technical development.</p>`,
      },
    ],
    faqs: [],
  },
  {
    slug: 'affiliations-licenses',
    pageType: 'service',
    navLabel: 'Affiliations & licenses',
    title: 'Licenses & Affiliations | COGS Global — CBUAE & IRDAI',
    description: 'Central Bank UAE and IRDAI registrations, CILA, RICS affiliation and ISO-aligned quality systems.',
    h1: 'Affiliations and regulatory licenses',
    blocks: [
      {
        type: 'list',
        title: 'Regulatory and professional standing',
        items: entityRegulatory(),
      },
    ],
    faqs: [
      {
        q: 'Is COGS Global licensed by the Central Bank of the UAE?',
        a: 'Yes. COGS Global Surveyors & Loss Adjusters L.L.C. is registered and licensed for insurance survey and loss adjustment in the UAE under the Central Bank framework.',
      },
    ],
  },
  {
    slug: 'marine-surveys-oman',
    pageType: 'geo',
    navLabel: 'Marine surveys Oman',
    title: 'Marine Surveys Oman — Muscat | COGS Global',
    description: 'Marine cargo and bunker surveys in Oman from Muscat operations. Ports including Sohar, Duqm, Salalah and Muscat.',
    h1: 'Marine surveys in Oman',
    blocks: [
      {
        type: 'html',
        html: `<p>Our Muscat team supports ship agents, owners, charterers and insurers with time-critical marine attendance. Services include draft surveys, bunker ROB, load/discharge supervision, and cargo quality and quantity inspections.</p><p><strong>Oman office:</strong> 31, 3rd Floor, Elite Office Building, Boushar, Muscat.</p>`,
      },
      {
        type: 'list',
        title: 'Ports and corridors (confirm per instruction)',
        items: ['Muscat and Boushar', 'Sohar', 'Duqm', 'Salalah'],
      },
    ],
    faqs: [
      {
        q: 'Who appoints marine surveys in Oman?',
        a: 'Appointments may come from ship agents, owners, charterers, insurers or P&I clubs depending on the contract and claim.',
      },
    ],
  },
  {
    slug: 'oman',
    pageType: 'geo',
    navLabel: 'Oman office',
    title: 'COGS Global Oman | Marine & Technical Services',
    description: 'COGS Global Oman operations in Muscat — marine surveys and technical support for the Sultanate of Oman.',
    h1: 'COGS Global in Oman',
    blocks: [
      {
        type: 'html',
        html: `<p>Strategic Oman presence complements our Dubai headquarters for GCC marine and insurance work. Contact Oman lines: +968 77293020, +968 77171500.</p>`,
      },
    ],
    faqs: [],
  },
  {
    slug: 'insights/uae-insurance-claims-process',
    pageType: 'article',
    navLabel: 'UAE claims process',
    title: 'UAE Insurance Claims Process — Survey & Adjustment Explainer | COGS Global',
    description: 'How insurance survey and loss adjustment fit into the UAE claims process for insurers and brokers.',
    h1: 'UAE insurance claims process: survey and adjustment',
    blocks: [
      {
        type: 'html',
        html: `<p>After notification, insurers typically appoint a licensed surveyor or loss adjuster to establish facts, quantify the loss, and recommend settlement within policy terms. Timely site attendance and interim reporting support accurate reserving.</p><p>COGS Global supports insurers and brokers with documented processes suitable for panel audits. <a href="/en/loss-adjustment-uae/">Loss adjustment UAE</a> · <a href="/en/contact/">Contact</a></p>`,
      },
    ],
    faqs: [],
  },
  {
    slug: 'insights/cat-readiness-insurers-uae',
    pageType: 'article',
    navLabel: 'CAT readiness',
    title: 'CAT Readiness for Insurers in the UAE | COGS Global',
    description: 'Checklist themes for catastrophe roster planning with loss adjusters in the UAE.',
    h1: 'Catastrophe readiness for UAE insurers',
    blocks: [
      {
        type: 'list',
        title: 'Roster planning themes',
        items: [
          'Named CAT contacts and 24/7 escalation',
          'Portfolio segmentation by line and emirate',
          'Interim reporting cadence for reserving',
          'Joint survey protocols with insureds',
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: 'insights/marine-cargo-survey-guide-gcc',
    pageType: 'article',
    navLabel: 'Marine cargo guide',
    title: 'Marine Cargo Survey Guide — UAE & Oman Ports | COGS Global',
    description: 'When to appoint cargo surveys across UAE and Oman ports for trade and insurance.',
    h1: 'Marine cargo surveys across UAE and Oman',
    blocks: [
      {
        type: 'html',
        html: `<p>Appoint surveys at loading, discharge, or on discovery of damage to preserve evidence for cargo insurance and commercial settlement. See <a href="/en/marine-surveys-oman/">marine surveys Oman</a> and <a href="/en/marine-cargo-hull-surveys-uae/">marine UAE</a>.</p>`,
      },
    ],
    faqs: [],
  },
  {
    slug: 'insights/reinstatement-valuation-insurers',
    pageType: 'article',
    navLabel: 'Reinstatement valuation',
    title: 'Reinstatement Valuation for Insurers | COGS Global UAE',
    description: 'Why reinstatement valuations matter for sum insured accuracy in the UAE.',
    h1: 'Reinstatement valuation for insurers',
    blocks: [
      {
        type: 'html',
        html: `<p>Accurate reinstatement values reduce under-insurance disputes at claim stage. Our valuers support insurers and banks with documented methodologies. <a href="/en/insurance-valuation-reinstatement-uae/">Valuation services</a></p>`,
      },
    ],
    faqs: [],
  },
];

function entityRegulatory() {
  return [
    'Central Bank of the UAE — insurance survey & loss adjustment',
    'IRDAI — India',
    'Chartered Institute of Loss Adjusters (CILA)',
    'RICS affiliated',
    'ISO-aligned quality management systems',
  ];
}
