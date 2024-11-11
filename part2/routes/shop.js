const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("index.ejs");
    });
router.get("/about/:userName",(req,res)=>{
        res.write(`<h1>Welcome ${req.params.userName}</h1>`);
        res.end();
});

exports.router = router;
