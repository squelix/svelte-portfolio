import { PersonalInfoNavItemEnum } from '#lib/menu/personal-info-nav-item.enum.js';
import { getHobbiesListDisplay } from '#models/hobbies.js';
import { itemSelected } from '#stores/nav.js';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	itemSelected.set(PersonalInfoNavItemEnum.Hobbies);
	return { hobbies: await getHobbiesListDisplay(data.hobbies) };
};
