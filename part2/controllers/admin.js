const Product = require("../models/product");

exports.getAddProduct= (req,res,next)=> {
    res.render("admin/add-product",{title:"Add Product"});
};
exports.postAddProduct= (req,res,next)=>{
    const new_product = new Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    });
    new_product.save();
    res.send("Created");
};
exports.getEditProduct= (req,res,next)=> {};
exports.postEditProduct= (req,res,next)=>{};
exports.postDeleteProduct= (req,res,next)=>{};

exports.getProducts = (req,res,next)=> {};
