import gql from "graphql-tag";

const conversationSchema = gql`
  scalar DateTime

  type Conversation {
    _id: String
    # lastMessage: Message
    # participants: [Participant]
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Participant {
    _id: String
    username: String!
    email: String
    name: String
  }

  type Query {
    conversations: [Conversation]
  }

  type Mutation {
    createConversation(participantIds: [String!]): CreateConversationResponse
  }

  type Subscription {
    conversationCreated: Conversation
  }

  type CreateConversationResponse {
    aConversationId: String
  }
`;

export default conversationSchema;
