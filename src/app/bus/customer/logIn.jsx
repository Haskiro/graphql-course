import { useLoginCustomer } from "./hooks/useLogInCustomer";

const Login = () => {
	const { handleChange, logIn, loading, error, authenticatedUser } =
		useLoginCustomer();

	return (
		<>
			<h2>Log in customer</h2>
			<form>
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
				<button type="submit" onClick={logIn}>
					Log in
				</button>
			</form>
			{loading ? <p>Идет проверка пользователя...</p> : null}
			{error ? <p>Error : {error.message}</p> : null}
			{authenticatedUser ? (
				<p>
					Добро пожаловать! <br />
					Authenticated Account: name - {authenticatedUser.name},
					username - {authenticatedUser.username}
				</p>
			) : null}
		</>
	);
};

export default Login;
