import { useCustomer } from "./hooks/useCustomer";
import List from "./list";

const Customer = () => {
	const { handleChange, save, loading, error, createdAccount } =
		useCustomer();

	return (
		<>
			<h1>Customer</h1>
			<h2>Register customer</h2>
			<form>
				<input
					type="text"
					name="name"
					placeholder="name"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="username"
					placeholder="username"
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					onChange={handleChange}
				/>
				<button type="submit" onClick={save}>
					Save
				</button>
			</form>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{createdAccount ? (
				<p>
					Created Account: name - {createdAccount.name}, username -{" "}
					{createdAccount.username}
				</p>
			) : null}
			<List />
		</>
	);
};

export default Customer;
