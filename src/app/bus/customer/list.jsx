import { useQueryAllCustomers } from "./hooks/useQueryAllCustomers";

const List = () => {
	const { loading, error, customers } = useQueryAllCustomers();
	const content = customers
		? customers.map(({ username, name, dateCreated }) => (
				<li key={username}>
					Name: {name}, date created: {dateCreated}
				</li>
		  ))
		: null;
	return (
		<>
			<h2>Customers list</h2>
			<ul>
				{loading ? <p>Loading...</p> : null}
				{error ? <p>Error : {error.message}</p> : null}
				{content}
			</ul>
		</>
	);
};

export default List;
