const path = require("path");
const express = require("express");
const rootDir = require('../utill/path');
const router=express.Router();
router.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname, '../' , 'views' , 'NotFound.html'))
    res.status(404).sendFile(path.join(rootDir, 'views' , 'NotFound.html'))
    
})

module.exports=router;