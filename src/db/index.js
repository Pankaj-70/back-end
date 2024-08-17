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