import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";

// GraphQL server
const root = "funded-pet-library.moonhighway.com/";

// HTTP
const uri = `https://${root}`;
const httpLink = new HttpLink({
	uri,
});

// WS
const wsLink = new WebSocketLink(
	new SubscriptionClient(`wss://${root}graphql`, {
		reconnect: true,
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
