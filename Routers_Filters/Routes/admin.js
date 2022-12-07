const express=require('express');

const router=express.Router();

router.get('/add-product', (req,res,next)=>{
    res.send('<form action="/admin/add-product" method ="POST"><input type="text" placeholder="Title" name ="title"><input type="text" placeholder="Size" name ="Size"><button type="submit">Add Product</button></form>');
});
router.post('/add-product', (req,res,next)=>{ //this fucntion will also listen to the get request, we only want to run for post request, how can we do that.
    //for that we have method like app.get() and app.post() .
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;