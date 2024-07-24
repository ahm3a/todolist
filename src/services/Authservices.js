const jwt=require('jsonwebtoken');
require("dotenv").config();
const verifictionuser=(req,res,next)=>{
    const password =req.headers.authorization;
    if(password !== "task1234" ){ 
        return res.status(401).json({
            message:"password is not valid"});
    }   

    next();
    };
    const generateToken = payload=>{
        const SECRET_KEY= process.env.SECRET_KEY || "task1234";
const token = jwt.sign(payload,SECRET_KEY);

    
return token;
    }
module.exports = {verifictionuser,generateToken};