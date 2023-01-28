import { useForm } from "../customer/hooks/useForm";

const Dropdown = ({ submit, useHook }) => {
	const { loading, error, pets } = useHook();

	const { form, handleChange } = useForm({
		check: "",
	});

	const dropdown = pets ? (
		<>
			<select
				name="check"
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
			<button onClick={() => submit(form.check)}>Check In</button>
		</>
	) : null;

	return (
		<>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{dropdown}
		</>
	);
};

export default Dropdown;
