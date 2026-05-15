export const site = {
  name: 'CommsDock',
  url: 'https://commsdock.com',
  email: 'hello@commsdock.com',
  description:
    'Voice telecom engineering practice for PBX, contact centre, collaboration platforms, and voice AI systems.',
  positioning:
    'Voice telecommunications specialist who designs, migrates, integrates, and automates business calling platforms.',
  availability: 'Accepting Q2 / Q3 2026 engagements',
  base: 'Australia',
  timezone: 'Australia/Sydney',
  areaServed: 'Australia, APAC, and remote-first global engagements',
} as const;

export const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
] as const;

export const proofPoints = [
  { label: 'Established', value: '2014' },
  { label: 'Voice platforms', value: 'PBX, CCaaS, UC' },
  { label: 'AI stack', value: 'Voice-native' },
  { label: 'Mode', value: 'Solo operator' },
] as const;

export const services = [
  {
    slug: 'voice-telecommunications-engineering',
    title: 'Voice telecommunications engineering',
    summary:
      'PBX, SIP, call routing, collaboration, and contact-centre engineering for businesses that depend on reliable voice.',
    outcomes: [
      'Cleaner call flows, routing logic, and handover documentation',
      'Voice platforms configured around business operations instead of vendor defaults',
      'Reduced ambiguity across carriers, trunks, endpoints, queues, and users',
    ],
    capabilities: [
      'NEC PBX',
      'Panasonic PBX',
      'Avaya IP Office',
      'Avaya Contact Center',
      'Webex Calling',
      'BroadWorks call centre',
      '3CX',
      'Yeastar Cloud PBX',
    ],
  },
  {
    slug: 'voice-systems-architecture',
    title: 'Voice systems architecture',
    summary:
      'Architecture work for migrations, hybrid voice estates, SIP integrations, call centre operations, and collaboration platforms.',
    outcomes: [
      'Clear target-state architecture and migration path',
      'Practical coexistence plans across legacy PBX, cloud PBX, UC, and call centre platforms',
      'Decision support for carrier, platform, endpoint, and vendor consolidation',
    ],
    capabilities: [
      'Cloud PBX migration',
      'SIP trunking and call flow design',
      'IVR and queue architecture',
      'Contact centre integration',
      'Numbering and dial-plan design',
      'Operational playbooks',
    ],
  },
  {
    slug: 'software-for-voice-operations',
    title: 'Software for voice operations',
    summary:
      'Custom software, APIs, dashboards, and integrations for teams that need voice operations to move faster.',
    outcomes: [
      'Internal tools that reduce manual provisioning, reporting, and ticketing drag',
      'Integrations that connect voice platforms with CRM, service desk, and business systems',
      'Maintainable software delivered by someone who understands voice telecom context',
    ],
    capabilities: [
      'Application development',
      'API design',
      'System integration',
      'Automation tooling',
      'Code review and modernisation',
      'Voice analytics dashboards',
    ],
  },
  {
    slug: 'voice-ai-systems',
    title: 'Voice AI systems',
    summary:
      'A voice-native AI stack for call handling, workflow automation, retrieval, evaluation, and safe integration into business systems.',
    outcomes: [
      'Voice AI workflows tied to measurable caller and operator outcomes',
      'Safer retrieval and automation patterns for customer and internal knowledge',
      'Cost, latency, quality, and evaluation discipline before production rollout',
    ],
    capabilities: [
      'Voice AI stack design',
      'Call workflow automation',
      'Speech-to-text and text-to-speech integration',
      'Retrieval systems',
      'Evaluation harnesses',
      'Guardrails and escalation paths',
    ],
  },
] as const;

export const engagementModels = [
  {
    title: 'Discovery',
    summary: 'A focused scoping conversation to understand the voice estate, call flows, platform risk, and business goal.',
  },
  {
    title: 'Project',
    summary: 'Fixed-scope design, build, review, or modernisation work with defined outcomes and handover.',
  },
  {
    title: 'Fractional',
    summary: 'Ongoing voice telecom, architecture, and software support for teams that need senior engineering capacity.',
  },
] as const;
