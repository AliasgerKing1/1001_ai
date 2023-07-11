const routes = require("express").Router();

routes.post("/image", (req,res)=> {
    res.send("hello")
})

module.exports = routes;
