import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) =>
	new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${`${request.headers
				.get('accept-language')
				?.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase()}`
		}
	});
