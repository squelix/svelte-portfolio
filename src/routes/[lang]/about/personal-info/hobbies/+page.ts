import { PersonalInfoNavItemEnum } from '#lib/menu/personal-info-nav-item.enum.js';
import { getHobbiesListDisplay } from '#models/hobbies.js';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => ({
	itemSelected: PersonalInfoNavItemEnum.Hobbies,
	hobbies: await getHobbiesListDisplay(data.hobbies)
});
