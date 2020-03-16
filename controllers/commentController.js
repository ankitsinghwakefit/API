var Comment = require("../models/comment");
var Post = require("../models/post");

var commentController = {};

commentController.post = (req,res) =>{
    var { userId , text, postId}  = req.body;

    var newComment = new Comment({
        text,
        _creator : userId,
        _post : postId
    });

    newComment.save().then((comment)=>{
        Post.findByIdAndUpdate(
           postId,
           { $push: { "_comment" : comment._id }} 
        ).then((existingPost)=>{
            res.status(200).json({
                success : true,
                data : comment,
                existingPost
            })
        }).catch((err)=>{
            res.status(500).json({
                message : err.toString(),
            })
        })
        
    }).catch((err)=>{
        res.status(500).json({
            message : err.toString(),
        })
    })
}

module.exports = commentController;