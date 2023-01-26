import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryAllCustomers = loader("./gql/queryAllCustomers.graphql");

export const useQueryAllCustomers = () => {
	const { loading, error, data } = useQuery(queryAllCustomers);

	return {
		loading,
		error,
		customers: data?.allCustomers,
	};
};
