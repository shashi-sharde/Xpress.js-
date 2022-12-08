 const express= require('express');
 const fs=require('fs')
 const Parse=require('body-parser')
 const loginRoute=require('./Routes/login')
 const msgRoute=require('./Routes/messege')
 const app=express();
 app.use(Parse.urlencoded({extended:false}))
 
 app.use(loginRoute);
 app.use(msgRoute);
 

 app.listen(3000);