import { generateUnicodeBar } from '$lib/unicode-bar';

import type { Skill } from './skill';

export const getSkillsListBars = (skills: Skill[]) =>
	skills
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
