import { GraphQLError } from "graphql";
import userModel from "../../models/user.model.js";
import {
  getSearchUser,
  isUserFound,
} from "../../helpers/funcs/user.helpers.js";

const userResolver = {
  Query: {
    searchUsers: async (_, args, context) => {
      const { username } = args;
      const { user } = context;
      const currentUser = user.username;

      try {
        // check user in our data base
        const foundCurrentUser = await isUserFound(user._id);
        if (!foundCurrentUser) {
          throw new GraphQLError("Bad activity.", {
            extensions: {
              code: "BAD_USER_INPUT",
            },
          });
        }
        // get search user
        const searchUser = await getSearchUser(username, currentUser);
        if (!searchUser) {
          throw new GraphQLError("User not found, try another username.", {
            extensions: {
              code: "BAD_USER_INPUT",
            },
          });
        }

        return searchUser;
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
