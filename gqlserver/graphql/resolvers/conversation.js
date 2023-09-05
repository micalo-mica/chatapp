const conversationResolvers = {
  // Query:{},
  Mutation: {
    createConversation: async (parent, args) => {
      const { participantIds } = args;

      console.log("createConversation", participantIds);
    },
  },
};

export default conversationResolvers;
