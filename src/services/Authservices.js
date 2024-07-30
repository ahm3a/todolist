const jwt=require('jsonwebtoken');
require("dotenv").config();
const verifictionuser=(req,res,next)=>{
    const token =req.headers.authorization;
    const {valid,decodedToken}=validateToken(token);
    if(!valid){ 
        return res.status(401).json({
            message:"password is not valid"});
    }   
 req.userid=decodedToken.userid;
 req.role=decodedToken.role;
    next();
    };
    
const authorize=allowedRoles=>(req,res,next)=>{
if(!allowedRoles.includes(req.role)){
    return res.status(401).json({
        message:"UNauthorized"
        });
    } 
    next();
}



    const validateToken=token=>{
        try{
 const SECRET_KEY= process.env.SECRET_KEY ||"task1234";
const decodedToken=jwt.verify(token,SECRET_KEY);
return{
    valid: true,
    decodedToken
}
        }
        catch(err){
            console.log(err);
            return {
                valid: false
            };
        }
    }
    const generateToken = payload=>{
        const SECRET_KEY= process.env.SECRET_KEY ||"task1234";
const token = jwt.sign(payload,SECRET_KEY); 
return token;
    }
module.exports = {
    verifictionuser,
    generateToken,
    authorize
};