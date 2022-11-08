/* eslint-disable @typescript-eslint/no-unsafe-call,  @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions */
import { AcceptedLanguages, LangEnum } from '$models/langs.enum';
import { parse } from 'accept-language-parser';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ request }) => {
	const lang = (
		parse(request.headers.get('accept-language') ?? LangEnum.en_GB)
			.filter((langs) => AcceptedLanguages.includes(langs.code.toLowerCase() as LangEnum))
			.sort((a, b) => b.quality - a.quality)
			.shift()?.code ?? LangEnum.en_GB
	)
		.toString()
		.toLowerCase();

	return new Response(undefined, {
		status: 301,
		headers: {
			Location: `/${lang}`
		}
	});
};
