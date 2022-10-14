import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { jobs } from '$stores/jobs';
import { setSubNavItem } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	jobs.set(data.jobs);
	setSubNavItem(ProfessionalInfoNavItemEnum.Experiences);
	return {};
};
