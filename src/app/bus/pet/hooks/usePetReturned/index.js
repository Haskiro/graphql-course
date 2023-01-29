import { useSubscription } from "@apollo/client";
import { gql, loader } from "graphql.macro";

// const subscriptionPetReturned = loader("./gql/subscriptionPetReturned.graphql");

export const usePetReturned = () => {
	const PETS_RETURNED = gql`
		subscription petReturned {
			petReturned {
				pet {
					id
					name
				}
			}
		}
	`;
	const { loading, error, data } = useSubscription(PETS_RETURNED);

	return {
		loading,
		error,
		pet: data?.petReturned.pet,
	};
};
