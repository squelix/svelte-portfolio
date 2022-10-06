import { ProfessionalInfoNavItemEnum } from '$lib/menu/professional-info-nav-item.enum';
import { languages } from '$stores/languages';
import { setSubNavItem } from '$stores/nav';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	languages.set(data.languages);
	setSubNavItem(ProfessionalInfoNavItemEnum.Languages);
	return {};
};
