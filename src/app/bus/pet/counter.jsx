import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets";

const Counter = () => {
	const { loading, error, data, refetch, networkStatus } =
		useQueryAvailablePets();
	console.log(networkStatus);
	return (
		<>
			<h2>Counter</h2>
			{loading ? <p>Loading...</p> : null}
			{networkStatus === 4 ? <p>Refetching</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{data ? <p>Available Pets : {data.availablePets}</p> : null}
			<button type="button" onClick={() => refetch()}>
				Refetch
			</button>
		</>
	);
};

export default Counter;
