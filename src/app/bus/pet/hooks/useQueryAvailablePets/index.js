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
	// return useQuery(GET_AVAILABLE_PETS)
};
