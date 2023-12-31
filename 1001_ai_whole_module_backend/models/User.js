require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    password: String,
    username: String,
    join_date : String,
    plan : {
        type : String,
        default : 'free'
    },
    screen_pass : {
        type : String,
        default : ''
    },
    email: String,

})
module.exports = mongoose.model("user", User);