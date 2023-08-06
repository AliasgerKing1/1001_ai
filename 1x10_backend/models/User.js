require("../config/database")
const mongoose = require("mongoose");

const User = mongoose.Schema({
    password: String,
    username: String,
    email: String,
    refcode: {
        type : String,
        default : ""
    },
    userefcode: {
        type : String,
        default : ""
    },
    referals: {
        type : Array,
        default : []
    },
    tokens: {
        type : Number,
        default : 4500
    },
    daily_tokens: {
        type : Number,
        default : 150
    },
    intrests: {
        type : Array,
        default : []
    },
    my_gen_images: {
        type : Array,
        default : []
    },
    name: String,
})
module.exports = mongoose.model("user", User);