import { useQueryPetById } from "./hooks/useQueryPetById";

const Profile = () => {
	const { getPetById, loading, error, pet } = useQueryPetById();

	return (
		<>
			<h2>Pet profile</h2>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{pet ? (
				<p>
					Pet name: {pet.name}, id: {pet.id}
				</p>
			) : null}
			<button onClick={() => getPetById({ variables: { id: "C-2" } })}>
				Download
			</button>
		</>
	);
};

export default Profile;
