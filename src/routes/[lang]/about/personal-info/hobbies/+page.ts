import { PersonalInfoNavItemEnum } from '$lib/menu/personal-info-nav-item.enum';
import { hobbies } from '$stores/hobbies';
import { itemSelected } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	itemSelected.set(PersonalInfoNavItemEnum.Hobbies);
	hobbies.set(data.hobbies);

	return {};
};
