var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/templates/:template', function(req, res, next) {
    res.render('templates/' + req.params.template + ".pug");
});

router.get('/api/todos', function (req, res) {

  res.json([{'done': false, 'text' : 'Learn Angular 2'}]);
});

module.exports = router;
