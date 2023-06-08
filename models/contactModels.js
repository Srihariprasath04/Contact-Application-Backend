const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id :{
        // since id is generated in the mongodb database 
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    name :{
        type : String,
        required : [true, "Please add the contact name"]
    },
    email:{
        type : String,
        required : [true, "Please enter your email"]
    }, 
    phone : {
        type : Number,
        required : [true, "Please enter the contact number"]
    },
},
{
    timestamps : true
})

module.exports = mongoose.model("Contacts", contactSchema);