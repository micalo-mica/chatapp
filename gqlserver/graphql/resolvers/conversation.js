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

      try {
        // const newConversation = new ConversationModal({
        //   participantsIds: participantIds,
        // });

        // conversation saved in database
        // const savConversation = await newConversation.save();
        console.log(participantIds);
        const savConversation = await ConversationModal.create({
          participantsIds: participantIds,
        });

        if (!savConversation._id) {
          throw new GraphQLError("Something went wrong", {
            extensions: {
              code: "BAD_USER_INPUT",
            },
          });
        }

        // console.log(savConversation._id);
        //   for participants, turn to array
        const turnToArray = participantIds.map((id) => ({
          userId: id,
          conversationId: savConversation._id.toString(),
          hasSeenLatestMessage: id === currentUserId,
        }));
        // participants saved in database
        const saveParticipants = await ConversationParticipantModal.create(
          turnToArray
        );
        // const saveParticipants = await ConversationParticipantModal.insertMany(
        //   turnToArray
        // );
        // console.log(saveParticipants);
        // console.log(savConversation._id.toString());
        // emit conversation event

        return {
          aConversationId: savConversation._id.toString(),
        };
      } catch (error) {}
    },
  },
};

export default conversationResolvers;
