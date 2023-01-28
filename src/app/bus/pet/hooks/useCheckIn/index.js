import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { queryAllAvailablePets } from "../useQueryAllAvailablePets";
import { queryAllCheckedOutPets } from "../useQueryAllCheckedOutPets";

const mutationCheckIn = loader("./gql/mutationCheckIn.graphql");

export const useCheckIn = () => {
	const [_checkIn, { loading, error, data }] = useMutation(mutationCheckIn, {
		refetchQueries: [
			{
				query: queryAllAvailablePets,
			},
			{
				query: queryAllCheckedOutPets,
			},
		],
	});

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
