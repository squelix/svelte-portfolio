import { generateUnicodeBar } from '$lib/unicode-bar';
import { derived, writable } from 'svelte/store';

import type { GetSkillsQuery } from '$models/graphql-generated';

export const skills = writable<GetSkillsQuery | undefined>();

export const skillsList = derived(skills, ($skills) =>
	($skills?.skills?.data ?? []).map((skill) => skill.attributes)
);

export const skillsListBars = derived(
	skillsList,
	($skillsList) =>
		$skillsList
			.filter((skill) => !!skill)
			.map((skill) => {
				if (!skill) {
					return undefined;
				}
				const bar = generateUnicodeBar(skill.percentage);
				if (!bar) {
					return undefined;
				}
				return `${skill.name} : \n${bar} (${skill.percentage}%)`;
			})
			.filter((skill) => !!skill) as string[]
);
