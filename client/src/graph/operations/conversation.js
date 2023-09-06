import { gql } from "@apollo/client";

// mutation
// create conversation mutation
export const CREATE_CONVERSATION = gql`
  mutation CreateConversation($participantIds: [String!]) {
    createConversation(participantIds: $participantIds) {
      aConversationId
    }
  }
`;
