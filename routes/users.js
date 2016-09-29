var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var userList = ['Connor','Wilson','Matilda'];
  //res.send('respond with a resource');
	res.render('users', {
		title: 'User List',
		users: userList
	});
});

module.exports = router;
