const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true        
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword: {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", customerSchema);

module.exports = Register;
