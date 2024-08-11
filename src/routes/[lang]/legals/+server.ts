import { Routes, RoutesEnum } from '$lib/routing';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	return new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${lang}${Routes[RoutesEnum.LegalsMentions]}`
		}
	});
};
