import { Routes, RoutesEnum } from '$lib/routing';
import { LangEnum } from '$models/langs.enum';
import i18n from '@sveltekit-i18n/base';
import parser from '@sveltekit-i18n/parser-default';

import type { Config } from '@sveltekit-i18n/parser-default';

export const config: Config = {
	fallbackLocale: LangEnum.en_GB,
	parser: parser(),
	loaders: [
		{
			locale: LangEnum.fr_FR,
			key: 'common',
			loader: async () => (await import('./fr/common.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'error',
			routes: ['error'],
			loader: async () => (await import('./fr/error.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'error',
			routes: ['error'],
			loader: async () => (await import('./en/error.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'home',
			routes: ['', '/'],
			loader: async () => (await import('./fr/home.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'home',
			routes: ['', '/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'about',
			routes: [
				Routes[RoutesEnum.About],
				Routes[RoutesEnum.AboutPersonalInfo],
				Routes[RoutesEnum.AboutPersonalInfoBio],
				Routes[RoutesEnum.AboutPersonalInfoBioLookingFor],
				Routes[RoutesEnum.AboutPersonalInfoEducation],
				Routes[RoutesEnum.AboutPersonalInfoEducationSchools],
				Routes[RoutesEnum.AboutPersonalInfoEducationProjects],
				Routes[RoutesEnum.AboutPersonalInfoHobbies],
				Routes[RoutesEnum.AboutProfessionalInfo],
				Routes[RoutesEnum.AboutProfessionalInfoSkills],
				Routes[RoutesEnum.AboutProfessionalInfoLanguages],
				Routes[RoutesEnum.AboutProfessionalInfoExperiences]
			],
			loader: async () => (await import('./fr/about.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'about',
			routes: [
				Routes[RoutesEnum.About],
				Routes[RoutesEnum.AboutPersonalInfo],
				Routes[RoutesEnum.AboutPersonalInfoBio],
				Routes[RoutesEnum.AboutPersonalInfoBioLookingFor],
				Routes[RoutesEnum.AboutPersonalInfoEducation],
				Routes[RoutesEnum.AboutPersonalInfoEducationSchools],
				Routes[RoutesEnum.AboutPersonalInfoEducationProjects],
				Routes[RoutesEnum.AboutPersonalInfoHobbies],
				Routes[RoutesEnum.AboutProfessionalInfo],
				Routes[RoutesEnum.AboutProfessionalInfoSkills],
				Routes[RoutesEnum.AboutProfessionalInfoLanguages],
				Routes[RoutesEnum.AboutProfessionalInfoExperiences]
			],
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'bio',
			routes: [Routes[RoutesEnum.AboutPersonalInfoBio]],
			loader: async () => (await import('./fr/bio.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'bio',
			routes: [Routes[RoutesEnum.AboutPersonalInfoBio]],
			loader: async () => (await import('./en/bio.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'looking-for',
			routes: [Routes[RoutesEnum.AboutPersonalInfoBioLookingFor]],
			loader: async () => (await import('./fr/looking-for.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'looking-for',
			routes: [Routes[RoutesEnum.AboutPersonalInfoBioLookingFor]],
			loader: async () => (await import('./en/looking-for.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'schools',
			routes: [Routes[RoutesEnum.AboutPersonalInfoEducationSchools]],
			loader: async () => (await import('./fr/schools.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'schools',
			routes: [Routes[RoutesEnum.AboutPersonalInfoEducationSchools]],
			loader: async () => (await import('./en/schools.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'education-projects',
			routes: [Routes[RoutesEnum.AboutPersonalInfoEducationProjects]],
			loader: async () => (await import('./fr/education-projects.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'education-projects',
			routes: [Routes[RoutesEnum.AboutPersonalInfoEducationProjects]],
			loader: async () => (await import('./en/education-projects.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'contact',
			routes: [Routes[RoutesEnum.Contact]],
			loader: async () => (await import('./fr/contact.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'contact',
			routes: [Routes[RoutesEnum.Contact]],
			loader: async () => (await import('./en/contact.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'projects',
			routes: [Routes[RoutesEnum.Projects]],
			loader: async () => (await import('./fr/projects.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'projects',
			routes: [Routes[RoutesEnum.Projects]],
			loader: async () => (await import('./en/projects.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'skills',
			routes: [Routes[RoutesEnum.AboutProfessionalInfoSkills]],
			loader: async () => (await import('./fr/skills.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'skills',
			routes: [Routes[RoutesEnum.AboutProfessionalInfoSkills]],
			loader: async () => (await import('./en/skills.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'languages',
			routes: [Routes[RoutesEnum.AboutProfessionalInfoLanguages]],
			loader: async () => (await import('./fr/languages.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'languages',
			routes: [Routes[RoutesEnum.AboutProfessionalInfoLanguages]],
			loader: async () => (await import('./en/languages.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'hobbies',
			routes: [Routes[RoutesEnum.AboutPersonalInfoHobbies]],
			loader: async () => (await import('./fr/hobbies.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'hobbies',
			routes: [Routes[RoutesEnum.AboutPersonalInfoHobbies]],
			loader: async () => (await import('./en/hobbies.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'experiences',
			routes: [Routes[RoutesEnum.AboutProfessionalInfoExperiences]],
			loader: async () => (await import('./fr/experiences.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'experiences',
			routes: [Routes[RoutesEnum.AboutProfessionalInfoExperiences]],
			loader: async () => (await import('./en/experiences.json')).default
		},
		{
			locale: LangEnum.fr_FR,
			key: 'legals-mentions',
			routes: [Routes[RoutesEnum.LegalsMentions]],
			loader: async () => (await import('./fr/legals-mentions.json')).default
		},
		{
			locale: LangEnum.en_GB,
			key: 'legals-mentions',
			routes: [Routes[RoutesEnum.LegalsMentions]],
			loader: async () => (await import('./en/legals-mentions.json')).default
		}
	]
};

export const defaultLocale = LangEnum.fr_FR;

export const { t, locale, locales, loading, loadTranslations, getTranslationProps } = new i18n(
	config
);
