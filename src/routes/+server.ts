/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { LangEnum } from '$models/langs.enum';
import { redirect } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ request }) => {
	const lang = (
		request.headers.get('accept-language')?.match(/[a-zA-Z]+?(?=-|_|,|;)/) ?? LangEnum.en_GB
	)
		.toString()
		.toLowerCase();

	throw redirect(301, `/${lang}`);
};
