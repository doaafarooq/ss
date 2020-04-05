const express =require('express');
const route =express.Router();
const products =require('../data/demo')


route .get('',(req,res,next))=>{
res.status(200).json({
    message:'hanterar get-request'

})
});
route .get('/:id',(req,res,next))=>{
    res.status(200).json({
     message="häntera en specifk produkt"
    productid:req.params.id

    })
});