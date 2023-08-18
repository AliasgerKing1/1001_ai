require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    password: String,
    username: String,
    email: String,
    join_date : String
})
module.exports = mongoose.model("user", User);