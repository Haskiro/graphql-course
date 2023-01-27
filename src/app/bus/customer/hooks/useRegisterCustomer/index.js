import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { useState } from "react";

const mutationCreateAccount = loader("./gql/mutationCreateAccount.graphql");

export const useRegisterCustomer = () => {
	const [createAccount, { loading, error, data }] = useMutation(
		mutationCreateAccount
	);

	const [values, setValues] = useState({
		account: {
			name: "",
			username: "",
			password: "",
		},
	});

	const handleChange = (event) => {
		setValues((prevValues) => ({
			account: {
				...prevValues.account,
				[event.target.name]: event.target.value,
			},
		}));
	};

	const save = (event) => {
		event.preventDefault();
		const { account } = values;

		createAccount({
			variables: {
				account,
			},
		});
	};

	return {
		handleChange,
		save,
		loading,
		error,
		createdAccount: data?.createAccount,
	};
};
