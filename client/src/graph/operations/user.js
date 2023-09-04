import { gql } from "@apollo/client";

// for query========================================================================
export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// for mutations =================================================================

// register
export const ADD_SIGN_UP = gql`
  mutation RegisterUser($register: SignupInput!) {
    addRegister(register: $register) {
      success
      msg
    }
  }
`;

// login
export const ADD_LOGIN = gql`
  mutation LoginUser($login: LoginInput!) {
    addLogin(login: $login) {
      success
      credential {
        _id
        username
        name
        email
        createdAt
        updatedAt
        token
      }
    }
  }
`;

// search user
export const SEARCH_USER = gql`
  query addSearchUser($username: String) {
    searchUsers(username: $username) {
      _id
      username
    }
  }
`;
