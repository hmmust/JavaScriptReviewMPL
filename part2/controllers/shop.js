const getIndex = (req,res)=>{
    res.render("index.ejs");
};
const getProducts= (req,res)=>{
    res.render("product.ejs");
};
const postProducts= (req,res)=>{
    res.send("<h1>Form reveived</h1>");
};
const getProduct= (req,res)=>{
    res.render("index.ejs");
};

exports.getIndex=getIndex;
exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.postProducts = postProducts;

//module.exports= {getIndex,getProducts };