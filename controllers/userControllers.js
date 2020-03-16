var User = require("../models/user");

var userController = {};

userController.post = (req,res) =>{
    var { username , password}  = req.body;

    var newUser = new User({
        username,
        password
    })

    newUser.save().then((user)=>{
        res.status(200).json({
            success : true,
            data : user,
        })
    }).catch((err)=>{
        res.status(500).json({
            message : err,
        })
    })
}

module.exports = userController;