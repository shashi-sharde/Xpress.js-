const express =require("express");
const router=express.Router();
router.get('/login',(req,res,next)=>{
    res.send(`<html><form action='/login' onSubmit='localStorage.setItem("UserName", document.getElementById("user").value)' method='POST'> <input id='user' type='text' placeholder='UserName' name='UserName'><button type='submit'>Login</button></form></html>`);
    
 });

router.post('/login',(req,res,next)=>{
    
    res.redirect('/');
 });

 module.exports=router;