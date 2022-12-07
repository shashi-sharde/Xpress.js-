const { Router } = require("express");
const express=require("express");

const router=express.Router();

router.use('/',(req,res,next)=>{
    res.send("Form submitted Successfully!");
});

module.exports=router;

