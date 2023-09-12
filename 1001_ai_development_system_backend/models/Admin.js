require("../config/database")
const mongoose = require("mongoose");

const Admin = mongoose.Schema({
    username : String,
    password : String,
    email : String,
})
module.exports = mongoose.model("admin", Admin);

// Alisar1001