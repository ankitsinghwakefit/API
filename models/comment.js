var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text : {
        type : String,
        required : true
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    _creator : {
        type : Schema.ObjectId,
        ref : "User"
    },
    _post : {
        type : Schema.ObjectId,
        ref : "Post"
    }
},{ timestamps : true });

var autoPopulateCreator = function(next){
    this.populate ({
        path : "_creator",
        select : "username createdAt"
    });
    next();
}

commentSchema.pre("find", autoPopulateCreator);

var Comment = mongoose.model("Comment",commentSchema);

module.exports = Comment;