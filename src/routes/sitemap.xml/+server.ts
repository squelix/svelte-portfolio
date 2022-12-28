import { RoutesEnum, SEORoutes } from '$lib/routing';
import { getSitemapXmlString } from '$lib/seo/utils';
import { LangEnum } from '$models/langs.enum';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) =>
	new Response(getSitemapXmlString(LangEnum, RoutesEnum, SEORoutes, url), {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
