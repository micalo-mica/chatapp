import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationParticipantSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    conversationId: {
      type: String,
      required: true,
    },
    hasSeenLatestMessage: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "ConversationParticipant",
  conversationParticipantSchema
);
