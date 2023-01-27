import CheckInPet from "./chekInPet";
import Counter from "./counter";
import Profile from "./profile";
// import List from "./list";
// import SpecialList from "./specialList";

const Pet = () => {
	return (
		<>
			<h1>Pet</h1>
			<CheckInPet />
			<Profile />
			<Counter />
			{/* <List />
			<SpecialList /> */}
		</>
	);
};

export default Pet;
