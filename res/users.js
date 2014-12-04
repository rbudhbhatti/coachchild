function Users(){
	


	var mysql = require('mysql');
	var config = {
  	host     : 'localhost',
  	user     : 'root',
  	password : "",
  	database:"webmedia"
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
  	this.loadUser = function(callback){

 	var sql = "SELECT * FROM blogpost";

 	db.query(sql,function(err_query,data){
 		if(err_query) console.log(err_query);

 		callback(err_query,data);


 	});

  	}


	//-------------------------------------------------------

}
module.exports = new Users();