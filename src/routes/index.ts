import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => {
	const acceptLanguage = request.headers.get('accept-language');
	const locale = `${acceptLanguage?.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();

	return {
		status: 301,
		headers: { Location: `/${locale}` }
	};
};
