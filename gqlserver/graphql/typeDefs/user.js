import gql from "graphql-tag";

const userSchema = gql`
  type SearchUser {
    _id: String
    username: String
  }
  type Query {
    searchUsers(username: String): [SearchUser]
  }
`;
export default userSchema;
