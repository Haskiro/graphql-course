import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { useEffect, useState } from "react";

const mutationLogIn = loader("./gql/mutationLogIn.graphql");

export const useLoginCustomer = () => {
	const [logInCustomer, { loading, error, data }] =
		useMutation(mutationLogIn);
	const [values, setValues] = useState({
		username: "",
		password: "",
	});

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (data && data.logIn.token !== token)
			localStorage.setItem("token", data.logIn.token);
	}, [data]);

	const handleChange = (event) => {
		setValues((prevValues) => ({
			...prevValues,
			[event.target.name]: event.target.value,
		}));
	};

	const logIn = async (event) => {
		event.preventDefault();

		await logInCustomer({
			variables: values,
		});
	};

	return {
		loading,
		error,
		authenticatedUser: data?.logIn.customer,
		handleChange,
		logIn,
	};
};
