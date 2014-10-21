var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'CS 196: The Foundry'
  });
});

/* GET blog page. */
router.get("/blog", function (req, res) {
	// parse post file names in format YYYYMMDD-name.ejs
	var parsePosts = function (files) {
	    var result = {};
	    for (var i=0; i<files.length; i++) {
	        result[files[i]] = {
	            date : files[i].substring(0,8), // assume index 8 is separator character
	            postid : files[i].substring(9,files[i].indexOf(".ejs"))
	        };
	    }
	    return result;
	};

	// get title of file
	var getPostTitle = function (contents) {
		var dummy = document.createElement("div");
		dummy.innerHTML = contents;
		return dummy.getElementsByTagName("div")[0].innerHTML;
	};

	// get date of file
	var getPostDate = function (contents) {
		var dummy = document.createElement("div");
		dummy.innerHTML = contents;
		return dummy.getElementsByTagName("div")[1].innerHTML;
	}

	var filesdata = {};

	// make array of posts in view/partials/content/posts directory global
	fs.readdir("./views/partials/content/posts", function (err, files) {
	    if (err) console.log(err);
	    files.sort().reverse(); // most recent posts first
	    filesdata = parsePosts(files);
	    // console.log(filesdata);
	    var dir = "./views/partials/content/posts/";
	    
	    myFiles = {};
		for (filename in filesdata) {
			var ds = filesdata[filename].date;
			var d = new Date(ds.substring(0,4),ds.substring(4,6),ds.substring(6,8));
			myFiles[filename] = { // TODO: possible CSS hack, show entire contents of file and hide all but title and preview paragraph
				contents : fs.readFileSync(dir+filename, "utf-8"),
				date : d.toDateString()
			};
		}
		console.log(myFiles);
		res.render("blog", {
			title : "Blog - CS 196: The Foundry",
			files : myFiles
		});
	});
	
});

/* GET blog post page. */
router.get("/blog/:postname?", function (req, res) {
	var dir = "views/partials/content/posts/";
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
