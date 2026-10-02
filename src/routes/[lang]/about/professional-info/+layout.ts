import { AboutPageNavItemEnum } from '#lib/menu/about-page-nav-item.enum.js';
import { setNavItem } from '$stores/nav';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	setNavItem(AboutPageNavItemEnum.ProfessionalInfo);
	return {};
};
