const express=require('express');
const router=express.Router();
const task=require('../services/todotaskes');
const {verifictionuser,authorize}=require('../services/Authservices');
const {trycatch} = require('../services/errors/trycatch');
const {validatortask}= require('../services/errors/validator');





// Get all tasks
router.get('/todos',verifictionuser,authorize(["admin","user"]),trycatch((req,res)=>{
    console.log(req.userid);
    console.log(req.role);
    task.gettask(); 
    var response = {
        task: task
    };
    return res.status(200).json(response);
  
})
);

// Create a new task
router.post('/todos',verifictionuser,authorize(["admin"]),validatortask,trycatch(
    (req,res)=>{ // Add verifictionuser middleware
        const body = req.body;
        console.log(req.userid);
        console.log(req.role);
        task.creattask(body); // Pass body to the function
        return res.status(200).json({ 
         message:"task created"
         }); 
    }
));

// Update an existing task
router.put('/todos',verifictionuser,authorize(["admin"]),validatortask,trycatch((req,res)=>{ // Add verifictionuser middleware
    const body=req.body;
    console.log(body);
    console.log(req.userid);
    console.log(req.role);
    task.puttask(body); // Pass body to the function
    return res.status(200).json({
   message:"task updated"
   }); 
 }
)); 

// Delete a task
router.delete('/todos', verifictionuser,authorize(["admin"]),trycatch(
    (req, res) => { // Add verifictionuser middleware
        const body = req.body;
        console.log(body);
        console.log(req.userid);
        console.log(req.role);
        task.deletetask(body); // Pass body to the function
        return res.status(200).json({ // Use status 204 for deletion
            message: "task was deleted"
        });
    }
));

module.exports=router;