import { gql } from '@urql/core';

export const GET_TECHNOS_QUERY = gql`
	query getTechnos {
		technos(pagination: { page: 1, pageSize: 50 }) {
			data {
				attributes {
					name
					slug
					color
				}
			}
		}
	}
`;
