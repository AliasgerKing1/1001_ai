require("../config/database")
const mongoose = require("mongoose");

const Images = mongoose.Schema({
    type : String,
    image : String,
})
module.exports = mongoose.model("image", Images);