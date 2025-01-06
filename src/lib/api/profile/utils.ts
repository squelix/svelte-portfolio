import type { Profile } from '$models/profile';

export const getSocialGithub = (profile: Profile) =>
	profile.socialNetworks.find((social) => social?.title.toLowerCase().includes('github'));

export const getSocialMalt = (profile: Profile) =>
	profile.socialNetworks.find((social) => social?.title.toLowerCase().includes('malt'));

export const getSocialLinkedIn = (profile: Profile) =>
	profile.socialNetworks.find((social) => social?.title.toLowerCase().includes('linkedin'));
