/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ request }) =>
	new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${`${request.headers
				.get('accept-language')
				?.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase()}`
		}
	});
