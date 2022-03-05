import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_CONTENT_API,
  cache: new InMemoryCache(),
});

export default client;
