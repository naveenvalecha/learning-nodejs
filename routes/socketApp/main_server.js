var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/socket-app', function(req, res, next) {
  res.render('socketApp');
});

module.exports = router;
