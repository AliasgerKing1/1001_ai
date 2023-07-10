
const routes = require("express").Router();
const WebsiteLeft = require("../../models/Websiteleft");
const WebsiteDone = require("../../models/Websitedone");

routes.post("/addleft", async (req, res) => {
    try {
        await WebsiteLeft.create(req.body)
        res.send({sccess : true, status : 200})
    }catch(error) {   
        res.send({sccess : false, status : 409})
    }
})
routes.post("/adddone", async (req, res) => {
    try {
        await WebsiteDone.create(data)
        res.send({sccess : true, status : 200})
    }catch(error) {   
        res.send({sccess : false, status : 409})
    }
})
routes.get("/done", async (req, res) => {
    const websiteDone = await WebsiteDone.find({});
    res.send(websiteDone);
    
})
routes.get("/left", async (req, res) => {
    const websiteLeft = await WebsiteLeft.find({});
    res.send(websiteLeft);
    
})
// const websiteLeft = await WebsiteLeft.find({});
module.exports = routes;