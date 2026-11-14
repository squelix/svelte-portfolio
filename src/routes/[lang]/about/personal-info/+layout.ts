import { AboutPageNavItemEnum } from '#lib/menu/about-page-nav-item.enum.js';

import type { NavData } from '#stores/nav.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = (): NavData => ({
	navItemSelected: AboutPageNavItemEnum.PersonalInfo
});
