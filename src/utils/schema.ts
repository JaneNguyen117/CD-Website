import { engagementModels, services, site } from '../content/site';

type SchemaObject = Record<string, unknown>;
type ArticleSchemaInput = {
  pathname: string;
  title: string;
  description: string;
  pubDate: string | Date;
};

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
      'Voice telecommunications engineering',
      'PBX systems',
      'NEC PBX',
      'Panasonic PBX',
      'Avaya IP Office',
      'Avaya Contact Center',
      'Webex Calling',
      'BroadWorks call centre',
      '3CX',
      'Yeastar Cloud PBX',
      'SIP trunking',
      'Cloud PBX migration',
      'Contact centre architecture',
      'AWS EC2',
      'AWS security groups',
      'Amazon SES',
      'Static egress IP design',
      'VLAN design',
      'Ubiquiti Wi-Fi',
      'DrayTek routers',
      'TP-Link routers',
      'WAN routing',
      'Voice AI systems',
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

function webpageFields(pathname: string, name: string, description: string): SchemaObject {
  return {
    '@id': `${site.url}${pathname}#webpage`,
    url: `${site.url}${pathname}`,
    name,
    description,
    isPartOf: { '@id': `${site.url}/#website` },
    provider: { '@id': `${site.url}/#practice` },
  };
}

export function webPageSchema(pathname: string, name: string, description: string): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    ...webpageFields(pathname, name, description),
  };
}

export function aboutPageSchema(pathname: string, name: string, description: string): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    ...webpageFields(pathname, name, description),
  };
}

export function contactPageSchema(pathname: string, name: string, description: string): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    ...webpageFields(pathname, name, description),
  };
}

export function articleSchema({
  pathname,
  title,
  description,
  pubDate,
}: ArticleSchemaInput): SchemaObject {
  const datePublished = pubDate instanceof Date ? pubDate.toISOString() : pubDate;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${site.url}${pathname}#article`,
    url: `${site.url}${pathname}`,
    headline: title,
    name: title,
    description,
    datePublished,
    author: { '@id': `${site.url}/#person` },
    provider: { '@id': `${site.url}/#practice` },
    mainEntityOfPage: { '@id': `${site.url}${pathname}#webpage` },
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
