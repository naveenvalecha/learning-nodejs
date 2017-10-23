var express = require('express');
var router = express.Router();

/* GET the listing. */
router.get('/todo', function(req, res) {
  if (typeof(req.session.todoItems) == 'undefined') {
    req.session.todoItems = [];
  }
  res.render('todo', { title: 'Your Todo List', todoItems: req.session.todoItems });
});

module.exports = router;
