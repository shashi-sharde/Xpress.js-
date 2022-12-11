const path=require('path');
const express=require("express");

const rootDir = require('../util/path');

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'includes',"contact.html"));
}

exports.postContact=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success')
}