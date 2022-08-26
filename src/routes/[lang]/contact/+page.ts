import { contactPageNavItems } from '$lib/menu/nav';
import { nav, setNavItem } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	setNavItem('contacts');
	nav.set(contactPageNavItems);
	return {};
};
