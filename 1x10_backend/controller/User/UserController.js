const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../../models/User");
const jwt = require("jsonwebtoken")
const str = require("random-string")

routes.post("/", async (req,res) => {
    let refCode = str({length : 8});
    req.body.refcode = refCode;
    req.body.password = sha1(req.body.password)
    let result = await User.create(req.body);
    let referal = req.body.userefcode
    if(referal.length !== 0) {
        let refcodeof = await User.find({refcode : referal})
        if(refcodeof.length > 0) {
            let newTokens = refcodeof[0].tokens + 100
            await User.updateOne({refcode : referal}, { $push: { referals: result } })
            await User.updateOne({refcode : referal}, {tokens : newTokens })
        }
    }

    res.send({status : 200, success : true});
})

routes.post("/loginauth",  async(req,res) => {
    let username = req.body.username;
    let password = sha1(req.body.password);
    let result = await User.find({username : username});
    if(username.length > 0) {
        if(result[0].password == password) {
            let obj = {
                _id : result[0]._id,
                username : result[0].username,
                email : result[0].email
            }
            let token = jwt.sign(obj, "Aliasger web")
            res.send({status : 200, success : true, token : token});
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