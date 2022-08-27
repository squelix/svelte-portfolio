/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Routes, RoutesEnum } from '$lib/routing';
import { redirect } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

	throw redirect(301, `/${lang}${Routes[RoutesEnum.AboutPersonalInfo]}`);
};
