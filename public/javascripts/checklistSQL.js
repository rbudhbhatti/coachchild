function Viewtasklist(){
	
	var mysql = require('mysql');
	var config = {
  	host     : '104.131.21.95',
  	user     : 'root',
  	password : "thefoundry",
  	database : "webmedia"
	}
	var db = null;
	//-------------------------------------------------------
	this.connect = function(callback){
		db = mysql.createConnection(config);
		db.connect(function(err){

			if(err) console.log(err);
			callback(err);
		});
	}

	//--------------------------------------------------------
  	this.viewList = function(callback){

 	var sql = "SELECT * FROM tasklist";

 	db.query(sql,function(err_query,data){
 		if(err_query) console.log(err_query);

 		callback(err_query,data);

 	});

  	}


	//-------------------------------------------------------
	
	this.insertList = function(callback){

 	var sql = "INSERT INTO tasklist (task,author) VALUES (?,?)";

 	db.query(sql,function(err_query,data){
 		if(err_query) console.log(err_query);

 		callback(err_query,data);

 	});

  	}

}
module.exports = new Viewtasklist();