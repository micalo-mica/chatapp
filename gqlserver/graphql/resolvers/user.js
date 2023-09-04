import { GraphQLError } from "graphql";
import userModel from "../../models/user.model.js";
import { isUserFound } from "../../helpers/funcs/user.helpers.js";

const userResolver = {
  Query: {
    searchUsers: async (_, args, context) => {
      const { username } = args;
      const { user } = context;
      try {
        const foundCurrentUser = await isUserFound(user._id);
        if (!foundCurrentUser) {
          throw new GraphQLError("Invalid email or password entered.", {
            extensions: {
              code: "BAD_USER_INPUT",
            },
          });
        }

        console.log(foundCurrentUser);
      } catch (error) {
        throw new GraphQLError("Something went wrong.", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
  },
};

export default userResolver;
