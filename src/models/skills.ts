import { generateUnicodeBar } from '$lib/unicode-bar';

import type { GetSkillsQuery } from '$models/graphql-generated';

export const getSkillsList = (skills: GetSkillsQuery | undefined) =>
	(skills?.skills?.data ?? []).map((skill) => skill.attributes);

export const getSkillsListBars = (skills: GetSkillsQuery | undefined) =>
	getSkillsList(skills)
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
		.filter((skill) => !!skill) as string[];
