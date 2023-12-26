import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://ap-south-1.cdn.hygraph.com/content/clozk8xcv36fw01uk9l1p3inv/master`,

  cache: new InMemoryCache(),
});

export default client;
