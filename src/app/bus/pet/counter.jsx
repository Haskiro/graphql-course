import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets";

const Counter = () => {
	const { loading, error, data } = useQueryAvailablePets();
	console.log(data?.availablePets);
	return (
		<>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{data ? <p>Available Pets : {data.availablePets}</p> : null}
		</>
	);
};

export default Counter;
