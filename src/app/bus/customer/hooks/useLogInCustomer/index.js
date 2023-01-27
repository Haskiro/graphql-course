import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { useEffect, useState } from "react";
import { useForm } from "../useForm";

const mutationLogIn = loader("./gql/mutationLogIn.graphql");

export const useLoginCustomer = () => {
	const [logInCustomer, { loading, error, data }] =
		useMutation(mutationLogIn);

	const { form, handleChange } = useForm({
		username: "",
		password: "",
	});

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (data && data.logIn.token !== token)
			localStorage.setItem("token", data.logIn.token);
	}, [data]);

	const logIn = (event) => {
		event.preventDefault();

		logInCustomer({
			variables: form,
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
