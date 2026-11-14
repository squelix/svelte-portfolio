import { ProfessionalInfoNavItemEnum } from '#lib/menu/professional-info-nav-item.enum.js';
import { getLanguagesListBars } from '#models/languages.js';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { languages } }) => ({
	subNavItemSelected: ProfessionalInfoNavItemEnum.Languages,
	languages: getLanguagesListBars(languages)
});
