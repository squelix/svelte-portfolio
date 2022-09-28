import { educationNavItems } from '$lib/menu/nav';
import { PersonalInfoNavItemEnum } from '$lib/menu/personal-info-nav-item.enum';
import { setSubNavItem, subnav } from '$stores/nav';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	setSubNavItem(PersonalInfoNavItemEnum.Education);
	subnav.set(educationNavItems);
	return {};
};
