import authResolver from "./auth.js";
import userResolver from "./user.js";
import merge from "lodash.merge";

const resolvers = merge({}, userResolver, authResolver);

export default resolvers;
