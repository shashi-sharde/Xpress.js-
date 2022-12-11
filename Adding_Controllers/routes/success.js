const path =require("path");
const express =require("express");

const rootDir=require('../util/path');

const router=express.Router();
const successController=require('../Controllers/sucess');


router.get('/success',successController.successFull);

module.exports=router;