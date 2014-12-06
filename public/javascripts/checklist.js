var express = require('express');
var router = express.Router();


var list = require("../res/checklistSQL")

/* GET checklist. */
router.get('/', function(req, res) {

	list.connect(function(err){

		list.viewList(function(err_query,data){

			res.json(data);

		});
  
	});
});
//-----------------------------------------------------------
module.exports = router;