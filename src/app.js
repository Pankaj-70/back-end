import express from "express"
<<<<<<< HEAD


const app=express()

export {app}
=======
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

export {app};
>>>>>>> e5d246f1a80d1cbd2d887d1d54e34d8789ff2146
