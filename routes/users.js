var express = require('express');
var router = express.Router();


var user = require("../res/users")

/* GET users listing. */
router.get('/', function(req, res) {

	user.connect(function(err){

		user.loadUser(function(err_query,data){

			res.json(data);

		});
  
	});
});
//-----------------------------------------------------------
module.exports = router;
