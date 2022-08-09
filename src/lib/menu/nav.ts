import { RoutesEnum } from '$lib/routing';

import type { PageNavItemInterface } from '$models/page-nav-item.interface';

export const educationNavItems: PageNavItemInterface[] = [
	{
		id: 'personal-info-education-schools',
		labelKey: 'about.personal-info-subnav-education.0',
		link: RoutesEnum.AboutPersonalInfoEducationSchools
	},
	{
		id: 'personal-info-education-projects',
		labelKey: 'about.personal-info-subnav-education.1',
		link: RoutesEnum.AboutPersonalInfoEducationProjects
	}
];

export const bioNavItems: PageNavItemInterface[] = [
	{
		id: 'personal-info-bio-biography',
		labelKey: 'about.personal-info-subnav-bio.0',
		link: RoutesEnum.AboutPersonalInfoBio
	},
	{
		id: 'personal-info-bio-looking-for',
		labelKey: 'about.personal-info-subnav-bio.1',
		link: RoutesEnum.AboutPersonalInfoBioLookingFor
	}
];

export const personalInfoNavItems: PageNavItemInterface[] = [
	{
		id: 'personal-info-bio',
		labelKey: 'about.personal-info-subnav.0',
		items: bioNavItems
	},
	{
		id: 'personal-info-education',
		labelKey: 'about.personal-info-subnav.1',
		items: educationNavItems
	}
];

export const pageNavItems: PageNavItemInterface[] = [
	{
		// Personal infos
		id: 'personal-info',
		labelKey: 'about.nav.0',
		items: personalInfoNavItems
	},
	// Professional infos
	{
		id: 'professional-info',
		labelKey: 'about.nav.1',
		items: [
			{ id: 'professional-info-skills', labelKey: 'about.professional-info-subnav.0' },
			{
				id: 'professional-info-languages',
				labelKey: 'about.professional-info-subnav.1'
				// link: ''
			},
			{
				id: 'professional-info-projects',
				labelKey: 'about.professional-info-subnav.2'
				// link: ''
			}
		]
	},
	{ id: 'hobbies', labelKey: 'about.nav.2' }
];
