import { gql } from '@urql/svelte';

export const GET_SCHOOLS_PROJECTS_QUERY = gql`
	query getSchoolsProjects($locale: I18NLocaleCode!) {
		schoolProjects(locale: $locale) {
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
