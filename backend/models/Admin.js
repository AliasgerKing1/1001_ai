require("../config/database")
const mongoose = require("mongoose");

const Admin = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    screen_pass: String,
    otp : {
        type : Number,
        default : null
    },
    role: String,
    M_delete: String,
    password: String,
    phone: Number,

})
module.exports = mongoose.model("admin", Admin);