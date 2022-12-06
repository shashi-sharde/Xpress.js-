
const express = require('express');

const app=express();

app.use((req,res,next) =>{
    console.log("In the middleware");
    next(); //it allows us the request to continue to the next middleware in line
})
app.use((req,res,next) =>{
    console.log("In the middleware");
    //res.send('<h1> Hello from node js!</h1>')
    res.send(' { key1: value }')
})

const application=express();


app.listen(3000);