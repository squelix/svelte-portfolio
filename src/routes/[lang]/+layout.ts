import 'dayjs/locale/en.js';
import 'dayjs/locale/fr.js';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data: { route, lang, profile } }) => {
	return { profile, route, lang };
};
