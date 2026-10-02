import { ProfessionalInfoNavItemEnum } from '#lib/menu/professional-info-nav-item.enum.js';
import { getSkillsListBars } from '$models/skills';
import { setSubNavItem } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { skills } }) => {
	setSubNavItem(ProfessionalInfoNavItemEnum.Skills);
	return { skills: getSkillsListBars(skills) };
};
