import mongoose from "mongoose";

const connectMongoDB = mongoose.connect(process.env.MONGODB, {
  autoIndex: true,
});

export default connectMongoDB;
