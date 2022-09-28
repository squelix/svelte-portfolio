import { BioNavItemEnum } from '$lib/menu/bio-nav-item.enum';
import { itemSelected } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	itemSelected.set(BioNavItemEnum.Biography);
	return {};
};
