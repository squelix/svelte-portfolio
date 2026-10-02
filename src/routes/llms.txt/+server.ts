import { getProfile } from '#lib/api/profile/webservice.js';
import { SEORoutes } from '#lib/routing.js';
import { getLlmsTxtString } from '#lib/seo/utils.js';
import { LangEnum } from '#models/langs.enum.js';

import type { PageMeta } from '#lib/seo/utils.js';
import type { Profile } from '#models/profile.js';
import type { RequestHandler } from './$types';

// Page titles/descriptions come from the translation files: no network call needed.
const translations = import.meta.glob<{ page?: PageMeta }>('/src/translations/*/*.json', {
	eager: true,
	import: 'default'
});

const getPageMeta = (lang: string, routeKey: string): PageMeta | undefined =>
	translations[`/src/translations/${lang}/${routeKey}.json`]?.page;

export const GET: RequestHandler = async ({ url, fetch }) => {
	let profile: Profile | undefined;
	try {
		profile = await getProfile(LangEnum.en_GB, fetch);
	} catch {
		// Contentful down: still serve a valid llms.txt with the page links.
		profile = undefined;
	}

	return new Response(getLlmsTxtString(LangEnum, SEORoutes, getPageMeta, profile, url), {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};
