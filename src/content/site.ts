export const site = {
  name: 'CommsDock',
  url: 'https://commsdock.com',
  email: 'info@commsdock.com',
  description:
    'Voice telecom engineering practice for PBX, contact centre, cloud, network infrastructure, voice AI systems, and remote senior contractor support.',
  positioning:
    'Voice telecommunications specialist who designs, migrates, integrates, and automates business calling platforms and the cloud/network infrastructure around them, with remote senior delivery support for vendors and technical teams.',
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
  { label: 'Company established', value: '2026' },
  { label: 'Voice platforms', value: 'PBX, CCaaS, UC' },
  { label: 'Infra', value: 'AWS, VLAN, WAN' },
  { label: 'AI stack', value: 'Voice-native' },
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
    slug: 'voice-network-cloud-infrastructure',
    title: 'Voice, network, and cloud infrastructure',
    summary:
      'Infrastructure work around voice platforms: AWS-hosted services, SIP-ready networks, VLANs, Wi-Fi, routers, SES, and static egress IP patterns.',
    outcomes: [
      'Voice-ready LAN, WAN, Wi-Fi, and cloud foundations',
      'Single public egress IP patterns for customers with multiple WAN links and allowlisted outbound connections',
      'Practical migration and coexistence plans across legacy PBX, cloud PBX, UC, and call centre platforms',
    ],
    capabilities: [
      'AWS EC2 on Ubuntu',
      'AWS security groups',
      'Amazon SES',
      'Static egress IP design',
      'VLAN design',
      'Ubiquiti Wi-Fi and AP configuration',
      'DrayTek router configuration',
      'TP-Link router configuration',
      'SIP trunking and call flow design',
      'Voice-ready LAN/WAN configuration',
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
    summary: 'Ongoing voice telecom, architecture, and software support for teams that need senior engineering capacity without a permanent hire.',
  },
  {
    title: 'Remote contractor',
    summary: 'Senior remote delivery support for telco vendors, MSPs, integrators, and project teams that need specific PBX, contact centre, cloud, network, or voice AI expertise.',
  },
] as const;

export const consultReasons = [
  'A PBX, contact centre, UC, or call-flow issue needs senior voice context',
  'A migration, cutover, or modernisation project needs practical delivery support',
  'A telco vendor, MSP, or integrator needs remote contractor capacity for a specialist workstream',
  'A voice AI idea needs to be checked against the real telephony, routing, escalation, and operations environment',
] as const;

export const consultInputs = [
  'Current platform: NEC, Panasonic, Avaya IP Office, Avaya Contact Center, Webex, BroadWorks, 3CX, Yeastar, or other',
  'Problem shape: call flow, routing, queues, SIP, cloud, network, integration, reporting, or AI workflow',
  'Constraints: timeline, users/sites, carriers, WAN links, compliance, access, vendor dependencies, and known risks',
  'Preferred engagement: discovery, fixed project, fractional support, or remote contractor delivery',
] as const;

export const consultOutcomes = [
  'A clear next move and whether the work suits advisory, review, build, migration, or contractor support',
  'Likely technical risks across platform, call flow, network, cloud, integration, and voice AI layers',
  'A practical way to scope the engagement so vendors, customers, and delivery teams know who owns what',
] as const;
