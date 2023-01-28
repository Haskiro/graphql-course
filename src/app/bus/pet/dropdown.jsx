import { useRef } from "react";

const Dropdown = ({ submit, useHook }) => {
	const { loading, error, pets } = useHook();
	const select = useRef(null);

	const dropdown = pets ? (
		<>
			<select name="check" id="pet-select" defaultValue="" ref={select}>
				<option value="" disabled defaultChecked>
					--Please choose a pet--
				</option>
				{pets.map(({ id, name, weight }) => (
					<option value={id} key={id}>
						Name: {name}, weight: {weight}
					</option>
				))}
			</select>
			<button onClick={() => submit(select.current.value)}>Submit</button>
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
