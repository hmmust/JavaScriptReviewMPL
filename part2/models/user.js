const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String,required:true},
    password:String
});

module.exports = mongoose.model("user",UserSchema);