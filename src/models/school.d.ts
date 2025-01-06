import type { Techno } from './techno';

export type School = {
	slug: string;
	diploma: string;
	address: string;
	startYear: number;
	endYear?: number;
	pictureUrl?: string;
	picture: string;
	schoolName: Techno;
};
