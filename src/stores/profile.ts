import { derived, writable } from 'svelte/store';

import type { GetProfileQuery } from '$models/graphql-generated';

export const profile = writable<GetProfileQuery>();

export const firstname = derived(
	profile,
	($profile) => $profile?.profile?.data?.attributes?.firstname
);
export const lastname = derived(
	profile,
	($profile) => $profile?.profile?.data?.attributes?.lastname
);
export const name = derived([firstname, lastname], ([$firstname, $lastname]) =>
	$firstname && $lastname ? `${$firstname} ${$lastname}` : undefined
);
