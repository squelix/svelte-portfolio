import { ProfessionalInfoNavItemEnum } from '#lib/menu/professional-info-nav-item.enum.js';
import { getJobsList } from '#models/jobs.js';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ data: { jobs } }) => ({
	subNavItemSelected: ProfessionalInfoNavItemEnum.Experiences,
	jobs: getJobsList(jobs)
});
