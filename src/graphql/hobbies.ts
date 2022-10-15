import { gql } from '@urql/core';

export const GET_HOBBIES_QUERY = gql`
	query getHobbies($locale: I18NLocaleCode) {
		hobbies(locale: $locale, pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					name
					icon
					description
					slug
				}
			}
		}
	}
`;
