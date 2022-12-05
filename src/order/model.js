const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    category : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    description : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    status : {
        type : Number,
        default :0
    },
    title : {
        type : String,
        minlength: 3,
        maxlength: 70,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        minlength: 3,
        maxlength : 50,
        required :true
    }
}, {versionKey : false})

const Order = mongoose.model("order" , orderSchema)
module.exports = Order