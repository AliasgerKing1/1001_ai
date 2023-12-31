require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    password: String,
    username: String,
    f_name : {
        type : String,
        default : ''
    },
    l_name : {
        type : String,
        default : ''
    },
    join_date : String,
    plan : {
        type : String,
        default : 'free'
    },
    email: String,

})
module.exports = mongoose.model("user", User);