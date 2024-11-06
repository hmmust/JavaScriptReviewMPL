const emailValidator= async (email) => {
    if(email.split("@").length ==2)
        return email;
    else
        return Promise.reject("Invalid email");
};
class Customer{
    constructor(name, age,email){
        this.name = name;
        this.age = age;
        this.email= email;
    }
    printInformation(){
        console.log(this.name);
    }

}

exports.emailValidator = emailValidator;
exports.NoUsers = 5;
exports.Customer = Customer;
//module.exports= {emailValidator,NoUsers};
