import { gql } from '@urql/core';

export const GET_JOBS_QUERY = gql`
	query getJobs($locale: I18NLocaleCode) {
		jobs(locale: $locale, sort: "startDate:desc", pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					title
					location
					startDate
					endDate
					slug
					pictureUrl
					companyName
					picture {
						data {
							attributes {
								name
								url
							}
						}
					}
					jobMissions(sort: "order:asc", pagination: { page: 1, pageSize: 50 }) {
						data {
							attributes {
								title
								url
								order
								urlName
								slug
							}
						}
					}
					jobSkills {
						data {
							attributes {
								name
								slug
								category
							}
						}
					}
				}
			}
		}
	}
`;
