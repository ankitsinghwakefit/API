var express = require('express');

var basicController = {};

basicController.get = ((req,res)=>{
    res.json({
        message : "welcome to our API"
    })
});

module.exports = basicController;