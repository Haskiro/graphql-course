import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
export const queryAllAvailablePets = loader(
	"./gql/queryAllAvailablePets.graphql"
);

export const useQueryAllAvailablePets = () => {
	const { loading, error, data } = useQuery(queryAllAvailablePets, {
		pollInterval: 500,
	});

	return {
		loading,
		error,
		pets: data?.allAvailablePets,
	};
};
