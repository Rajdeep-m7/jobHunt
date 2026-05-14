import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("database connected"),
    );
    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (error) {
    console.log(error.message)
  }
};

export default connectDb;
