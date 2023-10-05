const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../models/User");
const jwt = require("jsonwebtoken")
const str = require("random-string")

routes.post("/", async (req,res) => {
    try {
        delete req.body.conf_password
        req.body.password = sha1(req.body.password)
        let result = await User.create(req.body);
        let obj = {
                _id : result._id,
                email : result.email
            }
            let token = jwt.sign(obj, "Aliasger web")
        res.send({status : 200, success : true, token : token})
    }
    catch (error) {
        console.log(error)
        res.send({status : 500, success : false})
    }
   
})
routes.post("/google", async (req,res) => {
    try {
        delete req.body.conf_password
        req.body.password = sha1(req.body.password)
        let result = await User.create(req.body);
        let obj = {
                _id : result._id,
                email : result.email
            }
            let token = jwt.sign(obj, "Aliasger web")
        res.send({status : 200, success : true, token : token})
    }
    catch (error) {
        console.log(error)
        res.send({status : 500, success : false})
    }
   
})

routes.post("/loginauth",  async(req,res) => {
    let email = req.body.email;
    let password = sha1(req.body.password);
    let result = await User.find({email : email});
    if(result.length > 0) {
        if(result[0]?.password == password) {
            let obj = {
                _id : result[0]._id,
                email : result[0].email
            }
            let token = jwt.sign(obj, "Aliasger web")
            // let lock_token = str()
            res.send({status : 200, success : true, token : token});
            // res.send({status : 200, success : true, token : token, lock_token : lock_token});
        } else 
        res.send({status : 403, success : false, errType : 2});
    } else 
    res.send({status : 403, success : false, errType : 1});
})

routes.get("/", async (req,res)=> {
    if(req.headers.token) {
        let token = req.headers.token;
        let obj = jwt.decode(token, "Aliasger web")
        let result = await User.find({_id : obj._id})
        res.send(result)
    }
})


routes.put('/', async (req,res) => {
    if(req.headers.token) {
        let token = req.headers.token;
        let obj = jwt.decode(token, "Aliasger web")
       await User.updateMany({_id : obj._id}, req.body)
       // Fetch the updated documents
let result = await User.find({ _id: obj._id });

        res.send({status : 200, success : true, updatedData : result})
    }
})
module.exports = routes;