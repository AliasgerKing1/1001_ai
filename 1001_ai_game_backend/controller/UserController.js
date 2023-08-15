require("../config/database");
const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../models/User");
const jwt = require("jsonwebtoken")

routes.post('/', async (req, res) => {
        delete req.body.conf_pass;
    req.body.password = sha1(req.body.password)
    const result = await User.create(req.body);
    res.send(result);
});

routes.post("/loginauth", async (req, res)=> {
    let email = req.body.email;
    let password = sha1(req.body.password);
    try {
        const verify = await User.find({email : email})
        if(verify[0] ? (verify[0].isVerified == true) : "hello") {
        const result = await User.find({email : email})
        if(result.length == 1) {
            if(result[0].password == password) {
                let obj = {id : result[0]._id, email : result[0].email};
                let token = jwt.sign(obj , "Aliasger web");
                res.send({success : true, status : 200, token : token});
            }else {
                res.send({success : false, status : 401, errType : 2});
            }
        }else {
            res.send({success : false, status : 401, errType : 1});
        }
        } else {
            res.send({success : false, status : 401, errType : 3});
        }
    }catch(error) {
        console.log(error)
    }
})

routes.get('/', async (req, res) => {
    // let token = req.headers.header;
    let limit = req.query.limit;
    let skip = req.query.page;
const result = await User.find({}).skip(skip).limit(limit);
// let obj = jwt.decode(token, "Aliasger web");
// result.push(obj);
res.send(result);
});

routes.get('/:token', async (req, res) => {
    let token = req.params.token;
    let obj = jwt.decode(token, "Aliasger web");
    let result;
    if(obj) {
     result = await User.find({_id : obj.id});
    }
res.send(result); 
});
routes.get('/otpid/:id', async (req, res) => {
    let id = req.params.id;
let result = await User.find({_id : id});
res.send(result); 
});
routes.get('/directid/:id', async (req, res) => {
    let id = req.params.id;
let result = await User.find({_id : id});
res.send(result); 
});

routes.put("/:id", async (req,res)=> {
    let id = req.params.id;
    try {
        await User.updateOne({_id : id},{ $set: {followings :  req.body}})
        let result = await User.find({_id : id})
            res.send(result)
    }catch (error) {
        res.send({status : 500, success : false, error : error})
    }
}) 
routes.put("/other/:id", async (req,res)=> {
    let id = req.params.id;
    try {
        await User.updateOne({_id : id},{ $set: {followers :  req.body}})
        let result = await User.find({_id : id})
            res.send(result)
    }catch (error) {
        res.send({status : 500, success : false, error : error})
    }
}) 

routes.post("/unfollow", async (req, res) => {
    let sender = req.body.sender_id;
    let receiver = req.body.receiver_id;
    try {
      const updatedUser = await User.findOneAndUpdate(
        { "followings.sender_id": sender, "followings.receiver_id": receiver },
        { $pull: { followings: { sender_id: sender, receiver_id: receiver } } },
        { new: true }
      );
      res.send(updatedUser);
    } catch (error) {
      res.send({ status: 500, success: false, error: error });
    }
  });
  
  
  routes.post("/other/unfollow", async (req, res) => {
    let sender = req.body.sender_id;
    let receiver = req.body.receiver_id;
    try {
      const updatedUser = await User.findOneAndUpdate(
        { "followers.sender_id": sender, "followers.receiver_id": receiver },
        { $pull: { followers: { sender_id: sender, receiver_id: receiver } } },
        { new: true }
      );
      res.send(updatedUser);
    } catch (error) {
      res.send({ status: 500, success: false, error: error });
    }
  });
  
  routes.get("/fetchfollowings/:id", async (req,res)=> {
    let id = req.params.id;
    let data = await User.find({_id : id});
    try {
    if(data[0].followers) {
    let followings = data[0].followings;
    let receiver_id = followings.map((x)=> {
        return x.receiver_id;
    });
    try {
        const result = await User.find({ _id: { $in: receiver_id } }).exec();
        res.send(result)
      } catch (err) {
          res.send({status : 500, error : err})
      }
              }        
          } catch (error) {
              res.send({status : 500, error : error})
          }
  })
  routes.get("/fetchfollowers/:id", async (req,res)=> {
    let id = req.params.id;
    let data = await User.find({_id : id});
    try {
        if(data[0].followings) {
            let followers = data[0].followers;
            let receiver_id = followers.map((x) => {
                return x.receiver_id;
            });
try {
  const result = await User.find({ _id: { $in: receiver_id } }).exec();
  res.send(result)
} catch (err) {
    res.send({status : 500, error : err})
}
        }        
    } catch (error) {
        res.send({status : 500, error : error})
    }
});

routes.post("/fetchfollowersDirect", async (req,res)=> {
    let data = req.body;
    let ids = data.map((x)=> {
      return x.sender_id
    })
    let result = [];
    for (let i = 0; i < ids.length; i++) {
      let user = await User.findOne({ _id: ids[i] });
      if (user) {
        result.push(user);
      }
    }
    res.json(result);
  });
routes.post("/fetchfollowingsDirect", async (req,res)=> {
    let data = req.body;
    let ids = data.map((x)=> {
      return x.sender_id
    })
    let result = [];
    for (let i = 0; i < ids.length; i++) {
      let user = await User.findOne({ _id: ids[i] });
      if (user) {
        result.push(user);
      }
    }
    res.json(result);
  });
  









    routes.post("/checkuser", async (req,res) => {
    let email = req.body.email;
    try {
        const result = await User.find({email : email})
        if(result.length == 0) {
            res.send({success : true, status : 200});
        }else {
            res.send({success : false, status : 401});
        }
}catch(error) {
    console.log(error)
}

})

//search area
routes.get("/search/:searchquery", async (req, res)=> {
    let searchQuery = JSON.parse(req.params.searchquery);
try {
    const searchString = searchQuery; // the user input
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape all special characters
      }
      
      const regex = new RegExp(`^${escapeRegExp(searchString)}`, 'i');
      
const result = await User.find({ name: { $regex: regex } }); // find all users whose names start with the search string
        res.send(result);
}catch (error) {
    res.send({status : 401, success : false, error : error});
}
  });
  
module.exports = routes;