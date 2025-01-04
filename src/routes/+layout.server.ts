import type { LayoutServerLoad } from './$types';

const headers = {
	'Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'Vercel-CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'CDN-Cache-Control': 's-maxage=86400, stale-while-revalidate=86400',
	'X-DNS-Prefetch-Control': 'on'
};

export const load: LayoutServerLoad = ({ setHeaders, request, url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	for (const [key, value] of Object.entries(headers)) {
		if (!request.headers.has(key)) {
			setHeaders({ [key]: value });
		}
	}

	return { route: pathname.replace(new RegExp(`^/${lang}`), ''), lang };
};
