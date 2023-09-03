import gql from "graphql-tag";

const userSchema = gql`
  type User {
    id: String
    name: String
  }
  type Query {
    searchUsers(username: String): [User]
  }

  type CreateUsernameResponse {
    _id: String
    username: String
    success: Boolean
  }

  type Mutation {
    createUser(username: String): CreateUsernameResponse
  }
`;
export default userSchema;
