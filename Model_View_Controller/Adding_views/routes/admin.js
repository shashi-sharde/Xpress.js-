const path=require('path');
const express=require('express');

const rootDir = require('../utill/path');
const router=express.Router();

router.get('/add-product', (req,res,next)=>{
    // ist option is ---res.sendFile(path.join(__dirname,"../", 'views',"add-product.html")); it can be written as below line
    res.sendFile(path.join(rootDir, 'views',"add-product.html"));
});
router.post('/add-product', (req,res,next)=>{ //this fucntion will also listen to the get request, we only want to run for post request, how can we do that.
    //for that we have method like app.get() and app.post() .
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;