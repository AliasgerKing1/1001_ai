const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../../models/User");
const jwt = require("jsonwebtoken")
const str = require("random-string")

routes.post("/", async (req,res) => {

    try {
        req.body.username = "1001_" + req.body.username;
        delete req.body.confpass
        req.body.password = sha1(req.body.password)
        let result = await User.create(req.body);
        res.send({status : 200, success : true})
    }
    catch (error) {
        console.log(error)
        res.send({status : 500, success : false})
    }
   
})

routes.post("/loginauth",  async(req,res) => {
    let username = req.body.username;
    let password = sha1(req.body.password);
    let result = await User.find({username : username});
    if(result.length > 0) {
        if(result[0]?.password == password) {
            let obj = {
                _id : result[0]._id,
                username : result[0].username,
                email : result[0].email
            }
            let obj2 = {
                _id : result[0]._id,
                username : result[0].username,
            }
            let token = jwt.sign(obj, "Aliasger web")
            let lock_token = str()
            res.send({status : 200, success : true, token : token, lock_token : lock_token});
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


module.exports = routes;