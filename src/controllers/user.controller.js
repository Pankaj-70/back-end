import {asyncHandler} from "../utils/asyncHandlers.js"

const registerUser=asyncHandler (async (req,res)=>{
    /*
                Get details from user
                validation-not empty
                check if user exists: username,email
                check for images,avatar
                upload them to cloudinary,avatar
                create user object- create entry in db
                remove passwords and refresh token field in response
                check for user creatidon
                return response
            */
            const {email,username,fullName,password}=req.body;
            
})

export {registerUser}
        
