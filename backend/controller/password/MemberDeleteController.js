
const routes = require("express").Router();
const str = require("random-string")

routes.get("/member", (req,res)=> {
let code = str({length: 10})
res.send(code)
})
module.exports = routes;