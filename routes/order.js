var express = require('express');
var router = express.Router();

/* GET Queue NO. */
router.get('/orderList', function(req, res, next) {

	console.log(req.params.page);
	var jsonList=[];
	for(var i=0;i<1000;i++){
      jsonList.push({name:'Steve',age:i,gender:'male',hobby:'sport'});
	}
    res.json(jsonList);
});
module.exports = router;