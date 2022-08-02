export enum RoutesEnum {
	Home = 'home',
	About = 'about',
	Projects = 'projects',
	Contact = 'contact'
}

export const Routes: Record<RoutesEnum, string> = {
	[RoutesEnum.Home]: '/',
	[RoutesEnum.About]: '/about',
	[RoutesEnum.Projects]: '/projects',
	[RoutesEnum.Contact]: '/contact'
};

export const getRoute = (lang: string, route: string, params?: Record<string, string>): string => {
	let url = `/${lang}${Routes[route as RoutesEnum]}`;

	if (!params) {
		return url.replace(/\/$/, '');
	}

	Object.keys(params).forEach((param) => {
		url = url.replace(`[${param}]`, params[param]);
	});
	return url.replace(/\/$/, '');
};
