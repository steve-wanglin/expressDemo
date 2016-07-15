var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('TagTest', { title: 'Express' });
});


/* GET Calendar page. */
router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Express' });
});

module.exports = router;
