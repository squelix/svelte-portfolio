import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { getJobsList } from '$models/jobs';
import { setSubNavItem } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { jobs } }) => {
	setSubNavItem(ProfessionalInfoNavItemEnum.Experiences);
	return { jobs: getJobsList(jobs) };
};
