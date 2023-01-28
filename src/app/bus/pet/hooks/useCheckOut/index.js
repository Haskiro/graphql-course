import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";

const mutationCheckOut = loader("./gql/mutationCheckOut.graphql");

export const useCheckOut = () => {
	const [_checkOut, { loading, error, data }] = useMutation(mutationCheckOut);

	const checkOut = (id) => {
		_checkOut({
			variables: {
				id,
			},
		});
	};

	return {
		checkOut,
		loading,
		error,
		pet: data?.checkOut.pet,
		customer: data?.checkOut.customer,
	};
};
