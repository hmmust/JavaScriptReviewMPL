const {validationResult} = require("express-validator");
const validateProductRequest = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty())
        next();
    else{
        res.render("admin/add-product",{title:"Add Product",isAuth:req.session.isAuthenticated,
            errors:errors.array(),
            data:{name:req.body.name, price:req.body.price,description:req.body.description}
        });

    }
};
module.exports= validateProductRequest;