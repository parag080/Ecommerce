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

/* Category Start */
exports.Category=async function(req,res){
    let result=[];
    result=await dal.Category()
    res.send(result);
}

exports.CategoryById = async function (req, res) {
    let result = [];
    result = await dal.CategoryById(req.params.id);
    res.send(result);
};

exports.CategoryByName = async function (req, res) {
    let result = [];
    result = await dal.CategoryByName(req);
    res.send(result);
};

exports.InsertCategory=async function(req,res){
    let result = [];
    result = await dal.InsertCategory(req);
    res.send(result);
}

exports.DeleteCategory = async (req, res) => {
    let result = [];
    result = await dal.DeleteCategory(req.params.id)
    res.send(result);
};
/*Category End */

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

exports.WishlistByUserId = async function (req, res) {
    let result = [];
    result = await dal.WishlistByUserId(req.params.id);
    res.send(result);
};
/* wishlist end */

/*orders start */
exports.InsertOrders=async(req,res)=>{
    let result=[];
    result=await dal.InsertOrders(req);
    res.send(result);

}

exports.RemoveOrders = async (req, res) => {
    let result = [];
    result = await dal.RemoveOrders(req.params.id)
    res.send(result);
};

exports.Orders=async(req,res)=>{
    let result=[];
    result=await dal.Orders(req);
    res.send(result);
}

exports.UpdateOrders = async (req, res) => {
    let result = [];
    result = await dal.UpdateOrders(req)
    res.send(result);
};

exports.OrdersById = async function (req, res) {
    let result = [];
    result = await dal.OrdersById(req.params.id);
    res.send(result);
};
/*orders end */