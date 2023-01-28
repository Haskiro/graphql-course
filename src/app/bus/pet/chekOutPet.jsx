import Dropdown from "./dropdown";
import { useCheckOut } from "./hooks/useCheckOut";
import { useQueryAllAvailablePets } from "./hooks/useQueryAllAvailablePets";

const CheckOutPet = () => {
	const { checkOut, loading, error, pet, customer } = useCheckOut();
	return (
		<>
			<h2>Check Out Pet</h2>
			<Dropdown submit={checkOut} useHook={useQueryAllAvailablePets} />
			{loading ? <p>Идет проверка пользователя...</p> : null}
			{error ? <p>Ошибка : {error.message}</p> : null}
			{pet ? (
				<p>
					Pet name: {pet.name}, id: {pet.id}
				</p>
			) : null}
			{customer ? <p>Customer: {customer.name}</p> : null}
		</>
	);
};

export default CheckOutPet;
