const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");
router.get("/index",shopController.getIndex);
router.get("/products",shopController.getProducts);
router.post("/products",shopController.postProducts);

router.get("/product-details",shopController.getProduct);




module.exports= router;