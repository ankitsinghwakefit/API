var jwt = require("jsonwebtoken");

module.exports.generateJWT=(user)=>{
    var payload = {
        userId : user.id,
        email : user.email
    };
    var token = jwt.sign(payload, "unknown");
    return token;
}

module.exports.validateJWT = (req, res, next) => {
    let token = req.headers["authorization"] || "";
    if(token){
        let payload = jwt.verify(token, "unknown");
        req.user = payload;
        req.user.token = token;
        next();
    } else {
        res.status(400).json({error : "token required"});
    }
}

module.exports.middlewareJWT = (req, res, next)=>{
    let token = req.headers["authorization"] || "";
    if(token){
        let payload = jwt.verify(token, "unknown");
        req.user = payload;
        req.user.token = token;
        next();     
    } else {
        res.status(400).json({error : "token required"});
    }
}