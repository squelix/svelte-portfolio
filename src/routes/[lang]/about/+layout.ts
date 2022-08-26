import { aboutPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem } from '$stores/nav';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	setNavItem('personal-info');
	nav.set(aboutPageNavItems);
	return {};
};
