const shop_products= [
    {name:"Halibona Milk",price:5},
    {name:"Rabee Tea",price:3},
    {name:"Ameed Coffeee",price:3.5},
];
const addProduct = (n,p) =>{
    shop_products.push({name:n,price:p});
};
exports.shop_products= shop_products;
exports.addProduct= addProduct;