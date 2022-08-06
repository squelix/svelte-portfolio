import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => ({
	status: 301,
	headers: {
		Location: `/${`${request.headers
			.get('accept-language')
			?.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase()}`
	}
});
