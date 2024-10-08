import connectDatabase from "./db/index.js";
import dotenv from "dotenv"
import {app} from "./app.js"

dotenv.config({
    path:'./.env'
})

connectDatabase()
.then(()=>{   
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server started at: ",process.env.PORT);
    })
})
.catch((error)=>{
    console.log("error in connecting to database: ",error);
})












// import express from "express"
// const app=express()

// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(err)=>{
//             console.log(err);
//             throw err;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`The server started at ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error:", error)
//         throw error
//     }
// })()