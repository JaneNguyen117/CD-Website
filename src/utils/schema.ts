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
