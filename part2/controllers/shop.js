const products = require("../models/products");

const getIndex = (req,res)=>{
    res.render("index.ejs");
};
const getProducts= (req,res)=>{
    res.render("shop/product.ejs",{title:"Add Product"});
};
const postProducts= (req,res)=>{
    //console.log(req.body.name);
    products.addProduct(req.body.name,req.body.price);
    res.redirect("/shop/allproducts");
};   
const getProduct= (req,res)=>{
    res.render("shop/product-details",
        {
            title:"Product 1",
            name:"Halibona Milk",
            price:5,
            description:"500g packed milk"
        });
};
const getAllProducts= (req,res)=>{
    res.render("shop/all-products.ejs", { 
        title:"All Products",
    products: products.shop_products });

};
exports.getIndex=getIndex;
exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.postProducts = postProducts;
exports.getAllProducts = getAllProducts;

//module.exports= {getIndex,getProducts };