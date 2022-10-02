import { aboutPageNavItems } from '$lib/menu/nav';
import { nav } from '$stores/nav';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	nav.set(aboutPageNavItems);
	return {};
};
