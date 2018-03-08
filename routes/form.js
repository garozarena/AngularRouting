var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Form = require('../models/Form.js');

/* GET ALL FORMS */
router.get('/', function(req, res, next) {
  Form.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE FORMS */
router.post('/', function(req, res, next) {
  Form.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;