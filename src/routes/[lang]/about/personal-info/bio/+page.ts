import { itemSelected } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	itemSelected.set('personal-info-bio-biography');
	return {};
};
