const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController=require('./Controllers/error404')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminroutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminroutes);
app.use(shopRoutes);

app.use(errorController.Error404);

app.listen(3000);

