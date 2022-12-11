const path = require('path');

const express = require('express');


const router = express.Router();

const productsController=require('../Controllers/Products')



// /admin/add-product => GET
router.get('/add-product', productsController.GetAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.PostAddProduct);

module.exports=router;
