var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {
        type : String,
        required : true,
        minlength : [5, "Username must be 5 characters or more"],
    },
    password : {
        type : String,
        required : true,
        minlength : [8, "Password must be 8 characters or more"],
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
},{timestamps : true});

userSchema.pre("save", function(next){
    if(this.password) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
})

var User = mongoose.model("User", userSchema );

module.exports = User;