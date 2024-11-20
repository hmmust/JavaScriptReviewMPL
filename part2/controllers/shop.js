const getIndex = (req,res)=>{
    res.render("index.ejs");
};
const getProducts= (req,res)=>{
    res.render("shop/product.ejs",{title:"Add Product"});
};
const postProducts= (req,res)=>{
    res.send("<h1>Form reveived</h1>");
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
    products:[
        {name:"Halibona Milk",price:5},
        {name:"Rabee Tea",price:3},
        {name:"Ameed Coffeee",price:3.5},
    ] });

};
exports.getIndex=getIndex;
exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.postProducts = postProducts;
exports.getAllProducts = getAllProducts;

//module.exports= {getIndex,getProducts };