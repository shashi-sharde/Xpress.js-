const express= require('express');
const fs=require("fs");

const router=express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('chat.txt',(err,data)=>{
        if(err){
            console.log(err)
            data="No text Exist!"
            
        }
        res.send(`${data}<html><form action='/' 
        onSubmit='document.getElementById("UserName").value=localStorage.getItem("UserName")' method="POST">
        <input id="msg" type="text" placeholder="messege" name="msg">
        <input type ="hidden" id="UserName" name="UserName">
        <button type="submit">Send</button></form></html> `)
    })
})
router.post('/',(req,res,next)=>{
    fs.writeFile('chat.txt', `${req.body.UserName}: ${req.body.msg}`, {flag:'a'}, (err)=>{
        
            console.log(err)
            res.redirect('/')
        
    } )
    
})

module.exports=router;