
const routes = require("express").Router();
const str = require("random-string")
const Admin = require("../../models/Admin")
let jwt = require("jsonwebtoken")
routes.get("/member", async (req, res) => {
    let code = str({ length: 10 })
    if (req.headers.token) {
        console.log(code)
        let token = req.headers.token;
        let obj = jwt.decode(token, "Aliasger web");
        try {
            let result = await Admin.updateOne({ _id: obj._id }, { M_delete: code })
        } catch (error) {
            res.send({ success: false, status: 401, err: error });
        }

    }
    res.send(code)
})
module.exports = routes;