import { ProfessionalInfoNavItemEnum } from '#lib/menu/professional-info-nav-item.enum.js';
import { getSkillsListBars } from '#models/skills.js';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { skills } }) => ({
	subNavItemSelected: ProfessionalInfoNavItemEnum.Skills,
	skills: getSkillsListBars(skills)
});
