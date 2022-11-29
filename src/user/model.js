const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
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

const User = mongoose.model("user" , userSchema)
module.exports = User