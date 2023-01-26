import Counter from "./counter";
import List from "./list";
import Profile from "./profile";
import SpecialList from "./specialList";

const Pet = () => {
	return (
		<>
			<h1>Pet</h1>
			<Profile />
			<Counter />
			<List />
			<SpecialList />
		</>
	);
};

export default Pet;
