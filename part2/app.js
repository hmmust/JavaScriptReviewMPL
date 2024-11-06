const express = require('express');
const app = express();
const bp = require("body-parser");
app.set("view engine","ejs");
app.set("views","views");
app.use(bp.urlencoded({extended:false}));
app.get("/",(req,res)=>{
res.render("index.ejs");
});
app.listen(8080);