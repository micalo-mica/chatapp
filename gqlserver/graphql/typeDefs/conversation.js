import gql from "graphql-tag";

const conversationSchema = gql`
  type Mutation {
    createConversation(participantIds: [String]): createConversationResponse
  }

  type createConversationResponse {
    conversationId: String
  }
`;

export default conversationSchema;
