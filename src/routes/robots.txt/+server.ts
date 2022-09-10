import { Routes, RoutesEnum } from '$lib/routing';
import { getRobotsTxtString } from '$lib/seo/utils';
import { LangEnum } from '$models/langs.enum';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) =>
	new Response(getRobotsTxtString(LangEnum, RoutesEnum, Routes, url), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
