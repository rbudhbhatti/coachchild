var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'CS 196: The Foundry'
  });
});

/* GET blog page. */
router.get("/blog", function (req, res) {
	res.render("blog", {
		title : "Blog"
	});
});

/* GET blog post page. */
router.get("/blog/:postid?", function (req, res) {
	res.render("blog", {
		title : "Blog" // replace with name
		// pass more data
	});
});

/* GET teams page. */
router.get("/teams", function (req, res) {
	res.render("teams", {
		title : "Teams"
	});
});

/* GET teams detail page. */
router.get("/teams/:teamname?", function (req, res) {
	res.render("teams", {
		title : "Teams" // replace with name
		// pass more data
	});
});

/* GET sponsors page. */
router.get("/sponsors", function (req, res) {
	res.render("sponsors", {
		title : "Sponsors"
	});
});

/* GET calendar page. */
router.get("/calendar", function (req, res) {
	res.render("calendar", {
		title : "Calendar"
	});
});

/* GET contact page. */
router.get("/contact", function (req, res) {
	res.render("contact", {
		title : "Contact Us"
	});
});

module.exports = router;
