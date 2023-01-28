import Dropdown from "./dropdown";
import { useCheckIn } from "./hooks/useCheckIn";
import { useQueryAllCheckedOutPets } from "./hooks/useQueryAllCheckedOutPets";

const CheckInPet = () => {
	const { checkIn, loading, error, pet } = useCheckIn();
	return (
		<>
			<h2>Check In Pet</h2>
			<Dropdown submit={checkIn} useHook={useQueryAllCheckedOutPets} />
			{loading ? <p>Идет проверка пользователя...</p> : null}
			{error ? <p>Ошибка : {error.message}</p> : null}
			{pet ? (
				<p>
					Pet name: {pet.name}, id: {pet.id}
				</p>
			) : null}
		</>
	);
};

export default CheckInPet;
