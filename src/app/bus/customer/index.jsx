import List from "./list";
import Login from "./logIn";
import Register from "./register";

const Customer = () => {
	return (
		<>
			<h1>Customer</h1>
			<Register />
			<Login />
			<List />
		</>
	);
};

export default Customer;
