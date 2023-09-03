import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";

const getUser = async (token) => {
  try {
    if (token) {
      const user = jwt.verify(token, process.env.JWT_KEY);
      return user;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const generateUserAuth = async ({ req }) => {
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
  const splitToken = token.split(" ")[1];

  // try to retrieve a user with the token
  const user = await getUser(splitToken);

  if (!user) {
    throw new GraphQLError("You are not authorized to perform this action.", {
      extensions: {
        code: "FORBIDDEN",
      },
    });
  }

  // add the user to the context
  return { user };
};

export default generateUserAuth;
