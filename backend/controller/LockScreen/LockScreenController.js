const routes = require("express").Router();
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")
const Admin = require("../../models/Admin")
const str = require("random-string")

routes.post("/", async (req,res)=> {
    if(req.headers.admin_token) {
        let admin_token = req.headers.admin_token;
        let obj = jwt.decode(admin_token, "Aliasger web")
        
        let result = await Admin.find({_id : obj._id})
    if(result.length == 1) {
        const HashedPassword = sha1(req.body.password)
        const storedPassword = result[0].screen_pass
        if(storedPassword == HashedPassword) {
            let lock_screen_token = str()
            res.send({success : true, status : 200, lock_token : lock_screen_token})
        } else 
        res.send({success : false, status : 409})
    }
}
})

module.exports = routes;