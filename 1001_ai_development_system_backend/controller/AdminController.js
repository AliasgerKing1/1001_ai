require("../config/database");
const routes = require("express").Router();
const sha1 = require("sha1")
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken")

routes.post("/loginauth", async (req, res)=> {
    let username = req.body.username;
    let password = sha1(req.body.password);
    try {
        const result = await Admin.find({username : username})
        if(result.length == 1) {
            if(result[0].password == password) {
                let obj = {id : result[0]._id, username : result[0].username};
                let token = jwt.sign(obj , "Aliasger web");
                res.send({success : true, status : 200, token : token});
            }else {
                res.send({success : false, status : 401, errType : 2});
            }
        }else {
            res.send({success : false, status : 401, errType : 1});
        }
    }catch(error) {
        console.log(error)
    }
})

routes.get('/', async (req,res) => {
  if(req.headers.token) {
    let token = req.headers.token;
    let obj = jwt.decode(token, "Aliasger web");
    let result = await Admin.find({_id : obj.id});
    res.send(result)
  }
})
module.exports = routes;