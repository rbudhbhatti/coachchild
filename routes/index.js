var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var user = require("../res/users")
//______________________________________________________
var mysql = require("mysql");
var app = express();

// REQUIRES login.json
var connection = mysql.createConnection(JSON.parse(fs.readFileSync("./login.json", "utf-8")));

app.set('views',__dirname + '/view');
app.use(express.static(__dirname + '/js'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

router.get('/get_from_db',function(req,res){
        connection.query("SELECT * from blogpost",function(err,rows){
          res.json(rows);
        });
});
//__________________________________________________________


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'CS 196: The Foundry'
  });
});

/* GET blog page. */
router.get("/blog", function (req, res) {
	console.log("Connecting to blog");
	connection.connect();
	console.log("Connections established");
	connection.query("SELECT * from blogposts", function (err, rows){ // ETIMEDOUT error on this line
		var blog = rows;
		connection.end();

		if(err) throw err;
		console.log("Retrieved blog stuff");
		console.log(blog);

        res.render('Blog',{
        	title : "Blog - CS 196: The Foundry",
			blog: blog
		});
    });
	/*fs.readdir("./views/partials/content/posts", function (err, files) {
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
*/
	
});

/* GET blog post page. */
router.get("/blog/:postname?", function (req, res) {
	var dir = "views/partials/content/posts/";
	var myFile = dir + req.params.postname + ".json";
	var myFileJSON = JSON.parse(fs.readFileSync(myFile,"utf-8"));
	fs.readFile(dir+myFile, function (err, data) {
		if (err) console.log(err);
		res.render("blogpost", {
			title : myFileJSON.title + " - CS 196: The Foundry",
			file : myFileJSON
		});
	});
});

/* GET teams page. */
router.get("/teams", function (req, res) {
	fs.readdir("./views/partials/content/teams", function (err, files) {
		var dir = "./views/partials/content/teams/";
		// replace each element in files with JSON objects
		for (var i=0; i<files.length; i++) {
			var filename = path.basename(files[i], ".json");
			files[i] = JSON.parse(fs.readFileSync(dir+files[i],"utf-8"));
		}
		console.log(files);
		res.render("teams", {
			title : "Teams - CS 196: The Foundry",
			files : files
		});
	});
});

/* GET team page */
router.get("/teams/:teamname?", function (req,res){
	var dir ="views/partials/content/teams/";
	var myFile = dir +req.params.teamname + ".json";
	var myFileJSON = JSON.parse(fs.readFileSync(myFile,"utf-8"));
	fs.readFile(dir+myFile, function (err,data) {
		if (err) console.log(err);
		console.log(myFileJSON)
		res.render("teampage", {
			title : myFileJSON.name + " -  CS 196: The Foundry",
			file : myFileJSON
		});
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
router.get("/test", function(req, res) {

	user.connect(function(err){

		user.loadUser(function(err_query,data){

			res.json(data);

		});
  
	});
});

module.exports = router;
