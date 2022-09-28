import { AboutPageNavItemEnum } from '$lib/menu/about-page-nav-item.enum';
import { aboutPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem } from '$stores/nav';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	setNavItem(AboutPageNavItemEnum.PersonalInfo);
	nav.set(aboutPageNavItems);
	return {};
};
