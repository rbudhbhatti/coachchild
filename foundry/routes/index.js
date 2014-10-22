var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'CS 196: The Foundry'
  });
});

/* GET blog page. */
router.get("/blog", function (req, res) {

	fs.readdir("./views/partials/content/posts", function (err, files) {
		var dir = "./views/partials/content/posts/";
		files.reverse(); // reverse so that most recent is first
		// replace each element in files with JSON objects
	    for (var i=0; i<files.length; i++) {
	    	var filename = path.basename(files[i], ".json");
	    	files[i] = JSON.parse(fs.readFileSync(dir+files[i],"utf-8"));
	    	files[i]["postname"] = filename; // add property "postname" to every JSON object
	    }
		console.log(files);
		res.render("blog", {
			title : "Blog - CS 196: The Foundry",
			files : files
		});
	});
	
});

/* GET blog post page. */
router.get("/blog/:postname?", function (req, res) {
	var dir = "views/partials/content/posts/";
	// TODO: replace
	var myFile = filesdata[req.params.postname];
	fs.readFile(dir+myFile, function (err, data) {
		if (err) console.log(err);
		var dummy = document.createElement("div");
		dummy.innerHTML = data;
		var ds = filesdata[filename].date;
		var d = new Date(ds.substring(0,4),ds.substring(4,6),ds.substring(6,8));
		res.render("blogpost", {
			title : dummy.getElementsByTagName("div")[0].innerHTML + " - CS 196: The Foundry",
			filename : filesdata[req.params.postname], // object
			date : d.toDateString()
		});
	});
});

/* GET teams page. */
router.get("/teams", function (req, res) {
	res.render("teams", {
		title : "Teams - CS 196: The Foundry"
	});
});

/* GET sponsors page. */
router.get("/sponsors", function (req, res) {
	res.render("sponsors", {
		title : "Sponsors - CS 196: The Foundry"
	});
});

/* GET calendar page. */
router.get("/calendar", function (req, res) {
	res.render("calendar", {
		title : "Calendar - CS 196: The Foundry"
	});
});

/* GET contact page. */
router.get("/contact", function (req, res) {
	res.render("contact", {
		title : "Contact Us - CS 196: The Foundry"
	});
});

module.exports = router;
