import { aboutPageNavItems } from '#lib/menu/nav.js';

import type { NavData } from '#stores/nav.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = (): NavData => ({ navItems: aboutPageNavItems });
