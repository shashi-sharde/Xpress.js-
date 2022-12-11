const path =require("path");
const express =require("express");

const rootDir=require('../util/path');


exports.successFull=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','includes','success.html'))
};