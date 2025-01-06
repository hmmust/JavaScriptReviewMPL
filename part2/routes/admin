const express = require('express');
const authMiddleware = require('../middlewares/auth/authMiddleware');
const productRules = require("../validators/productValidator");
const validateProductReq = require("../validators/validateProductReq");
const router = express.Router();
const adminController = require("../controllers/admin");
//router.use(authMiddleware);
router.get('/add-product',authMiddleware,adminController.getAddProduct);
router.post('/add-product',authMiddleware,productRules.add,validateProductReq,adminController.postAddProduct);

router.get('/products',adminController.getProducts);
router.get('/edit-product/:ProductId',adminController.getEditProduct);
router.post('/edit-product',adminController.postEditProduct);
router.get('/delete-product/:ProductId',adminController.getDeleteProduct);
module.exports = router;