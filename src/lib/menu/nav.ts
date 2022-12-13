import Markdown from '$icons/markdown.svg?raw';
import { AboutPageNavItemEnum } from '$lib/menu/about-page-nav-item.enum';
import { BioNavItemEnum } from '$lib/menu/bio-nav-item.enum';
import { ContactPageNavItemEnum } from '$lib/menu/contact-page-nav-item.enum';
import { EducationNavItemEnum } from '$lib/menu/education-nav-item.enum';
import { PersonalInfoNavItemEnum } from '$lib/menu/personal-info-nav-item.enum';
import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { RoutesEnum } from '$lib/routing';

import type { PageNavItemInterface } from '$models/page-nav-item.interface';

export const educationNavItems: PageNavItemInterface[] = [
	{
		id: EducationNavItemEnum.Schools,
		labelKey: 'about.personal-info-subnav-education.0',
		link: RoutesEnum.AboutPersonalInfoEducationSchools
	},
	{
		id: EducationNavItemEnum.Projects,
		labelKey: 'about.personal-info-subnav-education.1',
		link: RoutesEnum.AboutPersonalInfoEducationProjects
	}
];

export const bioNavItems: PageNavItemInterface[] = [
	{
		id: BioNavItemEnum.Biography,
		labelKey: 'about.personal-info-subnav-bio.0',
		link: RoutesEnum.AboutPersonalInfoBio
	},
	{
		id: BioNavItemEnum.LookingFor,
		labelKey: 'about.personal-info-subnav-bio.1',
		link: RoutesEnum.AboutPersonalInfoBioLookingFor
	}
];

export const personalInfoNavItems: PageNavItemInterface[] = [
	{
		id: PersonalInfoNavItemEnum.Biography,
		labelKey: 'about.personal-info-subnav.0',
		items: bioNavItems
	},
	{
		id: PersonalInfoNavItemEnum.Education,
		labelKey: 'about.personal-info-subnav.1',
		items: educationNavItems
	},
	{
		id: PersonalInfoNavItemEnum.Hobbies,
		labelKey: 'about.personal-info-subnav.2',
		link: RoutesEnum.AboutPersonalInfoHobbies,
		icon: Markdown
	}
];

export const professionalInfoNavItems: PageNavItemInterface[] = [
	{
		id: ProfessionalInfoNavItemEnum.Skills,
		labelKey: 'about.professional-info-subnav.0',
		link: RoutesEnum.AboutProfessionalInfoSkills,
		icon: Markdown
	},
	{
		id: ProfessionalInfoNavItemEnum.Languages,
		labelKey: 'about.professional-info-subnav.1',
		link: RoutesEnum.AboutProfessionalInfoLanguages,
		icon: Markdown
	},
	{
		id: ProfessionalInfoNavItemEnum.Experiences,
		labelKey: 'about.professional-info-subnav.2',
		link: RoutesEnum.AboutProfessionalInfoExperiences,
		icon: Markdown
	}
];

export const aboutPageNavItems: PageNavItemInterface[] = [
	{
		id: AboutPageNavItemEnum.PersonalInfo,
		labelKey: 'about.nav.0',
		items: personalInfoNavItems
	},
	{
		id: AboutPageNavItemEnum.ProfessionalInfo,
		labelKey: 'about.nav.1',
		items: professionalInfoNavItems
	}
];

export const contactPageNavItems: PageNavItemInterface[] = [
	{
		id: ContactPageNavItemEnum.Contacts,
		labelKey: 'contact.nav.0'
	},
	{
		id: ContactPageNavItemEnum.FindMeAlsoIn,
		labelKey: 'contact.nav.1'
	}
];
