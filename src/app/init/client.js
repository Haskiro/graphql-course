import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// GraphQL server
const uri = "https://funded-pet-library.moonhighway.com/";
const httpLink = new HttpLink({
	uri,
});

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

// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
});
