import { gql } from '@urql/core';

export const GET_SKILLS_QUERY = gql`
	query getSkills($locale: I18NLocaleCode) {
		skills(locale: $locale, sort: "percentage:desc", pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					name
					percentage
					slug
				}
			}
		}
	}
`;
