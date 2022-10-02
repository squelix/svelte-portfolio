import { gql } from '@urql/svelte';

export const GET_SCHOOLS_QUERY = gql`
	query getSchools($locale: I18NLocaleCode) {
		schools(locale: $locale, pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					diploma
					address
					startYear
					endYear
					name
					slug
					picture {
						data {
							attributes {
								url
								name
							}
						}
					}
				}
			}
		}
	}
`;
