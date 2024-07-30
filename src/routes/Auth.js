const express=require('express');
const router=express.Router();
const {generateToken}=require('../services/Authservices');
const {validatlogin}= require('../services/errors/validator');

router.post('/auth/login',validatlogin,(req,res)=>{
   const {username,password}=req.body;
   if(username=="ahmad" && password==="task1234"){
const payload={
    userid:1,
    role:'admin'   
}
const token=generateToken(payload);
return res.status(200).json({
  token: token
});
}

return res.status(400).json({
  message:"invalid credentials"})

    })

module.exports=router;