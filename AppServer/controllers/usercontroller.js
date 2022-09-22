const { response } = require('express');
const dal=require('../models/dal');

exports.Users= async function(req, res){  
    let result=[];
    result=await dal.Users();
    res.send(result); 
};

exports.UserById= async function(req, res){  
    let result=[];
    result=await dal.UserById(req.params.id);
    res.send(result); 
};

exports.InsertUser=async(req, res)=>{
let result=[];
result=await dal.InsertUser(req);
res.send(result);
};


exports.RemoveUser=async (req, res)=>{
    let result=[];
    result=await dal.RemoveUser(req.params.id)
    res.send(result);
};

exports.UpdateUser=async (req, res)=>{
    let result=[];
    result=await dal.UpdateUser(req)
    res.send(result);
};