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

const biography = derived(profile, ($profile) => $profile?.profile?.data?.attributes?.description);

export const formattedDesktopBiography = derived(biography, ($biography) => {
	const linesTab = $biography?.split(/\r\n|\r|\n/) ?? [];

	if (linesTab.length === 0) {
		return undefined;
	}

	const lines = linesTab
		.map((line) => `<span class="count-line"></span><span> * ${line}</span>\n`)
		.join('');

	return `<span class="count-line"></span><span>/**</span>\n${lines}\n<span class="count-line"></span><span> */</span>`;
});

export const formattedMobileBiography = derived(biography, ($biography) =>
	$biography?.replace(/\n/g, ' ')
);

const jobSearch = derived(profile, ($profile) => $profile?.profile?.data?.attributes?.jobSearch);

export const formattedDesktopJobSearch = derived(jobSearch, ($jobSearch) => {
	const lines = ($jobSearch?.split(/\r\n|\r|\n/) ?? [])
		.map((line) => `<span class="count-line"></span><span> * ${line}</span>\n`)
		.join('');

	return `<span class="count-line"></span><span>/**</span>\n${lines}\n<span class="count-line"></span><span> */</span>`;
});

export const formattedMobileJobSearch = derived(jobSearch, ($jobSearch) =>
	$jobSearch?.replace(/\n/g, ' ')
);
