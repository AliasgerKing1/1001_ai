require("../config/database")
const mongoose = require("mongoose");

const Website = mongoose.Schema({
    name: String,
    link: String,
    path: String,
    index : String
})
module.exports = mongoose.model("website", Website);