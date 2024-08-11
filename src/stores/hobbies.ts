import { derived, writable } from 'svelte/store';

import type { GetHobbiesQuery } from '$models/graphql-generated';

export const hobbies = writable<GetHobbiesQuery | undefined>();

export const hobbiesList = derived(hobbies, ($hobbies) =>
	($hobbies?.hobbies?.data ?? []).map((hobby) => hobby.attributes)
);

export const hobbiesListDisplay = derived(
	hobbiesList,
	($hobbiesList) =>
		Promise.all(
			$hobbiesList
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
		) as Promise<string[]>
);
