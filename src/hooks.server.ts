/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-non-null-assertion */
import { getLanguage } from '$lib/lang/utils';
import { AcceptedLanguages, LangEnum } from '$models/langs.enum';
import { locales } from '$translations';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname } = url;

	const response = await resolve(event);

	if (['robots.txt', 'sitemap.xml'].some((path) => pathname.includes(path))) {
		return response;
	}

	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	// If this request is a route request
	if (AcceptedLanguages.includes(lang as unknown as LangEnum)) {
		// Get defined locales
		const supportedLocales = locales.get();

		// Get locale from `pathname`.
		const locale: string = supportedLocales.find((l) => pathname.startsWith(`/${l}`))!;

		try {
			// Add html `lang` attribute
			const body = await response.text();
			return new Response(body.replace(/<html.*>/, `<html lang="${locale}">`), response);
		} catch (error) {
			return response;
		}
	}

	return new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${getLanguage(request.headers.get('accept-language'))}${route}`
		}
	});
};
