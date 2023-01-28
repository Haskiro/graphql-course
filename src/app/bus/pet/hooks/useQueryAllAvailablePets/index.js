import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
const queryAllAvailablePets = loader("./gql/queryAllAvailablePets.graphql");

export const useQueryAllAvailablePets = () => {
	const { loading, error, data } = useQuery(queryAllAvailablePets);

	return {
		loading,
		error,
		pets: data?.allAvailablePets,
	};
};
