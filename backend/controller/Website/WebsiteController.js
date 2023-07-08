
const routes = require("express").Router();
const Website = require("../../models/Website");

routes.post("/add", async (req, res) => {
    console.log(req.body)
    try {
        await Website.create(req.body)
        res.send({sccess : true, status : 200})
    }catch(error) {   
        res.send({sccess : false, status : 409})
    }
})
routes.get("/name", async (req, res) => {
    const website = await Website.find({});
    res.send(website);

})
module.exports = routes;