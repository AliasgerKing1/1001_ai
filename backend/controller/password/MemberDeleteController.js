
const routes = require("express").Router();
const str = require("random-string")
const Admin = require("../../models/Admin")
const sha1 = require("sha1")
let jwt = require("jsonwebtoken")
routes.get("/member", async (req, res) => {
    let code = str({ length: 10 })
    if (req.headers.admin_token) {
        let admin_token = req.headers.admin_token;
        let obj = jwt.decode(admin_token, "Aliasger web");
        try {
            let result = await Admin.updateOne({ _id: obj._id }, { M_delete: code })
            res.send(code)
        } catch (error) {
            res.send({ success: false, status: 401, err: error });
        }

    }
})

routes.put("/checkPass", async (req, res) => {
    let password = req.body.password
    if (req.headers.admin_token) {
        let admin_token = req.headers.admin_token;
        let obj = jwt.decode(admin_token, "Aliasger web");
        try {
            let result = await Admin.find({ _id: obj._id })
            if (result.length == 1) {
                if (result[0].M_delete == password) {
                    res.send({ success: true, status: 200 });
                } else {
                    res.send({ status: 409, success: false })
                }
            }
        } catch (error) {
            res.send({ success: false, status: 401, err: error });
        }

    }
})
module.exports = routes;