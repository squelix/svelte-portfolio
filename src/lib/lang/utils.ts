import { AcceptedLanguages, LangEnum } from '$models/langs.enum';
import { parse } from 'accept-language-parser';

export const getLanguage = (acceptLanguage?: string | null): string =>
	(
		parse(acceptLanguage ?? LangEnum.en_GB)
			.filter((langs) => AcceptedLanguages.includes(langs.code.toLowerCase() as LangEnum))
			.sort((a, b) => b.quality - a.quality)
			.shift()?.code ?? LangEnum.en_GB
	)
		.toString()
		.toLowerCase();
