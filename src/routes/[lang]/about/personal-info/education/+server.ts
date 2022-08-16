import { Routes, RoutesEnum } from '$lib/routing';
import { locale } from '$translations';
import { get } from 'svelte/store';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = () =>
	new Response(undefined, {
		status: 301,
		headers: { Location: `/${get(locale)}${Routes[RoutesEnum.AboutPersonalInfoEducationSchools]}` }
	});
