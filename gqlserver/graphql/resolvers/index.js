import authResolver from "./auth.js";
import conversationResolvers from "./conversation.js";
import userResolver from "./user.js";
import merge from "lodash.merge";

const resolvers = merge({}, userResolver, authResolver, conversationResolvers);

export default resolvers;
