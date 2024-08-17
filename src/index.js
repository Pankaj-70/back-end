<<<<<<< HEAD
import connectDatabase from "./db/index.js";
import dotenv from "dotenv"
import {app} from "./app.js"
=======
import connectionDB from "./db/index.js";
import dotenv from "dotenv"
>>>>>>> e5d246f1a80d1cbd2d887d1d54e34d8789ff2146

dotenv.config({
    path:'./.env'
})

<<<<<<< HEAD
connectDatabase()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server started at:",process.env.PORT);
    })
})
.catch((error)=>{
    console.log("An error occured which joining: ",error);
})
=======
connectionDB()
.then(()=>{   
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server started at: ",process.env.PORT);
    })
})
.catch((error)=>{
    console.log("error in connecting to database");
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
>>>>>>> e5d246f1a80d1cbd2d887d1d54e34d8789ff2146
