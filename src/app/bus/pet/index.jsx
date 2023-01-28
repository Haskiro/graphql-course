import CheckInPet from "./chekInPet";
import CheckOutPet from "./chekOutPet";
// import Counter from "./counter";
import Profile from "./profile";
// import List from "./list";
// import SpecialList from "./specialList";

const Pet = () => {
	return (
		<>
			<h1>Pet</h1>

			<CheckOutPet />
			<CheckInPet />
			<Profile />
			{/* <Counter /> */}
			{/* <List />
			<SpecialList /> */}
		</>
	);
};

export default Pet;
