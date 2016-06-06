var express = require('express');
var router = express.Router();

/* GET Queue NO. */
router.get('/', function(req, res, next) {
  res.render('queueSystem', { systemName: 'QueueNamangerSystem',queueNo:123 });
});

/* GET home page. */
router.post('/add', function(req, res, next) {
  console.log(req.body.id);

  //res.render('queueSystem', { systemName: 'QueueNamangerSystem',queueNo:123 });
  res.json(req.body.id);
});



module.exports = router;
