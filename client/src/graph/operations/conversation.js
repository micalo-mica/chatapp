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

// get user conversation
export const GET_CONVERSATION = gql`
  query GetUserConversation {
    conversations {
      _id
    }
  }
`;

// subscription
export const GET_CONVERSATIONCREATED = gql`
  subscription ConversationCreated {
    conversationCreated {
      _id
    }
  }
`;
