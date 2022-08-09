import type { RoutesEnum } from '$lib/routing';

export interface PageNavItemInterface {
	id: string;
	labelKey: string;
	link?: RoutesEnum;
	items?: PageNavItemInterface[];
}
