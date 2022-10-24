import { gql } from '@urql/core';

export const GET_SCHOOLS_PROJECTS_QUERY = gql`
	query getSchoolsProjects($locale: I18NLocaleCode) {
		schoolProjects(locale: $locale, pagination: { page: 1, pageSize: 50 }) {
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
					technos(pagination: { page: 1, pageSize: 50 }) {
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
