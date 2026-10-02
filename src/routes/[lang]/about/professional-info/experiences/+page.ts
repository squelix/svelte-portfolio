import { ProfessionalInfoNavItemEnum } from '#lib/menu/professional-info-nav-item.enum.js';
import { getJobsList } from '#models/jobs.js';
import { setSubNavItem } from '#stores/nav.js';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { jobs } }) => {
	setSubNavItem(ProfessionalInfoNavItemEnum.Experiences);
	return { jobs: getJobsList(jobs) };
};
