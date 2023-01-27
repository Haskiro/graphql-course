import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// GraphQL server
const uri = "https://funded-pet-library.moonhighway.com/";
const link = new HttpLink({
	uri,
});

// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
	link,
	cache,
});
