import { BioNavItemEnum } from '$lib/menu/bio-nav-item.enum';
import { itemSelected } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { profile } }) => {
	itemSelected.set(BioNavItemEnum.LookingFor);
	return { profile };
};
