const express = require('express');
const shopRouter = require("./routes/shop");
const app = express();
const bp = require("body-parser");
app.set("view engine","ejs");
app.set("views","views");
app.use(bp.urlencoded({extended:false}));
app.use(shopRouter);
app.all("*",(req,res)=>{
    res.send("Page Not Found!");
});
app.listen(8080);