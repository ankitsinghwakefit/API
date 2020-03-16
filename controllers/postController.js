var Post = require("../models/post");
var User = require("../models/user");
var Comment = require("../models/comment");

var postController = {};

postController.post = (( req, res ) => {
    var { title, link, text, userId } = req.body;

    var newPost = new Post({
        title,
        link,
        text,
        _creator : userId
    });

    newPost.save().then((post)=>{
        res.status(200).json({
            status : "post created",
            post : post
        })
    }).catch((err)=>{
        res.status(500).json({
            message : err
        })
    })

})

postController.getAll = (( req, res )=>{
    Post.find({}).populate({ path : "_creator"})
    .populate({path : "_comment",
                select : "text"
})
    .then((allPost)=>{
        res.status(200).json({
            status : true,
            post : allPost
        })
    }).catch((err)=>{
        res.status(500).json({
            message : err
        })
    })
})

module.exports = postController;