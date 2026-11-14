import { BioNavItemEnum } from '#lib/menu/bio-nav-item.enum.js';

import type { NavData } from '#stores/nav.js';
import type { PageLoad } from './$types';

// `profile` comes from the root layout.
export const load: PageLoad = (): NavData => ({ itemSelected: BioNavItemEnum.Biography });
