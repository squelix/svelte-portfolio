import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { setSubNavItem } from '$stores/nav';
import { skills } from '$stores/skills';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	skills.set(data.skills);
	setSubNavItem(ProfessionalInfoNavItemEnum.Skills);
	return {};
};
