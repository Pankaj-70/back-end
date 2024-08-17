<<<<<<< HEAD
import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDatabase=async ()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
                  
    } catch (error) {
        console.log("Error hai: ",error);
        process.exit(1);
    }
}

export default connectDatabase
=======
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
>>>>>>> e5d246f1a80d1cbd2d887d1d54e34d8789ff2146
