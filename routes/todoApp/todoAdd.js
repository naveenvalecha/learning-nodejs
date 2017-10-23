var express = require('express');
var router = express.Router();

/* Add an item to the listing. */
router.post('/todo/add', function(req, res, next) {
  if (req.body.newItem != '') {
    req.session.todoItems.push(req.body.newItem);
  }
  res.redirect('/todo');
});

module.exports = router;
