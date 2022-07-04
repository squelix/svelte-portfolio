import { locales } from '$translations';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { url } = event;
	const { pathname } = url;

	const response = await resolve(event);

	// If this request is a route request
	if (pathname.startsWith('/fr') || pathname.startsWith('/en')) {
		// Get defined locales
		const supportedLocales = locales.get();

		// Get locale from `pathname`.
		const locale = supportedLocales.find((l) => pathname.startsWith(`/${l}`));

		try {
			// Add html `lang` attribute
			const body = await response.text();
			return new Response(body.replace(/<html.*>/, `<html lang="${locale}">`), response);
		} catch (error) {
			return response;
		}
	}

	return response;
};
