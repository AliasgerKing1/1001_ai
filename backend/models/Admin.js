require("../config/database")
const mongoose = require("mongoose");

const Admin = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number,
    role: String,
    M_delete: String,
    password: String

})
module.exports = mongoose.model("admin", Admin);