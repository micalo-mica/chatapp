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
        updatedAts
        token
      }
    }
  }
`;

// export const ADD_LOGIN = gql`
//   mutation AddCreateUser($login: LoginInput!) {
//     addLogin(login: $login) {
//       _id
//       name
//       email
//       success
//     }
//   }
// `;

// username
export const ADD_USER_NAME = gql`
  mutation addUserName($username: String) {
    createUser(username: $username) {
      _id
      username
    }
  }
`;
