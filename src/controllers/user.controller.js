import {asyncHandler} from "../utils/asyncHandlers.js"
import {ApiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import { uploadResult } from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"
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
            if(
                [fullName,username,password,email].some((field)=> field?.trim() === "")
            ){
                throw new ApiError(400,'All fields are required');
            }

            const existedUser=User.findOne({
                $or:[{username},{email}]
            })
            
            if(existedUser){
                throw new ApiError(409,"User with email and username already exists");
            }
            const avatarlocalPath=req.files?.avatar[0]?.path;
            const coverImagelocalPath=req.files?.coverImage[0]?.path;

            if(!avatarlocalPath){
                throw new ApiError(400,"Avatar file needed");
            }
            const avatar=uploadResult(avatarlocalPath);
            const coverImage=uploadResult(coverImagelocalPath);

            const createUser=await User.create({
                fullName,
                avatar:avatar.url,
                coverImage:coverImage?.url || "",
                email,
                password,
                username
            })

            const user=User.findById(createdUser._id).select(
                "-password -refreshToken"
            );
            if(!user){
                throw new ApiError(500,"Something went wrong");
            }
            return res.status(200).json(
                new ApiResponse(200,user,"User registered successfully")
            )          
})

export {registerUser}
        
