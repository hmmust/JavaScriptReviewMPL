const express = require('express');
const shopRouter= require("./routes/shop");
const error404Router = require("./routes/404");
const path = require("path");
const app = express();
const bp = require("body-parser");

app.set("view engine","ejs");
app.set("views","views");
app.use("/files",express.static(path.join(__dirname,"public")));
app.use(bp.urlencoded({extended:false}));
app.use("/shop",shopRouter);
app.use(error404Router);

app.listen(8080);