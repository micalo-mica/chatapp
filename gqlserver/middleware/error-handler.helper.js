import { ApolloServerErrorCode } from "@apollo/server/errors";

export const BAD_USER_INPUT = {
  errorCode: ApolloServerErrorCode.BAD_USER_INPUT,
  errorStatus: 400,
};

export const BAD_REQUEST = {
  errorCode: ApolloServerErrorCode.BAD_REQUEST,
  errorStatus: 400,
};

export const NOT_FOUND = {
  errorCode: "NOT_FOUND",
  errorStatus: 404,
};

export const UNAUTHENTICATED = {
  errorCode: "UNAUTHENTICATED",
  errorStatus: 401,
};

export const ALREADY_EXISTS = {
  errorCode: "ALREADY_EXISTS",
  errorStatus: 400,
};

export const INTERNAL_SERVER_ERROR = {
  errorCode: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
  errorStatus: 500,
};
