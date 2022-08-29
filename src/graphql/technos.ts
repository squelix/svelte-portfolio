import { gql } from '@urql/svelte';

export const GET_TECHNOS_QUERY = gql`
	query getTechnos {
		technos {
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
