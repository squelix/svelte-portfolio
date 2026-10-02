import type { RoutesEnum } from '#lib/routing.js';
import type { LangEnum } from '#models/langs.enum.js';
import type { Profile } from '#models/profile.js';

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
): string =>
	[
		'User-agent: *',
		'Allow: /',
		`Sitemap: ${url.origin}/sitemap.xml`,
		'Content-Signal: ai-train=no, search=yes, ai-input=yes'
	].join('\n');

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

export type PageMeta = { title: string; description?: string };

const LLMS_DEFAULT_NAME = 'Mickaël Depardon';

const LLMS_PAGE_SECTIONS: Record<string, string> = {
	en: 'Pages (English)',
	fr: 'Pages (Français)'
};

// "Biography - Portfolio and CV of Mickaël Depardon" -> "Biography"
const cleanTitle = (title: string): string => title.split(' - ')[0].trim();

// "Portfolio and CV of Mickaël Depardon. Page presenting my biography." -> "Page presenting my biography."
const cleanDescription = (description = ''): string =>
	description.replace(/^[^.]+\.\s*/, '').trim() || description.trim();

// A bio line starting with "#" must not become a second H1.
const sanitizeLine = (line: string): string => line.trim().replace(/^#+\s*/, '');

const toLlmsLink = (url: string, meta: PageMeta): string => {
	const description = cleanDescription(meta.description);
	const link = `- [${cleanTitle(meta.title)}](${url})`;
	return description ? `${link}: ${description}` : link;
};

export const getLlmsTxtString = (
	langEnum: typeof LangEnum,
	routes: Partial<Record<RoutesEnum, string>>,
	getPageMeta: (lang: string, routeKey: string) => PageMeta | undefined,
	profile: Profile | undefined,
	url: URL
): string => {
	const name = profile?.name ?? LLMS_DEFAULT_NAME;
	const summary = [profile?.job, 'Bilingual (French / English) portfolio and CV.']
		.filter(Boolean)
		.join('. ');
	const bio = (profile?.biographyLines ?? []).map(sanitizeLine).filter(Boolean).join(' ');

	const pagesSection = (lang: string): string[] => {
		const links: string[] = [];
		const home = getPageMeta(lang, 'home');
		if (home?.title) links.push(toLlmsLink(`${url.origin}/${lang}`, home));

		Object.entries(routes)
			.filter((entry): entry is [string, string] => !!entry[1])
			.forEach(([routeKey, path]) => {
				const meta = getPageMeta(lang, routeKey);
				if (meta?.title) links.push(toLlmsLink(`${url.origin}/${lang}${path}`, meta));
			});

		return [`## ${LLMS_PAGE_SECTIONS[lang] ?? lang}`, '', ...links, ''];
	};

	const socials = (profile?.socialNetworks ?? [])
		.filter((social) => !!social.url)
		.map((social) => `- [${social.title}](${social.url})`);

	return [
		`# ${name}`,
		'',
		`> ${summary}`,
		'',
		...(bio ? [bio, ''] : []),
		...pagesSection(langEnum.en_GB),
		...pagesSection(langEnum.fr_FR),
		...(socials.length ? ['## Profiles', '', ...socials, ''] : []),
		'## Optional',
		'',
		`- [Sitemap](${url.origin}/sitemap.xml)`,
		''
	].join('\n');
};
