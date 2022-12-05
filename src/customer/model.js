const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    firstName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    lastName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    age : {
        type : Number,
        min: 18,
        max: 35,
        required :true
    },
    isMarried : {
        type : Boolean,
        required : true
    },
    role : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    }
}, {versionKey : false})

const Customer = mongoose.model("customer" , customerSchema)
module.exports = Customer