require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    password: String,
    name: String,
    username: String,
    email: String,
})
module.exports = mongoose.model("user", User);