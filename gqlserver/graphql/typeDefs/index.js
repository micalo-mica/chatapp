import authSchema from "./auth.js";
import conversationSchema from "./conversation.js";
import userSchema from "./user.js";

const typeDefs = [authSchema, userSchema, conversationSchema];

export default typeDefs;
