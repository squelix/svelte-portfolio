import { bioNavItems } from '#lib/menu/nav.js';
import { PersonalInfoNavItemEnum } from '#lib/menu/personal-info-nav-item.enum.js';

import type { NavData } from '#stores/nav.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = (): NavData => ({
	subNavItemSelected: PersonalInfoNavItemEnum.Biography,
	subnavItems: bioNavItems
});
