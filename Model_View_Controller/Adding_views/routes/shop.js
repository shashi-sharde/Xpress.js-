
const path=require('path');
const { Router } = require("express");
const rootDir = require('../utill/path');
const express=require("express");

const router=express.Router();

router.get('/',(req,res,next)=>{
   // res.sendFile(path.join(__dirname,'../','views','shop.html'));
   res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=router;

