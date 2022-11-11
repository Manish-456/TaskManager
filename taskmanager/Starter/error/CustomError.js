class CustomError extends Error{
 constructor(message, statusCode){
  super(message)
  this.statusCode = statusCode
  
 }
}

const CreateCustomError = (msg, err) => {
return new CustomError(msg, err)
}
module.exports = {CustomError, CreateCustomError}