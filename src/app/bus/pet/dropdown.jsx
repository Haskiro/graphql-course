import { useEffect } from "react";
import { useForm } from "../customer/hooks/useForm";
import { useQueryAllAvailablePets } from "./hooks/useQueryAllAvailablePets";

const Dropdown = ({ checkIn }) => {
	const { getAllAvailablePets, loading, error, pets } =
		useQueryAllAvailablePets();

	const { form, handleChange } = useForm({
		checkIn: "",
	});

	useEffect(() => {
		getAllAvailablePets();
	}, []);

	const dropdown = pets ? (
		<>
			<select
				name="checkIn"
				id="pet-select"
				defaultValue=""
				onChange={handleChange}
			>
				<option value="" disabled selected>
					--Please choose a pet--
				</option>
				{pets.map(({ id, name, weight }) => (
					<option value={id} key={id}>
						Name: {name}, weight: {weight}
					</option>
				))}
			</select>
			<button onClick={() => checkIn(form.checkIn)}>Check In</button>
		</>
	) : null;

	return (
		<>
			<h2>Check In Pet</h2>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{dropdown}
		</>
	);
};

export default Dropdown;
