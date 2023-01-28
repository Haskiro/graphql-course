import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryAllCheckedOutPets = loader("./gql/queryAllCheckedOutPets.graphql");

export const useQueryAllCheckedOutPets = () => {
	const { loading, error, data } = useQuery(queryAllCheckedOutPets);

	return {
		loading,
		error,
		pets: data?.allCheckedOutPets,
	};
};
