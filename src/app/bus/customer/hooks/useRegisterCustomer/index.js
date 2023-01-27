import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { useState } from "react";
import { useForm } from "../useForm";

const mutationCreateAccount = loader("./gql/mutationCreateAccount.graphql");

export const useRegisterCustomer = () => {
	const [createAccount, { loading, error, data }] = useMutation(
		mutationCreateAccount
	);
	const { form, handleChange } = useForm({
		name: "",
		username: "",
		password: "",
	});

	const save = (event) => {
		event.preventDefault();

		createAccount({
			variables: {
				account: form,
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
