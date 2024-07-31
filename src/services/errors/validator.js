const joi=require('joi');

const validator=(schema)=>(req,res,next)=>{
    const body=req.body;
    const {error}=schema.validate(body,{
        abortEarly:false
    });
    if(error){
        var message="";
        for(let key in error.details){
         var details = error.details[key]
         message+=details.message;
        }
             return res.status(400).json({
               message:message
             });
         }
         next();
}

const login=joi.object({
    username:joi.string().required(),
    password:joi.string().min(8).required()
 });



const taskschema=joi.object({
    task1:joi.string().required(),
    task2:joi.string().required(),
    task3:joi.string().required()
 });
module.exports = {
    validatortask:validator(taskschema),
    validatlogin:validator(login)
}



