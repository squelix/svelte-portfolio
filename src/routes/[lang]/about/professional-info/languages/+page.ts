import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { getLanguagesListBars } from '$models/languages';
import { setSubNavItem } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { languages } }) => {
	setSubNavItem(ProfessionalInfoNavItemEnum.Languages);
	return { languages: getLanguagesListBars(languages) };
};
