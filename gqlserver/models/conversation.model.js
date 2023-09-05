import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    userId: {
      type: [String],
      required: true,
      unique: true,
    },
    participantsId: {
      type: [String],
      required: true,
      unique: true,
    },
    lastMessage: {
      type: String,
      required: true,
      unique: true,
    },
    hasSeenLatestMessage: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("conversation", conversationSchema);
