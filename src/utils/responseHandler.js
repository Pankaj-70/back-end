class responseHandler{
    constructor(
        statusCode,
        data,
        message="API Connection Successfull"
    ){
        this.data=data;
        this.success=statusCode<400;
        this.message=message;
    }
}

export {responseHandler}