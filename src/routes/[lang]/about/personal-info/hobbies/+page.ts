import { PersonalInfoNavItemEnum } from '$lib/menu/personal-info-nav-item.enum';
import { getHobbiesListDisplay } from '$models/hobbies';
import { itemSelected } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	itemSelected.set(PersonalInfoNavItemEnum.Hobbies);
	return { hobbies: await getHobbiesListDisplay(data.hobbies) };
};
