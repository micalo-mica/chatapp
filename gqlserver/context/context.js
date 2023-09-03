import jwt from "jsonwebtoken";
import { UNAUTHENTICATED } from "../middleware/error-handler.helper.js";
import createError from "../middleware/createError.js";

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

const context = async ({ req, res }) => {
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
    createError("User is not Authenticated", UNAUTHENTICATED);
  }

  // add the user to the context
  return { user };
};

export default context;
