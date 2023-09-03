import userModel from "../../models/user.model.js";

const userResolver = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUser: async (_, args) => {
      const { username } = args.username;
      try {
        const user = await userModel.findOne({ username: username });
        if (user) {
          createError("user not available.", BAD_USER_INPUT);
        }
        const newUser = new userModel({ username });
        const newUserName = await newUser.save();
        return {
          success: true,
          ...newUserName,
        };
      } catch (error) {}
    },
  },
  // Subscriptions: {},
};

export default userResolver;
