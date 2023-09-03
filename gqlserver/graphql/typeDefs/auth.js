import { gql } from "graphql-tag";

const authSchema = gql`
  input SignupInput {
    username: String!
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  # type Query {
  #   getUserById(id: ID): String
  # }

  # type JwtToken {
  #   token: String!
  # }

  type UserWithToken {
    _id: String
    username: String!
    email: String
    name: String
    createdAt: String
    updatedAt: String
    token: String
    # userJwtToken: JwtToken
  }

  type RegisterGood {
    success: Boolean
    msg: String
  }

  type LoginGood {
    success: Boolean
    credential: UserWithToken
  }

  type Mutation {
    addRegister(register: SignupInput): RegisterGood
    addLogin(login: LoginInput): LoginGood
  }
`;

export default authSchema;
