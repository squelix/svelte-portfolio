import { gql } from '@urql/core';

export const GET_PROJECTS_QUERY = gql`
	query getProjects($locale: I18NLocaleCode) {
		projects(locale: $locale, pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					slug
					url
					urlName
					title
					description
					mainTechno {
						data {
							attributes {
								name
								slug
								color
							}
						}
					}
					technos {
						data {
							attributes {
								name
								slug
								color
							}
						}
					}
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
