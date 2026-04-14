import type { Profile } from '$models/profile';

export const serializeJsonLd = (data: Record<string, unknown>): string =>
	JSON.stringify(data).replace(/</g, '\\u003c');

export const buildJsonLdScript = (data: Record<string, unknown>): string =>
	`<script type="application/ld+json">${serializeJsonLd(data)}</script>`;

export const buildWebSiteJsonLd = (profile: Profile, url: string): Record<string, unknown> => ({
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: profile.name,
	url,
	description: profile.description,
	inLanguage: ['fr', 'en']
});

export const buildPersonJsonLd = (profile: Profile, url: string): Record<string, unknown> => ({
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: profile.name,
	givenName: profile.firstname,
	familyName: profile.lastname,
	jobTitle: profile.job,
	...(profile.picture ? { image: profile.picture } : {}),
	email: `mailto:${profile.email}`,
	...(profile.address
		? { address: { '@type': 'PostalAddress', addressLocality: profile.address } }
		: {}),
	url,
	sameAs: profile.socialNetworks.map((s) => s.url).filter(Boolean)
});
