import { educationNavItems } from '$lib/menu/nav';
import { setSubNavItem, subnav } from '$stores/nav';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	setSubNavItem('personal-info-education');
	subnav.set(educationNavItems);
	return {};
};
