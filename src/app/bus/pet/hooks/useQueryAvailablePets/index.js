import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
const queryAvailablePets = loader("./gql/queryAvailablePets.graphql");
// const GET_AVAILABLE_PETS = gql`
// 	query availablePets {
// 		availablePets
// 	}
// `;

export const useQueryAvailablePets = () => {
	return useQuery(queryAvailablePets);

	// Options
	// {
	// 	pollInterval: 500,
	// 	skip: true
	// }

	// return useQuery(GET_AVAILABLE_PETS)
};
