const asyncHandler=(requestHandler)=>{
    async (err,req,res,next)=>{
        Promise.resolve(
            await requestHandler(err,req,res,next)
        )
        .catch((err)=>{
            console.log("Error is: ",err);
        })
    }
}

export {asyncHandler}