const path = require('path');

const express = require('express');

const shoppingController=require('../Controllers/Products');


const router = express.Router();

router.get('/', shoppingController.getProducts);

module.exports = router;
