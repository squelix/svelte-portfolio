export enum RoutesEnum {
	Home = 'home',
	About = 'about',
	AboutPersonalInfo = 'personal-info',
	AboutPersonalInfoBio = 'bio',
	AboutPersonalInfoBioLookingFor = 'looking-for',
	AboutPersonalInfoEducation = 'education',
	AboutPersonalInfoEducationSchools = 'schools',
	AboutPersonalInfoHobbies = 'hobbies',
	AboutPersonalInfoEducationProjects = 'education-projects',
	AboutProfessionalInfo = 'professional-info',
	AboutProfessionalInfoSkills = 'skills',
	AboutProfessionalInfoLanguages = 'languages',
	Projects = 'projects',
	Contact = 'contact'
}

export const MainRoutes: Partial<Record<RoutesEnum, string>> = {
	[RoutesEnum.Home]: '/',
	[RoutesEnum.About]: '/about',
	[RoutesEnum.Projects]: '/projects',
	[RoutesEnum.Contact]: '/contact'
};

export const Routes: Record<RoutesEnum, string> = {
	[RoutesEnum.Home]: '/',
	[RoutesEnum.About]: '/about',
	[RoutesEnum.AboutPersonalInfo]: '/about/personal-info',
	[RoutesEnum.AboutPersonalInfoBio]: '/about/personal-info/bio',
	[RoutesEnum.AboutPersonalInfoBioLookingFor]: '/about/personal-info/bio/looking-for',
	[RoutesEnum.AboutPersonalInfoEducation]: '/about/personal-info/education',
	[RoutesEnum.AboutPersonalInfoEducationSchools]: '/about/personal-info/education/schools',
	[RoutesEnum.AboutPersonalInfoEducationProjects]: '/about/personal-info/education/projects',
	[RoutesEnum.AboutPersonalInfoHobbies]: '/about/personal-info/hobbies',
	[RoutesEnum.AboutProfessionalInfo]: '/about/professional-info',
	[RoutesEnum.AboutProfessionalInfoSkills]: '/about/professional-info/skills',
	[RoutesEnum.AboutProfessionalInfoLanguages]: '/about/professional-info/languages',
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

export const isRouteActive = (
	currentPath: string,
	{ lang, route, params }: { lang: string; route: string; params?: Record<string, string> }
): boolean => getRoute(lang, route, params) === currentPath;

export const isBaseRouteActive = (
	currentPath: string,
	{ lang, route, params }: { lang: string; route: string; params?: Record<string, string> }
): boolean => {
	const routePath = getRoute(lang, route, params);

	if (routePath === getRoute(lang, RoutesEnum.Home, params)) {
		return routePath === currentPath;
	}
	return currentPath.startsWith(routePath);
};
