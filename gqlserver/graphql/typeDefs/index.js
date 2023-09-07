import authSchema from "./auth.js";
import conversationSchema from "./conversation.js";
import messageSchema from "./messages.js";
import userSchema from "./user.js";

const typeDefs = [authSchema, userSchema, conversationSchema, messageSchema];

export default typeDefs;
