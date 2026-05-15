export const site = {
  name: 'CommsDock',
  url: 'https://commsdock.com',
  email: 'hello@commsdock.com',
  description:
    'Telecom-first engineering practice for network architecture, field-to-cloud systems, and the software needed to operate them.',
  positioning:
    'Telecommunications specialist who designs networks, architects systems, and builds the software that makes delivery and operations simpler.',
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
  { label: 'Networks deployed', value: '47' },
  { label: 'Countries', value: '6' },
  { label: 'Mode', value: 'Solo operator' },
] as const;

export const services = [
  {
    slug: 'telecommunications-engineering',
    title: 'Telecommunications engineering',
    summary:
      'RF, transport, backhaul, last-mile, commissioning, and operational assurance for networks that need practical delivery discipline.',
    outcomes: [
      'Network designs that can be built, operated, and handed over',
      'Cleaner vendor coordination and technical decision records',
      'Field-aware engineering that accounts for constraints before rollout',
    ],
    capabilities: [
      'RF planning',
      'IP transport design',
      'Microwave backhaul',
      'Carrier-grade network architecture',
      'Commissioning support',
      'Operations and assurance',
    ],
  },
  {
    slug: 'network-systems-architecture',
    title: 'Network and systems architecture',
    summary:
      'Architecture work that connects telecom infrastructure with cloud, edge, observability, and business systems.',
    outcomes: [
      'Clear target-state architecture and migration path',
      'Resilient edge, cloud, and observability patterns',
      'Decision support for build, buy, and vendor consolidation',
    ],
    capabilities: [
      'Hybrid-edge architecture',
      'Cloud migration planning',
      'Observability and SLO design',
      'Infrastructure as code direction',
      'Technical due diligence',
      'Operational playbooks',
    ],
  },
  {
    slug: 'software-for-network-operations',
    title: 'Software for network operations',
    summary:
      'Custom software, APIs, dashboards, and integrations for teams that need engineering workflows to move faster.',
    outcomes: [
      'Internal tools that reduce spreadsheet and ticketing drag',
      'APIs and integrations that connect field, network, and business data',
      'Maintainable software delivered by someone who understands the network context',
    ],
    capabilities: [
      'Application development',
      'API design',
      'System integration',
      'Automation tooling',
      'Code review and modernisation',
      'Operational dashboards',
    ],
  },
  {
    slug: 'ai-assisted-engineering',
    title: 'AI-assisted engineering workflows',
    summary:
      'Practical LLM features for engineering teams: retrieval, evaluation, workflow assistance, and guardrails where they make operational sense.',
    outcomes: [
      'AI features tied to measurable engineering workflows',
      'Safer retrieval and agentic patterns for internal knowledge',
      'Cost, latency, and evaluation discipline before production rollout',
    ],
    capabilities: [
      'Retrieval systems',
      'Agentic workflow design',
      'Evaluation harnesses',
      'Guardrails',
      'Cost and latency management',
      'Knowledge-base integration',
    ],
  },
] as const;

export const engagementModels = [
  {
    title: 'Discovery',
    summary: 'A focused scoping conversation to understand the network, system, delivery risk, and business goal.',
  },
  {
    title: 'Project',
    summary: 'Fixed-scope design, build, review, or modernisation work with defined outcomes and handover.',
  },
  {
    title: 'Fractional',
    summary: 'Ongoing telecom, architecture, and software support for teams that need senior engineering capacity.',
  },
] as const;
