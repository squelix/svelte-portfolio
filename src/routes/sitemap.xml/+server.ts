import { Routes, RoutesEnum } from '$lib/routing';
import { getSitemapXmlString } from '$lib/seo/utils';
import { LangEnum } from '$models/langs.enum';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) =>
	new Response(getSitemapXmlString(LangEnum, RoutesEnum, Routes, url), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
