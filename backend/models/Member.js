require("../config/database")
const mongoose = require("mongoose");

const Member = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number,
    role: {
        type : String,
        default : ""
    },
    Address: String,
    qualification: String,
    YOG: String,
    password: String,
    skills: String,

})
module.exports = mongoose.model("member", Member);