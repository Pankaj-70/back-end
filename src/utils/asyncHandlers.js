const asyncHandler=(requestHandler)=>{
    return (req,res)=>{
        Promise.resolve(
            requestHandler(req,res)
        )
        .catch((err)=>{
            console.log("Error is: ",err);
        })
    }
}

export {asyncHandler}