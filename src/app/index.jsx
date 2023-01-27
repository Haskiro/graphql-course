import Customer from "./bus/customer";
import Login from "./bus/customer/logIn";
import Pet from "./bus/pet";

const App = () => {
	return (
		<>
			<Login />
			<Pet />
			{/* <Customer /> */}
		</>
	);
};

export default App;
