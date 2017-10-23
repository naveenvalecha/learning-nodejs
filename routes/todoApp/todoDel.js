var express = require('express');
var router = express.Router();

/* Delete the item from the listing. */
router.get('/todo/delete/:id', function(req, res, next) {
  if (req.params.id != '' && req.params.id !== undefined) {
    req.session.todoItems.splice(req.params.id, 1);
  }
  res.redirect('/todo');
});

module.exports = router;
