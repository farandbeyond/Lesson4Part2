var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4', message: 'this is the lesson 4 home page' });
});
//get random number page
router.get('/random',function(req,res,next) {
	var num = Math.random();
	
	res.render('random', {
		title: 'Random',
		randomNumber: num
	});
});
module.exports = router;
