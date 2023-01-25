import { useQueryAllPets } from "./hooks/useQueryAllPets";

const List = () => {
	const { loading, error, pets } = useQueryAllPets();
	const content = pets
		? pets.map(({ id, name, weight }) => (
				<li key={id}>
					Name: {name}, weight: {weight}
				</li>
		  ))
		: null;
	return (
		<>
			<h2>Pets list</h2>
			<ul>
				{loading ? <p>Loading...</p> : null}
				{error ? <p>Error : {error.message}</p> : null}
				{content}
			</ul>
		</>
	);
};

export default List;
