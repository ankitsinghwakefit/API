var express = require('express');
var router = express.Router();
var basicController = require("../controllers/basicController");

/* GET home page. */
router.get('/',basicController.get);

module.exports = router;
