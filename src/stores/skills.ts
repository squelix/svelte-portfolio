/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unused-vars */
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
				return `${skill.name} : ${bar} (${skill.percentage}%)`;
			})
			.filter((skill) => !!skill) as string[]
);
