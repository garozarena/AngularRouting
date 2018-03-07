var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/Post.js');

/* GET ALL POSTS */
router.get('/', function(req, res, next) {
  Post.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;