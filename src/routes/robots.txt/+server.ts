import { RoutesEnum, SEORoutes } from '$lib/routing';
import { getRobotsTxtString } from '$lib/seo/utils';
import { LangEnum } from '$models/langs.enum';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) =>
	new Response(getRobotsTxtString(LangEnum, RoutesEnum, SEORoutes, url), {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
