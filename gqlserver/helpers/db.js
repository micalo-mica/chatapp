import mongoose from "mongoose";

const connect = async () => {
  try {
    /** 
    u can also connect with your Mongo atlas url below
    */
    await mongoose.connect(process.env.MONGO);
    // await mongoose.connect("mongodb://127.0.0.1:27017/fiver");
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

export default connect;
