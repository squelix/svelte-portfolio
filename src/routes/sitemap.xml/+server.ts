import { RoutesEnum } from '$lib/routing';
import { getSitemapXmlString } from '$lib/seo/utils';
import { LangEnum } from '$models/langs.enum';

import type { RequestHandler } from './$types';

const Routes: Partial<Record<RoutesEnum, string>> = {
	[RoutesEnum.AboutPersonalInfoBio]: '/about/personal-info/bio',
	[RoutesEnum.AboutPersonalInfoBioLookingFor]: '/about/personal-info/bio/looking-for',
	[RoutesEnum.AboutPersonalInfoEducation]: '/about/personal-info/education',
	[RoutesEnum.AboutPersonalInfoEducationSchools]: '/about/personal-info/education/schools',
	[RoutesEnum.AboutPersonalInfoEducationProjects]: '/about/personal-info/education/projects',
	[RoutesEnum.AboutPersonalInfoHobbies]: '/about/personal-info/hobbies',
	[RoutesEnum.AboutProfessionalInfo]: '/about/professional-info',
	[RoutesEnum.AboutProfessionalInfoSkills]: '/about/professional-info/skills',
	[RoutesEnum.AboutProfessionalInfoLanguages]: '/about/professional-info/languages',
	[RoutesEnum.AboutProfessionalInfoExperiences]: '/about/professional-info/experiences',
	[RoutesEnum.Projects]: '/projects',
	[RoutesEnum.Contact]: '/contact'
};

export const GET: RequestHandler = ({ url }) =>
	new Response(getSitemapXmlString(LangEnum, RoutesEnum, Routes, url), {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
