const routes = require("express").Router();
const sha1 = require("sha1")
const User = require("../../models/User");
const jwt = require("jsonwebtoken")

routes.post('/', async (req, res) => {
        delete req.body.conf_pass;
    req.body.password = sha1(req.body.password)
    let email = req.body.email;
    let  checkComp = email.split("@")
    let validEmail = false;
    switch (checkComp[1]) {
        case "gmail.com":
            validEmail = true;
            break;
        case "protonmail.com":
            validEmail = true;
            break;
        case "yahoo.com":
            validEmail = true;
            break;
        case "outlookmail.com":
            validEmail = true;
            break;
        case "zohomail.com":
            validEmail = true;
            break;
        case "applemail.com":
            validEmail = true;
            break;
        default:
            validEmail = false;
            break;
        }
if (validEmail && validEmail == true) {
    const check = await User.find({email : email})
    if(check.length == 1) {
      res.send({status : 409, success : false, errType : 1})
    } else {
        let split_char = req.body.name.split("");
        let Char_0 = split_char[0]
        switch(Char_0) {
            case 'a': 
            req.body.profile_photo = "A"
                break;
            case 'b':
                req.body.profile_photo = "B"
                break;
            case 'c': 
            req.body.profile_photo = "C"
                break;
            case 'd':
                req.body.profile_photo = "D"
                break;
            case 'e': 
            req.body.profile_photo = "E"
                break;
            case 'f':
                req.body.profile_photo = "F"
                break;
            case 'g': 
            req.body.profile_photo = "G"
                break;
            case 'h':
                req.body.profile_photo = "H"
                break;
            case 'i': 
            req.body.profile_photo = "I"
                break;
            case 'j':
                req.body.profile_photo = "J"
                break;
            case 'k': 
            req.body.profile_photo = "K"
                break;
            case 'l':
                req.body.profile_photo = "L"
                break;
            case 'm': 
            req.body.profile_photo = "M"
                break;
            case 'n':
                req.body.profile_photo = "N"
                break;
            case 'o': 
            req.body.profile_photo = "O"
                break;
            case 'p':
                req.body.profile_photo = "P"
                break;
            case 'q': 
            req.body.profile_photo = "Q"
                break;
            case 'r':
                req.body.profile_photo = "R"
                break;
            case 's': 
            req.body.profile_photo = "S"
                break;
            case 't':
                req.body.profile_photo = "T"
                break;
            case 'u': 
            req.body.profile_photo = "U"
                break;
            case 'v':
                req.body.profile_photo = "V"
                break;
            case 'w': 
            req.body.profile_photo = "W"
                break;
            case 'x':
                req.body.profile_photo = "X"
                break;
            case 'y': 
            req.body.profile_photo = "Y"
                break;
            case 'z':
                req.body.profile_photo = "Z"
                break;
            case 'A': 
            req.body.profile_photo = "A"
                break;
            case 'B':
                req.body.profile_photo = "B"
                break;
            case 'C': 
            req.body.profile_photo = "C"
                break;
            case 'D':
                req.body.profile_photo = "D"
                break;
            case 'E': 
            req.body.profile_photo = "E"
                break;
            case 'F':
                req.body.profile_photo = "F"
                break;
            case 'G': 
            req.body.profile_photo = "G"
                break;
            case 'H':
                req.body.profile_photo = "H"
                break;
            case 'I': 
            req.body.profile_photo = "I"
                break;
            case 'J':
                req.body.profile_photo = "J"
                break;
            case 'K': 
            req.body.profile_photo = "K"
                break;
            case 'L':
                req.body.profile_photo = "L"
                break;
            case 'M': 
            req.body.profile_photo = "M"
                break;
            case 'N':
                req.body.profile_photo = "N"
                break;
            case 'O': 
            req.body.profile_photo = "O"
                break;
            case 'P':
                req.body.profile_photo = "P"
                break;
            case 'Q': 
            req.body.profile_photo = "Q"
                break;
            case 'R':
                req.body.profile_photo = "R"
                break;
            case 'S': 
            req.body.profile_photo = "S"
                break;
            case 'T':
                req.body.profile_photo = "T"
                break;
            case 'U': 
            req.body.profile_photo = "U"
                break;
            case 'V':
                req.body.profile_photo = "V"
                break;
            case 'W': 
            req.body.profile_photo = "W"
                break;
            case 'X':
                req.body.profile_photo = "X"
                break;
            case 'Y': 
            req.body.profile_photo = "Y"
                break;
            case 'Z':
                req.body.profile_photo = "Z"
                break;
        }
        const result = await User.create(req.body);
      res.send(result);
    }
} else {
    res.send({status : 409, success : false,  errtype : 2})
}
});

module.exports = routes;