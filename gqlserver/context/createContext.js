import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";

const getUser = async (token) => {
  const splitToken = token.split(" ")[1];
  try {
    if (splitToken) {
      const user = jwt.verify(splitToken, process.env.JWT_KEY);
      return user;
      console.log(user);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const createContext = async (req, pubsub) => {
  //   console.log(req.body.operationName);
  if (req.body.operationName === "IntrospectionQuery") {
    // console.log('blocking introspection query..');
    return {};
  }
  // allowing the 'CreateUser' and 'Login' queries to pass without giving the token
  if (
    req.body.operationName === "RegisterUser" ||
    req.body.operationName === "LoginUser"
  ) {
    return {};
  }

  // get the user token from the headers
  const token = req.headers.authorization || "";

  // try to retrieve a user with the token
  const user = await getUser(token);

  if (!user) {
    throw new GraphQLError("You are not authorized to perform this action.", {
      extensions: {
        code: "FORBIDDEN",
      },
    });
  }

  // add the user to the context
  return { user, pubsub };
};

export default createContext;
