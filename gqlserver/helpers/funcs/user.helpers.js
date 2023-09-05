import { GraphQLError } from "graphql";
import userModel from "../../models/user.model.js";

export const isUserFound = async (id) => {
  const foundCurrentUser = await userModel.findById(id);
  if (foundCurrentUser) {
    return foundCurrentUser;
  } else {
    return false;
  }
};

// get the search user
export const getSearchUser = async (username, currentUser) => {
  if (username) {
  }
  const searchUser = await userModel.find({
    username: { $regex: username, $options: "i" },
    username: { $ne: currentUser },
  });
  console.log(searchUser);
  if (!searchUser) {
    throw new GraphQLError("Username not found.", {
      extensions: {
        code: "BAD_USER_INPUT",
      },
    });
  } else {
    return searchUser;
  }
};
