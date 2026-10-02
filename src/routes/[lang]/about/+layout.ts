import { aboutPageNavItems } from '#lib/menu/nav.js';
import { nav } from '#stores/nav.js';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	nav.set(aboutPageNavItems);
	return {};
};
