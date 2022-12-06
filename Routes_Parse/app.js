const express= require('express');

const app = express();
app.use('/', (req,res,next)=>{
    console.log("this is first middleware")
    next();
})
app.use('/addproduct',(req,res,next)=>{
    console.log("this is second middleware");
    res.send("<h1> Add product in the list</h1>")
})
app.use( '/',(req,res,next) =>{
    console.log("This is third middleware");
    res.send('<h1> Hello from node js!</h1>')
    
})


app.listen(3000)