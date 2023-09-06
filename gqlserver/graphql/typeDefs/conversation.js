import gql from "graphql-tag";

const conversationSchema = gql`
  type Mutation {
    createConversation(participantIds: [String!]): createConversationResponse
  }

  type createConversationResponse {
    aConversationId: String
  }
`;

export default conversationSchema;
