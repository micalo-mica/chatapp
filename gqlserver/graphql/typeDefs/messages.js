import gql from "graphql-tag";

const messageSchema = gql`
  type Message {
    _id: String
    conversationId: String
    message: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

export default messageSchema;
