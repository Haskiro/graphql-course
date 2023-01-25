import { ApolloClient, InMemoryCache } from "@apollo/client";

// GraphQL server

const uri = "https://funded-pet-library.moonhighway.com/";

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
