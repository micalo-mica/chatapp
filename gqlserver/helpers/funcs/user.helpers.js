import userModel from "../../models/user.model.js";

export const isUserFound = async (id) => {
  const foundCurrentUser = await userModel.findById(id);
  if (foundCurrentUser) {
    return foundCurrentUser;
  } else {
    return false;
  }
};
