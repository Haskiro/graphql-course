import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

// GraphQL server
const root = "funded-pet-library.moonhighway.com/";

const uri = `https://${root}`;
const httpLink = new HttpLink({
	uri,
});
const wsLink = new GraphQLWsLink(
	createClient({
		uri: `wss://${root}graphql`,
	})
);

// Auth
const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const wrappedHttpLink = authLink.concat(httpLink);

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	wrappedHttpLink
);

// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
	link: splitLink,
	cache,
});
