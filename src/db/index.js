import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

const connectionDB = async () => {
  try {
    await dotenv.config({ path: '../.env' }); 
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    console.log(`MongoDB connected :: connectionInstance: ${connectionInstance}`);
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

export default connectionDB;
