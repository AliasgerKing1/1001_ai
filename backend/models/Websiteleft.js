require("../config/database")
const mongoose = require("mongoose");

const Website = mongoose.Schema({
name : String,
url : String,
link : String,
})
module.exports = mongoose.model("website_left", Website);