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
