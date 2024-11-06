const eValidator = require("./lect4").emailValidator;
const Customer = require("./lect4").Customer;

const ahmad = new Customer("Ahmad",20,"ahmad@uop.edu.jo");
ahmad.age=22;
console.log(ahmad.name,ahmad.email);

eValidator(ahmad.email)
    .then(e =>{
        return e.split("@")[0];
    })
    .then(username =>{
        console.log("sending email to : ",username);
    })
    .catch(err =>{
    console.log(err);
    });