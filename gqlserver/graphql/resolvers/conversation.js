import { GraphQLError } from "graphql";
import ConversationModal from "../../models/conversation.model.js";
import ConversationParticipantModal from "../../models/conversationParticipant.model.js";

const conversationResolvers = {
  // Query:{},
  Mutation: {
    createConversation: async (parent, args, context) => {
      const {
        user: { _id: currentUserId },
      } = context;
      const { participantIds } = args;
      const id = participantIds.filter((id) => {
        return id === currentUserId;
      });
      const newConversation = new ConversationModal({
        participantsIds: participantIds,
        // hasSeenLatestMessage: id.toString() === currentUserId,
      });

      try {
        const savConversation = await newConversation.save();

        if (!savConversation._id) {
          throw new GraphQLError("Something went wrong", {
            extensions: {
              code: "BAD_USER_INPUT",
            },
          });
        }
        // const { _id: conversation_id } = savConversation;
        //   for participants, turn to array
        const turnToArray = participantIds.map((id) => ({
          userId: id,
          conversationId: savConversation._id.toString(),
          hasSeenLatestMessage: id === currentUserId,
        }));
        // console.log(savConversation._id.toString());
        // then save the participants
        const saveParticipants = await ConversationParticipantModal.insertMany(
          turnToArray
        );
        console.log(saveParticipants);
      } catch (error) {}
    },
  },
};

export default conversationResolvers;
