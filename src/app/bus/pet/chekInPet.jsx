import { useCheckIn } from "./hooks/useCheckIn";

const CheckInPet = () => {
	const { checkIn, loading, error, pet } = useCheckIn();

	return (
		<>
			<h2>Check In Pet</h2>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{pet ? (
				<p>
					Pet name: {pet.name}, id: {pet.id}
				</p>
			) : null}
			<button onClick={() => checkIn("C-5")}>Check In</button>
		</>
	);
};

export default CheckInPet;
