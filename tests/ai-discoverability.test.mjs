import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, test } from 'node:test';

const distDir = join(process.cwd(), 'dist');
const siteOrigin = 'https://commsdock.com';

const primaryRoutes = ['/', '/services', '/work', '/notes', '/about', '/contact'];
const htmlRoutes = [...primaryRoutes, '/notes/field-to-api-telecom-software'];
const knownStaticPaths = new Set([
  '/favicon.svg',
  '/og-default.svg',
  '/robots.txt',
  '/llms.txt',
  '/rss.xml',
  '/sitemap-index.xml',
  '/sitemap-0.xml',
]);

function fileForRoute(route) {
  return route === '/'
    ? join(distDir, 'index.html')
    : join(distDir, route.slice(1), 'index.html');
}

function readDistFile(...segments) {
  return readFileSync(join(distDir, ...segments), 'utf8');
}

function normalisePath(pathname) {
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*(['"])(.*?)\\1`, 'i'));
  return match?.[2];
}

function getInternalHrefs(html) {
  const hrefs = [];
  const linkPattern = /<a\b[^>]*\shref\s*=\s*(['"])(.*?)\1/gi;
  let match;

  while ((match = linkPattern.exec(html)) !== null) {
    hrefs.push(match[2]);
  }

  return hrefs;
}

function getJsonLdBlocks(html) {
  const blocks = [];
  const scriptPattern =
    /<script\b(?=[^>]*\btype\s*=\s*(['"])application\/ld\+json\1)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = scriptPattern.exec(html)) !== null) {
    blocks.push(match[2].trim());
  }

  return blocks;
}

function getJsonLdTypes(html) {
  return getJsonLdBlocks(html).map((block) => JSON.parse(block)['@type']);
}

function getMetaContent(html, attributeName, attributeValue) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];

  for (const tag of metaTags) {
    if (getAttribute(tag, attributeName) === attributeValue) {
      return getAttribute(tag, 'content');
    }
  }

  return undefined;
}

function assertKnownInternalHref(href, sourceRoute) {
  if (
    href === '' ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return;
  }

  let url;
  try {
    url = new URL(href, siteOrigin);
  } catch {
    assert.fail(`${sourceRoute} has an unparsable href: ${href}`);
  }

  if (url.origin !== siteOrigin) {
    return;
  }

  const pathname = normalisePath(url.pathname);
  const isKnownRoute = htmlRoutes.includes(pathname);
  const isKnownAsset =
    knownStaticPaths.has(pathname) ||
    pathname.startsWith('/_astro/');

  assert.ok(
    isKnownRoute || isKnownAsset,
    `${sourceRoute} links to unknown internal target: ${href}`,
  );
}

describe('AI discoverability output', () => {
  test('HTML routes exist in dist', () => {
    for (const route of htmlRoutes) {
      assert.ok(existsSync(fileForRoute(route)), `${route} should emit an index.html file`);
    }
  });

  test('HTML route internal links resolve to shipped routes or assets', () => {
    for (const route of htmlRoutes) {
      const html = readFileSync(fileForRoute(route), 'utf8');
      const hrefs = getInternalHrefs(html);

      assert.ok(hrefs.length > 0, `${route} should include links`);

      for (const href of hrefs) {
        assertKnownInternalHref(href, route);
      }
    }
  });

  test('HTML routes include parseable JSON-LD with context and type', () => {
    for (const route of htmlRoutes) {
      const html = readFileSync(fileForRoute(route), 'utf8');
      const jsonLdBlocks = getJsonLdBlocks(html);

      assert.ok(jsonLdBlocks.length > 0, `${route} should include JSON-LD`);

      for (const block of jsonLdBlocks) {
        const data = JSON.parse(block);

        assert.ok(data['@context'], `${route} JSON-LD should include @context`);
        assert.ok(data['@type'], `${route} JSON-LD should include @type`);
      }
    }
  });

  test('key routes expose specific JSON-LD schema types', () => {
    const expectedTypesByRoute = new Map([
      ['/about', 'AboutPage'],
      ['/contact', 'ContactPage'],
      ['/notes/field-to-api-telecom-software', 'Article'],
      ['/services', 'Service'],
    ]);

    for (const [route, expectedType] of expectedTypesByRoute) {
      const html = readFileSync(fileForRoute(route), 'utf8');
      const schemaTypes = getJsonLdTypes(html);

      assert.ok(
        schemaTypes.includes(expectedType),
        `${route} should include ${expectedType} JSON-LD`,
      );
    }
  });

  test('HTML routes expose OG and Twitter images for the default social image', () => {
    const expectedImage = `${siteOrigin}/og-default.svg`;

    for (const route of htmlRoutes) {
      const html = readFileSync(fileForRoute(route), 'utf8');

      assert.equal(getMetaContent(html, 'property', 'og:image'), expectedImage, `${route} should include og:image`);
      assert.equal(
        getMetaContent(html, 'name', 'twitter:image'),
        expectedImage,
        `${route} should include twitter:image`,
      );
    }

    assert.ok(existsSync(join(distDir, 'og-default.svg')), 'og-default.svg should exist in dist');
  });

  test('robots.txt permits major AI crawlers and advertises the sitemap', () => {
    const robots = readDistFile('robots.txt');

    assert.match(robots, /User-agent:\s*GPTBot/i);
    assert.match(robots, /User-agent:\s*ClaudeBot/i);
    assert.match(robots, /Sitemap:\s*https:\/\/commsdock\.com\/sitemap-index\.xml/i);
  });

  test('llms.txt includes primary machine-readable site links', () => {
    const llms = readDistFile('llms.txt');

    for (const route of primaryRoutes.filter((route) => route !== '/')) {
      assert.match(llms, new RegExp(`\\(${route}\\)|\\s${route}\\b`), `llms.txt should include ${route}`);
    }
  });

  test('site positioning stays focused on voice telecom and voice AI', () => {
    const combined = [
      ...htmlRoutes.map((route) => readFileSync(fileForRoute(route), 'utf8')),
      readDistFile('llms.txt'),
    ].join('\n');

    for (const expected of [
      'PBX',
      'Avaya IP Office',
      'Avaya Contact Center',
      'Webex',
      'BroadWorks',
      '3CX',
      'Yeastar Cloud PBX',
      'Voice AI',
      'AWS',
      'Amazon SES',
      'static egress IP',
      'VLAN',
      'Ubiquiti',
      'DrayTek',
      'TP-Link',
      'remote contractor',
      'telco vendors',
      'MSPs',
      'integrators',
    ]) {
      assert.match(combined, new RegExp(expected.replaceAll(' ', '\\s+'), 'i'), `site output should mention ${expected}`);
    }

    for (const obsolete of ['RF planning', 'microwave backhaul', 'antenna', 'last-mile', 'carrier-grade network']) {
      assert.doesNotMatch(combined, new RegExp(obsolete, 'i'), `site output should not mention ${obsolete}`);
    }

    assert.match(combined, /2026/, 'site output should include the company establishment year');
    assert.doesNotMatch(combined, /\b2014\b/, 'site output should not claim the company was established in 2014');
  });

  test('sitemap includes primary pages and the note detail page', () => {
    const sitemapIndex = readDistFile('sitemap-index.xml');
    const sitemap = readDistFile('sitemap-0.xml');

    assert.match(sitemapIndex, /https:\/\/commsdock\.com\/sitemap-0\.xml/);

    for (const route of htmlRoutes) {
      const url = route === '/' ? siteOrigin : `${siteOrigin}${route}`;
      assert.match(sitemap, new RegExp(`<loc>${url}\\/?<\\/loc>`), `sitemap should include ${url}`);
    }
  });

  test('RSS feed exists and includes the notes channel and note slug', () => {
    const rss = readDistFile('rss.xml');

    assert.match(rss, /CommsDock Notes/);
    assert.match(rss, /field-to-api-telecom-software/);
  });
});
