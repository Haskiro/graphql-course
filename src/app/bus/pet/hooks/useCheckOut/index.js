import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { queryAllAvailablePets } from "../useQueryAllAvailablePets";
import { queryAllCheckedOutPets } from "../useQueryAllCheckedOutPets";

const mutationCheckOut = loader("./gql/mutationCheckOut.graphql");

export const useCheckOut = () => {
	const [_checkOut, { loading, error, data }] = useMutation(
		mutationCheckOut,
		{
			update(cache, { data }) {
				const { allCheckedOutPets } = cache.readQuery({
					query: queryAllCheckedOutPets,
				});
				cache.writeQuery({
					query: queryAllCheckedOutPets,
					data: {
						allCheckedOutPets: [
							data.checkOut.pet,
							...allCheckedOutPets,
						],
					},
				});

				const { allAvailablePets } = cache.readQuery({
					query: queryAllAvailablePets,
				});
				cache.writeQuery({
					query: queryAllAvailablePets,
					data: {
						allAvailablePets: allAvailablePets.filter(
							(item) => item.id !== data.checkOut.pet.id
						),
					},
				});
			},
		}
	);

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
