import type { School } from '$models/graphql-generated';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		schoolsList: (data.schools?.schools?.data ?? [])
			.map((school) => school.attributes)
			.map((school) => {
				if (school?.__typename) {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { __typename, ...j } = school;
					return j;
				}
				return school;
			}) as Omit<School, '__typename'>[]
	};
};
