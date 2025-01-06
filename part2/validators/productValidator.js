const {body} = require("express-validator");
const productValidationRules = {
    add:[
        body('name')
        .trim()
        .notEmpty()
        .isLength({min:10,max:100})
        .withMessage("Name should be 10 to 100 letters!"),
        body('price')
        .trim()
        .notEmpty()
        .isFloat({min:1,max:1000})
        .withMessage("Price should be min 1 to 1000JD!"),
        body("description")
        .trim()
        .notEmpty()
        .withMessage("Description should entered!")
    ]
};
module.exports= productValidationRules;