import type { RoutesEnum } from '$lib/routing';
import type { LangEnum } from '$models/langs.enum';

const getRoutes = (
	langEnum: typeof LangEnum,
	routesEnum: typeof RoutesEnum,
	routes: Partial<Record<RoutesEnum, string>>
): string[] =>
	Object.values(langEnum).flatMap((lang) =>
		Object.values(routesEnum)
			.filter((route) => route !== routesEnum.Home)
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			.map((route) => {
				const pathRoute = routes[route];

				return pathRoute ? `/${lang}${pathRoute}` : undefined;
			})
			.filter((route): route is string => route !== undefined)
	);

export const getRobotsTxtString = (
	langEnum: typeof LangEnum,
	routesEnum: typeof RoutesEnum,
	routes: Partial<Record<RoutesEnum, string>>,
	url: URL
): string =>
	[
		'User-agent: *',
		...[
			'/',
			`/${langEnum.fr_FR}`,
			`/${langEnum.en_GB}`,
			...getRoutes(langEnum, routesEnum, routes)
		].map((route) => `Allow: ${route}`),
		`Sitemap: ${url.origin}/sitemap.xml`
	].join('\n');

export const getSitemapXmlString = (
	langEnum: typeof LangEnum,
	routesEnum: typeof RoutesEnum,
	routes: Partial<Record<RoutesEnum, string>>,
	url: URL
): string => {
	const routesStr = [
		`/${langEnum.fr_FR}`,
		`/${langEnum.en_GB}`,
		...getRoutes(langEnum, routesEnum, routes)
	]
		.map(
			(route) =>
				`<url>\n<loc>${url.origin}${route}</loc>\n<changefreq>weekly</changefreq>\n<priority>1.0</priority>\n</url>`
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
		${routesStr}
	</urlset>`.trim();
};
