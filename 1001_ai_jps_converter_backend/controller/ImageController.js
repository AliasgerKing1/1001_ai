const routes = require("express").Router();
const multer = require('multer')
// const upload = multer({dest : '/assets/products/'})
const str = require('random-string')
const path = require('path')
const fs = require('fs'); // For file system operations
const mongoose = require('mongoose');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', 'assets', 'images')); // Define the destination folder
    },
    filename: function (req, file, cb) {
      const random_string = str({ length: 100 });
      const original_name = file.originalname;
      const array = original_name.split(".");
      const extension = array[array.length - 1];
      const new_name = random_string + "." + extension;
      cb(null, new_name);
    }
  });
  
  const upload = multer({ storage: storage });
  routes.post('/',upload.single('image'), async (req,res) => {
    console.log(req.body)
    console.log(req.files)
  } )
routes
module.exports = routes;