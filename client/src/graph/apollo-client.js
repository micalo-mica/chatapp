import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// import { split, HttpLink } from '@apollo/client';

const authLink = setContext((_, { headers }) => {
  // const { state } = useContext(AuthContext);
  // console.log(state.user.token);
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem("user");
  const token = localStorage.getItem("user");
  // const { token } = user;
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

export const client = new ApolloClient({
  // link: httpLink,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
