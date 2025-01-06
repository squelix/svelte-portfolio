import type { Techno } from './techno';

export type Project = {
	slug: string;
	title: string;
	description: string;
	url?: string;
	urlName?: string;
	picture: string;
	mainTechno: Techno;
	technos: Techno[];
};
