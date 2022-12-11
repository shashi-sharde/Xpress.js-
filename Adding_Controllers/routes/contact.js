const path=require('path');
const express=require("express");

const rootDir = require('../util/path');
const router=express.Router();
const contactFormController=require('../Controllers/contact')

router.get('/contactus', contactFormController.getContact);

router.post('/contactus', contactFormController.postContact);
module.exports=router;
