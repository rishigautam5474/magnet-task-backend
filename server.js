import mongoose from "mongoose";

const mongoDbConnected = async (uri) => {
  return await mongoose.connect(uri);
};

export default mongoDbConnected;
