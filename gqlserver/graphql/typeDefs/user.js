import gql from "graphql-tag";

const userSchema = gql`
  type User {
    _id: String
    username: String
  }
  type Query {
    searchUsers(username: String): [User]
  }
`;
export default userSchema;
