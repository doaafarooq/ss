import express from "express";
const app=express();
app.use ((req;res;next)) =>{
//alltid använder den har parametar(req,res,next) med express
    res.status(200).json({
        message:'Titta';
    });
})
module.exports=app;