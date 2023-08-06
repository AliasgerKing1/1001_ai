const routes = require("express").Router();
const User = require("../../models/User")
const jwt = require("jsonwebtoken")
const { ObjectId } = require('mongodb');
routes.post("/", async (req,res)=> {
    if(req.headers.token) {
        let token = req.headers.token;
        req.body._id = new ObjectId()
        let obj = jwt.decode(token , "Aliasger web")
        await User.updateOne({_id : obj._id}, {$push : {my_gen_images : req.body}})
        res.send({status : 200, success : true})
    }
})
module.exports = routes;