const express=require('express');

const bodyParser=require('body-parser');


const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req,res,next)=>{
    res.send('<form action="/product" method ="POST"><input type="text" placeholder="Title" name ="title"><input type="text" placeholder="Size" name ="Size"><button type="submit">Add Product</button></form>');
});
app.use('/product', (req,res,next)=>{ //this fucntion will also listen to the get request, we only want to run for post request, how can we do that.
    //for that we have method like app.get() and app.post() .
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    res.send("Form submitted Successfully!");
});
app.listen(3000); 
//This is the use for BodyParser.