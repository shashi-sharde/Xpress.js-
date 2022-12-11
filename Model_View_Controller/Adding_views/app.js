const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser')
const adminRoutes=require('./Routes/admin')
const shopRoutes=require('./Routes/shop');
const ErrRoutes=require('./routes/NotFound');
const contactRoutes= require('./routes/contact');
const SuccessRoute= require('./routes/success');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/contact',contactRoutes);
app.use(SuccessRoute);
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(ErrRoutes);



app.listen(3000); 
//This is the use for BodyParser.