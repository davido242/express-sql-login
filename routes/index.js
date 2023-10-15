const express = require('express');
const router = express.Router();

const database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Login Auth System', session: req.session });
});

module.exports = router;
