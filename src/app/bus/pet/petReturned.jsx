import { usePetReturned } from "./hooks/usePetReturned";

const PetReturned = () => {
	const { loading, error, pet } = usePetReturned();

	return (
		<>
			<h2>Pet Returned</h2>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{pet ? (
				<p>
					Pet changed: Name - {pet.name}, id - {pet.id}
				</p>
			) : null}
		</>
	);
};

export default PetReturned;
