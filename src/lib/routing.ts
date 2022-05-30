import { LangEnum } from '$models/langs.enum';

export enum RoutesEnum {
	Home = 'home'
}

export const Routes: Record<LangEnum, Record<RoutesEnum, string>> = {
	[LangEnum.en_GB]: {
		[RoutesEnum.Home]: '/'
	},
	[LangEnum.fr_FR]: {
		[RoutesEnum.Home]: '/'
	}
};

export const getRoute = (
	prefix: string,
	lang: LangEnum,
	route: RoutesEnum,
	params?: Record<string, string>
): string => {
	let url = `${prefix}${Routes[lang][route]}`;

	if (!params) {
		return url.replace(/\/$/, '');
	}

	Object.keys(params).forEach((param) => {
		url = url.replace(`[${param}]`, params[param]);
	});
	return url.replace(/\/$/, '');
};
