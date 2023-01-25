import { useQueryAllAvailablePets } from "./hooks/useQueryAllAvailablePets";

const SpecialList = () => {
	const { getAllAvailablePets, loading, error, pets } =
		useQueryAllAvailablePets();

	const content = pets
		? pets.map(({ id, name, weight }) => (
				<li key={id}>
					Name: {name}, weight: {weight}
				</li>
		  ))
		: null;

	return (
		<>
			<h2>Special List</h2>
			<ul>
				{loading ? <p>Loading...</p> : null}
				{error ? <p>Error : {error.message}</p> : null}
				{content}
			</ul>
			<button onClick={getAllAvailablePets}>Download</button>
		</>
	);
};

export default SpecialList;
