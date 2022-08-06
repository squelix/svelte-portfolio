import { Routes, RoutesEnum } from '$lib/routing';
import { locale } from '$translations';
import { get } from 'svelte/store';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => ({
	status: 301,
	headers: { Location: `/${get(locale)}${Routes[RoutesEnum.AboutPersonalInfoEducationSchools]}` }
});
