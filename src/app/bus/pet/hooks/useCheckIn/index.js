import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";

const mutationCheckIn = loader("./gql/mutationCheckIn.graphql");

export const useCheckIn = () => {
	const [_checkIn, { loading, error, data }] = useMutation(mutationCheckIn);

	const checkIn = (id) => {
		_checkIn({
			variables: {
				id,
			},
		});
	};

	return {
		checkIn,
		loading,
		error,
		pet: data?.checkIn.pet,
	};
};
