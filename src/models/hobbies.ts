import type { GetHobbiesQuery } from '$models/graphql-generated';

export const getHobbiesList = (hobbies: GetHobbiesQuery | undefined) =>
	(hobbies?.hobbies?.data ?? []).map((hobby) => hobby.attributes);

export const getHobbiesListDisplay = (hobbies: GetHobbiesQuery | undefined) =>
	Promise.all(
		getHobbiesList(hobbies)
			.filter((hobby) => !!hobby)
			.map(async (hobby) => {
				if (!hobby) {
					return undefined;
				}
				const icon = await import(`$icons/${hobby.icon}.svg?raw`);
				if (hobby.description) {
					return `${icon.default} ${hobby.name}: ${hobby.description}`;
				}
				return `${icon.default} ${hobby.name}`;
			})
			.filter(async (hobby) => !!(await hobby))
	) as Promise<string[]>;
