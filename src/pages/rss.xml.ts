import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { notes } from '../content/notes';

export function GET(context: APIContext) {
  return rss({
    title: 'CommsDock Notes',
    description: 'Telecom-first engineering notes on networks, architecture, software, and AI workflows.',
    site: context.site ?? 'https://commsdock.com',
    items: notes.map((note) => ({
      title: note.title,
      description: note.description,
      pubDate: new Date(`${note.date}T00:00:00+10:00`),
      link: note.href,
    })),
  });
}
