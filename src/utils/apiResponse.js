class ApiResponse{
    constructor(
        message="Successfull connection",
        data,
        statusCode
    ){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.success=statusCode<400;
    }
}

export {ApiResponse}