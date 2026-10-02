import { bioNavItems } from '#lib/menu/nav.js';
import { PersonalInfoNavItemEnum } from '#lib/menu/personal-info-nav-item.enum.js';
import { setSubNavItem, subnav } from '#stores/nav.js';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	setSubNavItem(PersonalInfoNavItemEnum.Biography);
	subnav.set(bioNavItems);
	return {};
};
