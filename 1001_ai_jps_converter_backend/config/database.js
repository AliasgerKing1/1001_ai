const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Aliasger:SoScRoSiNoSpCr@cluster0.wvfmfrm.mongodb.net/1001_ai_jps_converter");

mongoose.connection.on("connected", () => {
    console.log("connected")
})

mongoose.connection.on("error", (err) => {
    console.log(err);
})

