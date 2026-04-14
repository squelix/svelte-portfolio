import type { RoutesEnum } from '$lib/routing';
import type { LangEnum } from '$models/langs.enum';

const LASTMOD = new Date().toISOString().split('T')[0];

const getRoutePriority = (routeKey: string): string => {
	if (routeKey === 'legals-mentions') return '0.5';
	return '0.8';
};

const buildUrlPair = (origin: string, frPath: string, enPath: string, priority: string): string => {
	const frLoc = `${origin}${frPath}`;
	const enLoc = `${origin}${enPath}`;
	const entry = (loc: string): string =>
		[
			'<url>',
			`<loc>${loc}</loc>`,
			`<lastmod>${LASTMOD}</lastmod>`,
			'<changefreq>weekly</changefreq>',
			`<priority>${priority}</priority>`,
			`<xhtml:link rel="alternate" hreflang="fr" href="${frLoc}"/>`,
			`<xhtml:link rel="alternate" hreflang="en" href="${enLoc}"/>`,
			`<xhtml:link rel="alternate" hreflang="x-default" href="${frLoc}"/>`,
			'</url>'
		].join('\n');
	return `${entry(frLoc)}\n${entry(enLoc)}`;
};

export const getRobotsTxtString = (
	_langEnum: typeof LangEnum,
	_routesEnum: typeof RoutesEnum,
	_routes: Partial<Record<RoutesEnum, string>>,
	url: URL
): string => ['User-agent: *', 'Allow: /', `Sitemap: ${url.origin}/sitemap.xml`].join('\n');

export const getSitemapXmlString = (
	langEnum: typeof LangEnum,
	_routesEnum: typeof RoutesEnum,
	routes: Partial<Record<RoutesEnum, string>>,
	url: URL
): string => {
	const homePair = buildUrlPair(url.origin, `/${langEnum.fr_FR}`, `/${langEnum.en_GB}`, '1.0');

	const routePairs = Object.entries(routes)
		.filter((entry): entry is [string, string] => !!entry[1])
		.map(([routeKey, path]) =>
			buildUrlPair(
				url.origin,
				`/${langEnum.fr_FR}${path}`,
				`/${langEnum.en_GB}${path}`,
				getRoutePriority(routeKey)
			)
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
>
${homePair}
${routePairs}
</urlset>`;
};
