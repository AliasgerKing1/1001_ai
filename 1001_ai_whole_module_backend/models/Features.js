require("../config/database")
const mongoose = require("mongoose");

const App = mongoose.Schema({
    name : String,
    image : String,
    description : String,
    redirect_to : String
})
module.exports = mongoose.model("app", App);