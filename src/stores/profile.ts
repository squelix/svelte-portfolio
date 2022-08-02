import { strapiUri } from '$stores/env';
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
export const dashedName = derived([firstname, lastname], ([$firstname, $lastname]) =>
	$firstname && $lastname ? `${$firstname.toLowerCase()}-${$lastname.toLowerCase()}` : undefined
);

export const picture = derived([profile, strapiUri], ([$profile, $strapiUri]) =>
	$profile && $strapiUri
		? `${$strapiUri}${$profile?.profile?.data?.attributes?.picture.data?.attributes?.url}`
		: undefined
);

export const socialNetworks = derived(
	profile,
	($profile) => $profile?.profile?.data?.attributes?.socialNetworks?.data
);

export const facebook = derived(socialNetworks, ($socialNetworks) =>
	$socialNetworks?.find((social) => social.attributes?.title.toLowerCase().includes('facebook'))
);

export const twitter = derived(socialNetworks, ($socialNetworks) =>
	$socialNetworks?.find((social) => social.attributes?.title.toLowerCase().includes('twitter'))
);

export const github = derived(socialNetworks, ($socialNetworks) =>
	$socialNetworks?.find((social) => social.attributes?.title.toLowerCase().includes('github'))
);

export const job = derived(profile, ($profile) => $profile?.profile?.data?.attributes?.job);
