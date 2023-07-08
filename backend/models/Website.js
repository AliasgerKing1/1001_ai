require("../config/database")
const mongoose = require("mongoose");

const Website = mongoose.Schema({
    name: String,
    link: String,
    path: String,
    index : Number
})
module.exports = mongoose.model("website", Website);