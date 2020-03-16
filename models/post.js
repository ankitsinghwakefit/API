var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    link : String,
    text : String,
    isDeleted : {
        type : Boolean,
        default : false
    },
    _creator : {
        type : Schema.ObjectId,
        ref : "User"
    },
    _comment : [{
        type : Schema.ObjectId,
        ref : "Comment"
    }]
},{ timestamps : true });

var Post = mongoose.model("Post",postSchema);

module.exports = Post;