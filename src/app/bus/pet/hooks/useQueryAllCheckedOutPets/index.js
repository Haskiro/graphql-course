import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

export const queryAllCheckedOutPets = loader(
	"./gql/queryAllCheckedOutPets.graphql"
);

export const useQueryAllCheckedOutPets = () => {
	const { loading, error, data } = useQuery(queryAllCheckedOutPets, {
		pollInterval: 500,
	});

	return {
		loading,
		error,
		pets: data?.allCheckedOutPets,
	};
};
