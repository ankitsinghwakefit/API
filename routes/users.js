var express = require('express');
var userController = require("../controllers/userControllers");
var postControllers = require("../controllers/postController");
var commentControllers = require("../controllers/commentController");
var router = express.Router();

/* GET users listing. */
router.post('/signup', userController.post );

router.post("/post", postControllers.post);

router.get("/posts", postControllers.getAll);

router.post("/comment",commentControllers.post )

module.exports = router;
