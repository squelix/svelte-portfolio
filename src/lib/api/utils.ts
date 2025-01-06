import slug from 'slug';

import type { Techno } from '$models/techno';

export const getPictureUrl = (picture: string) =>
	picture.startsWith('http') ? picture : `https:${picture}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTechno = (techno: any): Techno => {
	return {
		...techno,
		slug: slug(techno.name)
	};
};
