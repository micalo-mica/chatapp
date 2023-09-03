import UserModel from "../../models/user.model.js";
import createError from "../../middleware/createError.js";
import {
  ALREADY_EXISTS,
  BAD_USER_INPUT,
} from "../../middleware/error-handler.helper.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authResolver = {
  // Query: {},
  Mutation: {
    addRegister: async (_, { register }) => {
      // coming data
      const { username, name, email, password } = register;

      // check for user in db
      const isUserExists = await UserModel.findOne({ email });
      if (isUserExists) {
        createError("user already exists!", ALREADY_EXISTS);
      }

      // to hash
      const hash = bcrypt.hashSync(password, 5);
      const userToCreate = new UserModel({
        username: username,
        name: name,
        email: email,
        dbPassword: hash,
      });
      // const user = await userToCreate.save();
      await userToCreate.save();

      return {
        success: true,
        msg: "Thank for registering",
      };
    },

    addLogin: async (_, { login }) => {
      const { email, password } = login;
      const user = await UserModel.findOne({
        email: email,
      });

      if (!user) {
        createError("Invalid email or password entered.", BAD_USER_INPUT);
      }

      // compare
      const isCorrect = bcrypt.compareSync(password, user.dbPassword);
      if (!isCorrect) {
        createError("Invalid email or password entered.", BAD_USER_INPUT);
      }

      // send user detele
      const { dbPassword, ...info } = user._doc;

      const token = jwt.sign({ ...info }, process.env.JWT_KEY);

      return {
        success: true,
        credential: {
          ...info,
          token,
        },
        // userJwtToken: {
        //   token: token,
        // },
      };
    },
  },
};
export default authResolver;
