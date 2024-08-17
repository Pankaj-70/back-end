import connectDatabase from "./db/index.js";
import dotenv from "dotenv"
import {app} from "./app.js"

dotenv.config({
    path:'./.env'
})

connectDatabase()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server started at:",process.env.PORT);
    })
})
.catch((error)=>{
    console.log("An error occured which joining: ",error);
})