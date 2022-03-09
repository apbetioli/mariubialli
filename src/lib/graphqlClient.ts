import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: process.env.GRAPHQL_CONTENT_ENDPOINT,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      /* As we are only doing ssg lets not worry about caching now */
      fetchPolicy: "network-only",
    },
  },
});

export default client;
