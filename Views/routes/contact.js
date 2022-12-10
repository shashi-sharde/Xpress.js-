const path=require('path');
const express=require("express");

const rootDir = require('../utill/path');
const router=express.Router();

router.get('/contactus', (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', "contact.html"));
});
router.post('/contactus', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success')
});
module.exports=router;
