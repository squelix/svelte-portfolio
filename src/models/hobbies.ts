import type { Hobby } from './hobby';

export const getHobbiesListDisplay = (hobbies: Hobby[]) =>
	Promise.all(
		hobbies
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
