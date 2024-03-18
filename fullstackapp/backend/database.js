import mongoose from "mongoose";

const initdb = async () => {
  try {
    const connectInstance = await mongoose.connect(
      "mongodb://127.0.0.1:27017/admin"
    );
    console.log("CONNECTED TO DB - ", connectInstance);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default initdb;
