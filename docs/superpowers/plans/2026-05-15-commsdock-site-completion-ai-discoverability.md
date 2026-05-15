# CommsDock Site Completion and AI Discoverability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current hero-only Astro foundation into a crawlable, testable telecom-first business website that presents CommsDock as a telecommunications specialist who also builds software.

**Architecture:** Keep the site static and content-led in Astro. Add typed content modules for practice positioning, service pages, proof points, and notes so visible pages, JSON-LD, `llms.txt`, and tests share the same source material where practical.

**Tech Stack:** Astro 6, TypeScript, vanilla CSS design tokens, `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`, Node-based validation tests using built-in `node:test`.

---

## File Structure

- Modify `package.json`: add `test`, `test:ai`, and local validation dependencies only if required.
- Modify `README.md`: update Astro version, page map, validation commands, and AI-discoverability notes.
- Modify `astro.config.mjs`: preserve current site config and sitemap integration.
- Create `src/content/site.ts`: shared telecom-first business facts, navigation, service taxonomy, engagement models, and proof points.
- Create `src/utils/schema.ts`: JSON-LD builders for `Person`, `ProfessionalService`, `Service`, `OfferCatalog`, `ContactPage`, `AboutPage`, and `Article`.
- Modify `src/layouts/BaseLayout.astro`: consume schema arrays, add complete Twitter image metadata, and support page-specific structured data.
- Modify `src/components/SiteHeader.astro`: source navigation from shared content.
- Modify `src/components/SiteFooter.astro`: source navigation and contact details from shared content.
- Modify `src/components/Hero.astro`: adjust copy so telecom is primary and software is the enabling differentiator.
- Create `src/components/PageIntro.astro`: reusable page introduction block.
- Create `src/components/ServicePanel.astro`: reusable service/outcome block.
- Create `src/components/ProofStrip.astro`: reusable proof point strip.
- Create `src/components/ContactOptions.astro`: reusable contact/engagement block.
- Create `src/pages/services.astro`: telecom-first services page.
- Create `src/pages/work.astro`: sanitized proof/case-study page.
- Create `src/pages/about.astro`: practitioner and operating model page.
- Create `src/pages/contact.astro`: contact and engagement page.
- Create `src/pages/notes/index.astro`: notes index page.
- Create `src/pages/notes/field-to-api-telecom-software.mdx`: first note proving telecom/software perspective.
- Create `src/pages/rss.xml.ts`: RSS feed for notes.
- Update `public/llms.txt`: align all links and wording with shipped pages.
- Create `public/og-default.svg`: social preview asset that actually exists.
- Create `tests/ai-discoverability.test.mjs`: machine-readable validation for build output, internal links, schema, sitemap, robots, `llms.txt`, RSS, and social metadata.

## Content Direction

Primary positioning: **telecom-first specialist who also builds software**.

Core message:

> CommsDock helps teams design, modernise, and operate telecom networks, then builds the software, integrations, and AI-enabled tools needed to make those networks easier to deliver and run.

Avoid presenting telecom, cloud, software, and AI as equal unrelated service lanes. The hierarchy should be:

1. Telecommunications engineering
2. Network and systems architecture
3. Software and integration delivery for telecom/business operations
4. Practical AI features where they improve engineering workflows

## Task 1: Add Shared Business Content

**Files:**
- Create: `src/content/site.ts`

- [ ] **Step 1: Create the shared content module**

Add this file:

```ts
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
```

- [ ] **Step 2: Run type checking**

Run: `npm run check`

Expected: `0 errors`.

- [ ] **Step 3: Commit**

Run:

```bash
git add src/content/site.ts
git commit -m "feat: add shared CommsDock content model"
```

## Task 2: Add JSON-LD Builders

**Files:**
- Create: `src/utils/schema.ts`
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Create schema utility functions**

Add this file:

```ts
import { engagementModels, services, site } from '../content/site';

type SchemaObject = Record<string, unknown>;

export function personSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    url: site.url,
    jobTitle: 'Telecommunications Engineer, Solution Architect, and Developer',
    description: site.positioning,
    email: site.email,
    knowsAbout: [
      'Telecommunications engineering',
      'RF planning',
      'IP transport',
      'Network architecture',
      'Microwave backhaul',
      'Cloud architecture',
      'Solution architecture',
      'Software development',
      'AI integration',
    ],
  };
}

export function professionalServiceSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#practice`,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    provider: { '@id': `${site.url}/#person` },
    areaServed: site.areaServed,
    serviceType: services.map((service) => service.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CommsDock engagement models',
      itemListElement: engagementModels.map((model) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: model.title,
          description: model.summary,
        },
      })),
    },
  };
}

export function serviceSchema(service: (typeof services)[number]): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/services#${service.slug}`,
    name: service.title,
    description: service.summary,
    provider: { '@id': `${site.url}/#practice` },
    serviceType: service.title,
    areaServed: site.areaServed,
  };
}

export function webPageSchema(pathname: string, name: string, description: string): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.url}${pathname}#webpage`,
    url: `${site.url}${pathname}`,
    name,
    description,
    isPartOf: { '@id': `${site.url}/#website` },
  };
}

export function websiteSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
  };
}
```

- [ ] **Step 2: Modify `BaseLayout.astro` to accept page schemas**

Replace the inline schema constants with imports and add a `schema` prop:

```astro
---
import '../styles/tokens.css';
import '../styles/global.css';
import SiteHeader from '../components/SiteHeader.astro';
import SiteFooter from '../components/SiteFooter.astro';
import { personSchema, professionalServiceSchema, websiteSchema } from '../utils/schema';

interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>[];
}

const {
  title,
  description,
  canonical,
  ogImage = '/og-default.svg',
  noIndex = false,
  schema = [],
} = Astro.props;

const siteName = 'CommsDock';
const siteUrl = Astro.site?.toString().replace(/\/$/, '') ?? 'https://commsdock.com';
const fullTitle = title === siteName ? `${siteName} - Telecom-first engineering practice` : `${title} - ${siteName}`;
const canonicalUrl = canonical ?? new URL(Astro.url.pathname, siteUrl).toString();
const allSchema = [websiteSchema(), personSchema(), professionalServiceSchema(), ...schema];
---
```

Render `allSchema` in the document head:

```astro
{allSchema.map((item) => (
  <script type="application/ld+json" set:html={JSON.stringify(item)} is:inline />
))}
```

Add Twitter image metadata:

```astro
<meta name="twitter:image" content={new URL(ogImage, siteUrl).toString()} />
```

- [ ] **Step 3: Run type checking**

Run: `npm run check`

Expected: `0 errors`.

- [ ] **Step 4: Commit**

Run:

```bash
git add src/utils/schema.ts src/layouts/BaseLayout.astro
git commit -m "feat: add structured data utilities"
```

## Task 3: Update Shared Header, Footer, Hero, and OG Asset

**Files:**
- Modify: `src/components/SiteHeader.astro`
- Modify: `src/components/SiteFooter.astro`
- Modify: `src/components/Hero.astro`
- Create: `public/og-default.svg`
- Modify: `README.md`

- [ ] **Step 1: Source navigation from shared content**

In `SiteHeader.astro`, import `navItems`:

```astro
---
import { navItems } from '../content/site';

const pathname = Astro.url.pathname.replace(/\/$/, '') || '/';
const isActive = (href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
---
```

Replace `nav.map` with `navItems.map`.

- [ ] **Step 2: Update hero copy**

In `Hero.astro`, set the visible hero message to:

```astro
<p class="eyebrow">
  <span class="accent-char">//</span>Telecom-first specialist - software-capable delivery
</p>
<h1 class="headline">
  Networks first<span class="accent-char">.</span><br />Software where it matters.
</h1>
<p class="subhead">
  CommsDock designs telecom networks, architects the systems around them, and builds the software that makes delivery and operations simpler.
</p>
```

Keep the `Book a consult` and `Read the notes` CTAs unchanged.

- [ ] **Step 3: Create the social preview SVG**

Add `public/og-default.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0f"/>
  <circle cx="210" cy="130" r="260" fill="#6366f1" opacity="0.22"/>
  <circle cx="940" cy="140" r="300" fill="#8b5cf6" opacity="0.18"/>
  <circle cx="720" cy="590" r="260" fill="#22d3ee" opacity="0.16"/>
  <g opacity="0.16" stroke="#ffffff">
    <path d="M0 96h1200M0 192h1200M0 288h1200M0 384h1200M0 480h1200M0 576h1200"/>
    <path d="M96 0v630M192 0v630M288 0v630M384 0v630M480 0v630M576 0v630M672 0v630M768 0v630M864 0v630M960 0v630M1056 0v630"/>
  </g>
  <g transform="translate(86 84)">
    <rect x="0" y="76" width="104" height="24" rx="4" fill="#ececf1" opacity="0.86"/>
    <rect x="16" y="40" width="72" height="24" rx="4" fill="#ececf1" opacity="0.56"/>
    <rect x="32" y="4" width="40" height="24" rx="4" fill="#22d3ee"/>
  </g>
  <text x="86" y="270" fill="#ececf1" font-family="Inter, Arial, sans-serif" font-size="88" font-weight="800">CommsDock</text>
  <text x="90" y="350" fill="#b8b8c2" font-family="Inter, Arial, sans-serif" font-size="36" font-weight="500">Telecom-first engineering practice</text>
  <text x="90" y="410" fill="#22d3ee" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="600">Networks first. Software where it matters.</text>
</svg>
```

- [ ] **Step 4: Update README stack line**

Change `Astro 5 + MDX` to `Astro 6 + MDX`.

- [ ] **Step 5: Run build**

Run: `npm run build`

Expected: build succeeds and `dist/index.html` contains `/og-default.svg`.

- [ ] **Step 6: Commit**

Run:

```bash
git add src/components/SiteHeader.astro src/components/SiteFooter.astro src/components/Hero.astro public/og-default.svg README.md
git commit -m "feat: sharpen telecom-first site positioning"
```

## Task 4: Build Core Pages

**Files:**
- Create: `src/components/PageIntro.astro`
- Create: `src/components/ServicePanel.astro`
- Create: `src/components/ProofStrip.astro`
- Create: `src/components/ContactOptions.astro`
- Create: `src/pages/services.astro`
- Create: `src/pages/work.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/contact.astro`

- [ ] **Step 1: Create `PageIntro.astro`**

```astro
---
interface Props {
  label?: string;
  title: string;
  summary: string;
}

const { label, title, summary } = Astro.props;
---

<section class="page-intro container">
  {label && <p class="label">{label}</p>}
  <h1>{title}</h1>
  <p>{summary}</p>
</section>

<style>
  .page-intro {
    padding-block: 96px 56px;
  }
  .label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
  }
  h1 {
    max-width: 900px;
    font-family: var(--font-display);
    font-size: clamp(44px, 5.6vw, 76px);
    line-height: 0.98;
    letter-spacing: -0.04em;
    margin-bottom: 24px;
  }
  p:last-child {
    max-width: 760px;
    color: var(--text-2);
    font-size: 18px;
    line-height: 1.6;
  }
</style>
```

- [ ] **Step 2: Create `ServicePanel.astro`**

```astro
---
interface Props {
  title: string;
  summary: string;
  outcomes: readonly string[];
  capabilities: readonly string[];
}

const { title, summary, outcomes, capabilities } = Astro.props;
---

<article class="service-panel">
  <div>
    <h2>{title}</h2>
    <p>{summary}</p>
  </div>
  <div class="lists">
    <section>
      <h3>Outcomes</h3>
      <ul>{outcomes.map((item) => <li>{item}</li>)}</ul>
    </section>
    <section>
      <h3>Capabilities</h3>
      <ul>{capabilities.map((item) => <li>{item}</li>)}</ul>
    </section>
  </div>
</article>

<style>
  .service-panel {
    display: grid;
    grid-template-columns: 0.95fr 1.25fr;
    gap: 56px;
    padding: 38px 0;
    border-top: 1px solid var(--border);
  }
  h2 {
    font-family: var(--font-display);
    font-size: 30px;
    line-height: 1.08;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }
  p {
    color: var(--text-2);
    line-height: 1.65;
    max-width: 520px;
  }
  .lists {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  h3 {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 14px;
  }
  ul {
    display: grid;
    gap: 10px;
    list-style: none;
  }
  li {
    color: var(--text-2);
    line-height: 1.5;
  }
  li::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 10px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent-glow);
    vertical-align: 0.1em;
  }
  @media (max-width: 900px) {
    .service-panel,
    .lists {
      grid-template-columns: 1fr;
    }
  }
</style>
```

- [ ] **Step 3: Create `ProofStrip.astro`**

```astro
---
import { proofPoints } from '../content/site';
---

<section class="proof-strip container" aria-label="CommsDock proof points">
  {proofPoints.map((point) => (
    <div>
      <span>{point.label}</span>
      <strong>{point.value}</strong>
    </div>
  ))}
</section>

<style>
  .proof-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    border-block: 1px solid var(--border);
    margin-block: 32px 72px;
  }
  div {
    padding: 24px;
    border-left: 1px solid var(--border);
  }
  div:first-child {
    border-left: 0;
  }
  span {
    display: block;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  strong {
    color: var(--text);
    font-size: 22px;
  }
  @media (max-width: 720px) {
    .proof-strip {
      grid-template-columns: 1fr 1fr;
    }
    div {
      border-left: 0;
    }
  }
</style>
```

- [ ] **Step 4: Create `ContactOptions.astro`**

```astro
---
import { engagementModels, site } from '../content/site';
---

<section class="contact-options container">
  <div class="copy">
    <h2>Start with the network problem.</h2>
    <p>
      Send the context, constraints, and outcome you need. CommsDock will respond within one business day with the right next step.
    </p>
    <a href={`mailto:${site.email}`} class="email">{site.email}</a>
  </div>
  <div class="models">
    {engagementModels.map((model) => (
      <article>
        <h3>{model.title}</h3>
        <p>{model.summary}</p>
      </article>
    ))}
  </div>
</section>

<style>
  .contact-options {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 56px;
    padding-block: 56px 96px;
  }
  h2 {
    font-family: var(--font-display);
    font-size: 36px;
    letter-spacing: -0.025em;
    margin-bottom: 14px;
  }
  .copy p {
    color: var(--text-2);
    line-height: 1.65;
    margin-bottom: 24px;
  }
  .email {
    color: var(--accent);
    font-family: var(--font-mono);
  }
  .models {
    display: grid;
    gap: 18px;
  }
  article {
    border-top: 1px solid var(--border);
    padding-top: 18px;
  }
  h3 {
    margin-bottom: 8px;
  }
  article p {
    color: var(--text-2);
    line-height: 1.6;
  }
  @media (max-width: 900px) {
    .contact-options {
      grid-template-columns: 1fr;
    }
  }
</style>
```

- [ ] **Step 5: Create `services.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageIntro from '../components/PageIntro.astro';
import ServicePanel from '../components/ServicePanel.astro';
import ContactOptions from '../components/ContactOptions.astro';
import { services } from '../content/site';
import { serviceSchema, webPageSchema } from '../utils/schema';

const description =
  'Telecom-first services from CommsDock: telecommunications engineering, network systems architecture, software for network operations, and practical AI workflows.';
---

<BaseLayout
  title="Services"
  description={description}
  schema={[webPageSchema('/services', 'CommsDock Services', description), ...services.map(serviceSchema)]}
>
  <PageIntro
    label="Services"
    title="Telecom engineering first. Software where the network needs it."
    summary="CommsDock helps teams design, modernise, and operate telecommunications systems, then builds the integrations and tools that remove delivery friction."
  />
  <section class="container services-list">
    {services.map((service) => <ServicePanel {...service} />)}
  </section>
  <ContactOptions />
</BaseLayout>

<style>
  .services-list {
    padding-bottom: 32px;
  }
</style>
```

- [ ] **Step 6: Create `work.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageIntro from '../components/PageIntro.astro';
import ProofStrip from '../components/ProofStrip.astro';
import ContactOptions from '../components/ContactOptions.astro';
import { webPageSchema } from '../utils/schema';

const description =
  'Sanitised CommsDock work themes across telecom network delivery, architecture, software integration, and AI-assisted engineering workflows.';
const examples = [
  {
    title: 'Network rollout recovery',
    body: 'Clarified transport design, field constraints, and vendor responsibilities so a delayed network program could move from stalled decisions to buildable work packages.',
  },
  {
    title: 'Operations tooling',
    body: 'Built software that connected network, field, and business data so operational teams could reduce manual reconciliation and find delivery blockers earlier.',
  },
  {
    title: 'Architecture due diligence',
    body: 'Reviewed telecom and cloud architecture for delivery risk, integration complexity, observability gaps, and practical modernisation paths.',
  },
];
---

<BaseLayout title="Work" description={description} schema={[webPageSchema('/work', 'CommsDock Work', description)]}>
  <PageIntro
    label="Work"
    title="Proof themes from telecom, architecture, and operational software."
    summary="Client details stay confidential, but the work pattern is consistent: make the network reality clear, reduce delivery ambiguity, and build the tools needed to operate well."
  />
  <ProofStrip />
  <section class="container examples">
    {examples.map((example) => (
      <article>
        <h2>{example.title}</h2>
        <p>{example.body}</p>
      </article>
    ))}
  </section>
  <ContactOptions />
</BaseLayout>

<style>
  .examples {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding-bottom: 40px;
  }
  article {
    border-top: 1px solid var(--border);
    padding-top: 22px;
  }
  h2 {
    font-family: var(--font-display);
    font-size: 25px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
  p {
    color: var(--text-2);
    line-height: 1.65;
  }
  @media (max-width: 900px) {
    .examples {
      grid-template-columns: 1fr;
    }
  }
</style>
```

- [ ] **Step 7: Create `about.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageIntro from '../components/PageIntro.astro';
import ContactOptions from '../components/ContactOptions.astro';
import { webPageSchema } from '../utils/schema';

const description =
  'About CommsDock: a solo telecom-first engineering practice combining network engineering, solution architecture, and software delivery.';
---

<BaseLayout title="About" description={description} schema={[webPageSchema('/about', 'About CommsDock', description)]}>
  <PageIntro
    label="About"
    title="One engineer across the network, the architecture, and the code."
    summary="CommsDock is built around a simple operating model: the person who scopes the work is the person who owns delivery."
  />
  <section class="container about-body">
    <div>
      <h2>Telecom first</h2>
      <p>
        The practice starts from telecommunications engineering: RF, transport, backhaul, IP networks, field realities, vendor coordination, and operations.
      </p>
    </div>
    <div>
      <h2>Software capable</h2>
      <p>
        When the problem needs tooling, integration, dashboards, APIs, or AI-assisted workflows, CommsDock can build the software instead of handing the context to another vendor.
      </p>
    </div>
    <div>
      <h2>Delivery oriented</h2>
      <p>
        The output is not abstract strategy. It is buildable architecture, clearer decisions, working software, and operational handover.
      </p>
    </div>
  </section>
  <ContactOptions />
</BaseLayout>

<style>
  .about-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding-bottom: 48px;
  }
  h2 {
    font-family: var(--font-display);
    font-size: 26px;
    margin-bottom: 12px;
  }
  p {
    color: var(--text-2);
    line-height: 1.65;
  }
  @media (max-width: 900px) {
    .about-body {
      grid-template-columns: 1fr;
    }
  }
</style>
```

- [ ] **Step 8: Create `contact.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageIntro from '../components/PageIntro.astro';
import ContactOptions from '../components/ContactOptions.astro';
import { site } from '../content/site';
import { webPageSchema } from '../utils/schema';

const description =
  'Contact CommsDock for telecom engineering, network architecture, software integration, and AI-assisted engineering workflow engagements.';
---

<BaseLayout title="Contact" description={description} schema={[webPageSchema('/contact', 'Contact CommsDock', description)]}>
  <PageIntro
    label="Contact"
    title="Bring the network context. Leave with a clearer next move."
    summary={`Email ${site.email} with the problem, location, constraints, and timeline. CommsDock responds within one business day.`}
  />
  <ContactOptions />
</BaseLayout>
```

- [ ] **Step 9: Run build**

Run: `npm run build`

Expected: build succeeds and static routes include `/services`, `/work`, `/about`, and `/contact`.

- [ ] **Step 10: Commit**

Run:

```bash
git add src/components src/pages src/content src/utils
git commit -m "feat: add core business pages"
```

## Task 5: Add Notes and RSS

**Files:**
- Create: `src/pages/notes/index.astro`
- Create: `src/pages/notes/field-to-api-telecom-software.mdx`
- Create: `src/pages/rss.xml.ts`

- [ ] **Step 1: Create the first note**

```mdx
---
title: Field to API: why telecom software starts with the network reality
description: Telecom software works better when it starts from field constraints, network topology, and operational handover instead of abstract dashboards.
pubDate: 2026-05-15
---

# Field to API: why telecom software starts with the network reality

Software for network operations should not begin with a dashboard. It should begin with the field reality: what has been built, what is blocked, what is measurable, and what the operations team needs to trust.

Telecommunications work creates unusual software constraints. Data comes from surveys, designs, vendors, tickets, probes, spreadsheets, cabinets, links, towers, routes, and people. If those sources are treated as generic business data, the resulting tools often look polished but fail during delivery.

CommsDock approaches software as an extension of network engineering. The goal is to reduce ambiguity, connect systems that should already agree, and make operational state easier to see.

That can mean APIs, internal tools, AI-assisted retrieval, observability workflows, or small automation surfaces. The useful question is not "can this be automated?" The useful question is "does this make the network easier to deliver, operate, or explain?"
```

- [ ] **Step 2: Create the notes index**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PageIntro from '../../components/PageIntro.astro';
import { webPageSchema } from '../../utils/schema';

const description = 'Engineering notes from CommsDock on telecom networks, architecture, operational software, and practical AI workflows.';
const notes = [
  {
    href: '/notes/field-to-api-telecom-software',
    title: 'Field to API: why telecom software starts with the network reality',
    description:
      'Telecom software works better when it starts from field constraints, network topology, and operational handover.',
    date: '2026-05-15',
  },
];
---

<BaseLayout title="Notes" description={description} schema={[webPageSchema('/notes', 'CommsDock Notes', description)]}>
  <PageIntro
    label="Notes"
    title="Field notes on networks, architecture, and software."
    summary="Short technical notes from the intersection of telecom delivery, systems architecture, and the software that keeps operations moving."
  />
  <section class="container notes-list">
    {notes.map((note) => (
      <article>
        <time datetime={note.date}>{note.date}</time>
        <h2><a href={note.href}>{note.title}</a></h2>
        <p>{note.description}</p>
      </article>
    ))}
  </section>
</BaseLayout>

<style>
  .notes-list {
    display: grid;
    gap: 24px;
    padding-bottom: 96px;
  }
  article {
    border-top: 1px solid var(--border);
    padding-top: 24px;
  }
  time {
    display: block;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 10px;
  }
  h2 {
    font-family: var(--font-display);
    font-size: 28px;
    margin-bottom: 10px;
  }
  p {
    color: var(--text-2);
    line-height: 1.65;
  }
</style>
```

- [ ] **Step 3: Create RSS route**

```ts
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export function GET(context: APIContext) {
  return rss({
    title: 'CommsDock Notes',
    description: 'Telecom-first engineering notes on networks, architecture, software, and AI workflows.',
    site: context.site ?? 'https://commsdock.com',
    items: [
      {
        title: 'Field to API: why telecom software starts with the network reality',
        description:
          'Telecom software works better when it starts from field constraints, network topology, and operational handover.',
        pubDate: new Date('2026-05-15T00:00:00+10:00'),
        link: '/notes/field-to-api-telecom-software',
      },
    ],
  });
}
```

- [ ] **Step 4: Run build**

Run: `npm run build`

Expected: build succeeds and emits `/notes/index.html`, `/notes/field-to-api-telecom-software/index.html`, and `/rss.xml`.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/pages/notes src/pages/rss.xml.ts
git commit -m "feat: add engineering notes and rss"
```

## Task 6: Update `llms.txt`

**Files:**
- Modify: `public/llms.txt`

- [ ] **Step 1: Rewrite the opening positioning**

Use this opening:

```markdown
# CommsDock

> Telecom-first engineering practice for network architecture, field-to-cloud systems, and the software needed to operate them.

CommsDock is the consulting practice of a telecommunications engineer who also works as a developer and solution architect. The practice helps teams design, modernise, and operate telecommunications systems, then builds the software, integrations, and AI-assisted workflows needed to reduce delivery and operations friction.
```

- [ ] **Step 2: Ensure all listed links exist**

The important links section must include only these shipped routes:

```markdown
## Important links

- [Services](/services): Telecommunications engineering, network systems architecture, software for network operations, and AI-assisted engineering workflows.
- [Work](/work): Sanitised proof themes and delivery patterns.
- [Notes](/notes): Engineering notes, field reports, and architecture writing.
- [About](/about): Background and how the practice operates.
- [Contact](/contact): Engagement options and direct email.
```

- [ ] **Step 3: Run build**

Run: `npm run build`

Expected: `dist/llms.txt` contains `/services`, `/work`, `/notes`, `/about`, and `/contact`.

- [ ] **Step 4: Commit**

Run:

```bash
git add public/llms.txt
git commit -m "docs: align llms summary with shipped site"
```

## Task 7: Add Machine-Readable AI Discoverability Tests

**Files:**
- Modify: `package.json`
- Create: `tests/ai-discoverability.test.mjs`

- [ ] **Step 1: Add test scripts to `package.json`**

Add:

```json
"test": "npm run build && node --test tests/*.test.mjs",
"test:ai": "npm run build && node --test tests/ai-discoverability.test.mjs"
```

- [ ] **Step 2: Create the test file**

```js
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it } from 'node:test';

const root = process.cwd();
const dist = join(root, 'dist');

function readDist(path) {
  return readFileSync(join(dist, path), 'utf8');
}

function pagePath(route) {
  if (route === '/') return 'index.html';
  return join(route.replace(/^\//, ''), 'index.html');
}

function htmlFor(route) {
  return readDist(pagePath(route));
}

const routes = ['/', '/services', '/work', '/notes', '/about', '/contact'];

describe('AI discoverability build output', () => {
  it('emits all primary pages', () => {
    for (const route of routes) {
      assert.equal(existsSync(join(dist, pagePath(route))), true, `${route} should be built`);
    }
  });

  it('does not ship broken primary internal links', () => {
    const knownRoutes = new Set([...routes, '/notes/field-to-api-telecom-software', '/rss.xml', '/llms.txt']);
    for (const route of routes) {
      const html = htmlFor(route);
      const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((match) => match[1]);
      for (const href of hrefs) {
        assert.equal(knownRoutes.has(href), true, `${route} links to unknown route ${href}`);
      }
    }
  });

  it('includes valid JSON-LD on every primary page', () => {
    for (const route of routes) {
      const html = htmlFor(route);
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      assert.ok(scripts.length >= 3, `${route} should include base and page JSON-LD`);
      for (const script of scripts) {
        const parsed = JSON.parse(script[1]);
        assert.ok(parsed['@context'], `${route} schema should include @context`);
        assert.ok(parsed['@type'], `${route} schema should include @type`);
      }
    }
  });

  it('uses existing social preview metadata', () => {
    const html = htmlFor('/');
    assert.match(html, /property="og:image" content="https:\/\/commsdock\.com\/og-default\.svg"/);
    assert.match(html, /name="twitter:image" content="https:\/\/commsdock\.com\/og-default\.svg"/);
    assert.equal(existsSync(join(dist, 'og-default.svg')), true);
  });

  it('publishes crawler-friendly robots and llms files', () => {
    const robots = readDist('robots.txt');
    const llms = readDist('llms.txt');
    assert.match(robots, /User-agent: GPTBot/);
    assert.match(robots, /User-agent: ClaudeBot/);
    assert.match(robots, /Sitemap: https:\/\/commsdock\.com\/sitemap-index\.xml/);
    for (const route of routes.slice(1)) {
      assert.match(llms, new RegExp(`\\](${route.replace('/', '\\/')})`));
    }
  });

  it('includes all primary pages in sitemap output', () => {
    const sitemap = readDist('sitemap-0.xml');
    for (const route of routes) {
      const expected = route === '/' ? 'https://commsdock.com' : `https://commsdock.com${route}`;
      assert.match(sitemap, new RegExp(expected.replaceAll('/', '\\/')));
    }
  });

  it('emits an RSS feed for notes', () => {
    const rss = readDist('rss.xml');
    assert.match(rss, /<title><!\[CDATA\[CommsDock Notes\]\]><\/title>/);
    assert.match(rss, /field-to-api-telecom-software/);
  });
});
```

- [ ] **Step 3: Run AI tests**

Run: `npm run test:ai`

Expected: all tests pass.

- [ ] **Step 4: Commit**

Run:

```bash
git add package.json package-lock.json tests/ai-discoverability.test.mjs
git commit -m "test: add ai discoverability validation"
```

## Task 8: Final Verification and Push

**Files:**
- Modify only files required by failures found in verification.

- [ ] **Step 1: Run full checks**

Run:

```bash
npm run check
npm run test
```

Expected: both commands pass.

- [ ] **Step 2: Inspect build route count**

Run: `npm run build`

Expected routes:

- `/`
- `/services`
- `/work`
- `/notes`
- `/notes/field-to-api-telecom-software`
- `/about`
- `/contact`
- `/rss.xml`

- [ ] **Step 3: Review machine-readable surfaces**

Open these generated files and confirm content matches telecom-first positioning:

- `dist/llms.txt`
- `dist/sitemap-0.xml`
- `dist/index.html`
- `dist/services/index.html`

- [ ] **Step 4: Commit any verification fixes**

If verification changes files, run:

```bash
git add -A
git commit -m "fix: complete site verification"
```

If no files changed, skip this step.

- [ ] **Step 5: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the completed first release.

## Self-Review

Spec coverage:

- Telecom-first positioning is implemented in shared content, hero copy, services, about, work, contact, notes, and `llms.txt`.
- Missing routes from the current foundation are covered by Task 4 and Task 5.
- Machine-readable validation is covered by Task 7.
- Existing OG metadata gap is covered by Task 3.
- Existing README Astro version mismatch is covered by Task 3.

Placeholder scan:

- No `TBD`, `TODO`, or unbounded "add tests later" items remain.
- Code snippets are provided for created files and key modifications.

Scope check:

- This plan is focused on first-release site completion and AI discoverability. It deliberately excludes deployment provider setup, analytics, appointment scheduling integration, and advanced visual redesign.
