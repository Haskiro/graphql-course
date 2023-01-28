import CheckInPet from "./chekInPet";
import Counter from "./counter";
import Dropdown from "./dropdown";
import { useCheckIn } from "./hooks/useCheckIn";
import Profile from "./profile";
// import List from "./list";
// import SpecialList from "./specialList";

const Pet = () => {
	const { checkIn, loading, error, pet } = useCheckIn();
	return (
		<>
			<h1>Pet</h1>
			<Dropdown checkIn={checkIn} />
			<CheckInPet loading={loading} error={error} pet={pet} />
			<Profile />
			{/* <Counter /> */}
			{/* <List />
			<SpecialList /> */}
		</>
	);
};

export default Pet;
