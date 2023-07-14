export interface PageNavItemInterface {
	id: string;
	labelKey?: string;
	label?: string;
	link?: string;
	href?: string;
	icon?: string;
	ariaLabel?: { key: string; params?: Record<string, string> };
	items?: PageNavItemInterface[];
}
