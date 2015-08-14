'use strict';
var express = require('express');
var router = express.Router();

/* GET monster create. */
router.get('/monster/create', function(req, res) {
  var output = { 'msg' : 'monster create (get)'};
  res.json(200, output);
});

/* POST monster create. */
router.post('/monster/create', function(req, res) {
  var output = { 'msg' : 'monster create (post)'};
  res.json(200, output);
});

/* GET users listing. */
router.get('/monster/list', function(req, res) {
  var output = { 'msg' : 'monster list'};
  res.json(200, output);
});

module.exports = router;
