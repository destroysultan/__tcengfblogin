var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index.ejs', {}, function(err,html){
  		res.send(html);
  	});
});

router.post('/login', function(req, res, next) {
	saveUserInDB(req);
	var user = {
		name : req.body.name,
		email : req.body.email,
		pw : req.body.pw
	};
  	res.render('home.ejs', {"user": user}, function(err,html){
  		res.send(html);
  	});
});

function saveUserInDB(req) {
	console.log("I saved" + req.body.name);
}

module.exports = router;
