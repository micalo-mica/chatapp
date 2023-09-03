import { GraphQLError } from "graphql";

//throwCustomError function
const createError = (errorMessage, errorType) => {
  // console.log('Throwing custom error');
  // console.log('Error types in custom: ', errorType);
  throw new GraphQLError(errorMessage, {
    extensions: {
      code: errorType.errorCode,
      http: {
        status: errorType.errorStatus,
      },
    },
  });
};

export default createError;
