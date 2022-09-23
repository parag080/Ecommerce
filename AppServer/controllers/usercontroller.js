const { response } = require('express');
const dal = require('../models/dal');

/* Users Start */

exports.Users = async function (req, res) {
    let result = [];
    result = await dal.Users();
    res.send(result);
};

exports.UserById = async function (req, res) {
    let result = [];
    result = await dal.UserById(req.params.id);
    res.send(result);
};

exports.InsertUser = async (req, res) => {
    let result = [];
    result = await dal.InsertUser(req);
    res.send(result);
};


exports.RemoveUser = async (req, res) => {
    let result = [];
    result = await dal.RemoveUser(req.params.id)
    res.send(result);
};

exports.UpdateUser = async (req, res) => {
    let result = [];
    result = await dal.UpdateUser(req)
    res.send(result);
};

/* Users End*/

/* Products Start */

exports.Products = async function (req, res) {
    let result = [];
    result = await dal.Products();
    res.send(result);
};

exports.ProductById = async function (req, res) {
    let result = [];
    result = await dal.ProductById(req.params.id);
    res.send(result);
};

exports.InsertProduct = async (req, res) => {
    let result = [];
    result = await dal.InsertProduct(req);
    res.send(result);
};


exports.RemoveProduct = async (req, res) => {
    let result = [];
    result = await dal.RemoveProduct(req.params.id)
    res.send(result);
};

exports.UpdateProduct = async (req, res) => {
    let result = [];
    result = await dal.UpdateProduct(req)
    res.send(result);
};

/* Products End*/

/*Wishlist Start */

exports.InsertWishlist=async(req,res)=>{
    let result=[];
    result=await dal.InsertWishlist(req);
    res.send(result);

}

exports.Wishlist=async(req,res)=>{
    let result=[];
    result=await dal.Wishlist(req);
    res.send(result);
}

exports.RemoveWishlist = async (req, res) => {
    let result = [];
    result = await dal.RemoveWishlist(req.params.id)
    res.send(result);
};