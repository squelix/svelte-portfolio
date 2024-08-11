import { getLanguage } from '$lib/lang/utils';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ request }) =>
	new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${getLanguage(request.headers.get('accept-language'))}`
		}
	});
