const express=require('express');
const router=express.Router();
const task=require('../services/todotaskes');
const {verifictionuser}=require('../services/Authservices');

// Get all tasks
router.get('/todos',  (req,res)=>{
   const json=task.gettask();
   return res.status(200).json(json);
});

// Create a new task
router.post('/todos',verifictionuser,(req,res)=>{ // Add verifictionuser middleware
    const body = req.body;
    task.creattask(body); // Pass body to the function
    return res.status(200).json({
     message:"task created"
     }); 
});

// Update an existing task
router.put('/todos',verifictionuser,(req,res)=>{ // Add verifictionuser middleware
   const body=req.body;
   task.puttask(body); // Pass body to the function
   return res.status(200).json({
  message:"task updated"
  }); 
});

// Delete a task
router.delete('/todos', verifictionuser, (req, res) => { // Add verifictionuser middleware
    const body = req.body;
    task.deletetask(body); // Pass body to the function
    return res.status(200).json({ // Use status 204 for deletion
        message: "task was deleted"
    });
});

module.exports=router;