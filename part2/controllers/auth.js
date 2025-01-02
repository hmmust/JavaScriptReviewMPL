const user = require("../models/user");

exports.getLogin = (req,res,next)=> {
    res.render("auth/login",{title:"Login",isAuth:req.session.isAuthenticated})
};
exports.postLogin= (req,res,next)=> {
    un = req.body.username;
    pass = req.body.password;
    user.find({username:un,password:pass}).then((u)=>{
        if(u.length ==0)
            res.render("auth/login",{title:"Login",isAuth:req.session.isAuthenticated})
        else
        {
            req.session.isAuthenticated = true;
            req.session.user= u;
            res.redirect('/admin/products');
        }

    });
};
exports.getLogout = (req,res,next)=> {
    req.session.destroy();
    res.redirect('/auth/login')
};

