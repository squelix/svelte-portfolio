/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-assignment */
import { derived, writable } from 'svelte/store';

import type { GetTechnosQuery } from '$models/graphql-generated';
import type { PageNavFilterItemInterface } from '$models/page-nav-filter-item.interface';
import type { Readable } from 'svelte/store';

export const technos = writable<GetTechnosQuery | undefined>();
export const technosList = derived(technos, ($technos) => $technos?.technos?.data ?? []);

export const technosListAllFilters: Readable<PageNavFilterItemInterface[]> = derived(
	[technosList],
	([$technosList]) => [
		{
			id: 'projects',
			labelKey: 'projects.title',
			items: ($technosList ?? []).map((techno) => ({
				id: techno.attributes!.slug,
				label: techno.attributes!.name
			}))
		}
	]
);

export const technosFilter = writable<string[] | undefined>();
