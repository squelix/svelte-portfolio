import { bioNavItems } from '$lib/menu/nav';
import { setSubNavItem, subnav } from '$stores/nav';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	setSubNavItem('personal-info-bio');
	subnav.set(bioNavItems);
	return {};
};
