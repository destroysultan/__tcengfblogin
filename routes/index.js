var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("in the home route")
	console.log(req.cookies["email"])
	if (req.cookies["email"]) {
		var user = {
			name : req.cookies["name"],
			email : req.cookies["email"]
		};
		res.render('home.ejs', {"user": user}, function(err,html){
	  		res.send(html);
	  	});
	}


  	res.render('index.ejs', {}, function(err,html){
  		res.send(html);
  	});
});

router.post('/login', function(req, res, next) {
	saveUserInDB(req);

	//Log in user
	res.cookie("name", req.body.name);
	res.cookie("email", req.body.email);

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
