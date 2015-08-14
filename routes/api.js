'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var output = {
      "msg" : "api root"
  };

  res.json(200, output);
});

module.exports = router;
