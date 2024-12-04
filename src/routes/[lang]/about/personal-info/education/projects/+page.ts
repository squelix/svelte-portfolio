import type { SchoolProject } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		schoolsProjectsList: (
			(data.schoolsProjects?.schoolProjects?.data ?? []).map(
				(schoolProject) => schoolProject.attributes
			) as SchoolProject[]
		).map((schoolProject) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { __typename, ...p } = schoolProject;
			return p;
		})
	};
};
