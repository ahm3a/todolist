const express=require('express');
const router=express.Router();
const {generateToken}=require('../services/Authservices');

router.post('/auth/login',(req,res)=>{
   const {username,password}=req.body;
   
   if(username=="admin" && password==="task1234"){
  
const payload={
    userid:1,
    role:'admin'  
}
const token=generateToken(payload);
return res.status(200).json({
  token:token
})
}

return res.status(200).json({
  message:"invslid credentials"})

    })

module.exports=router