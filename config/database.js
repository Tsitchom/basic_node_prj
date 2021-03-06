'use strict';
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  port     : process.env.DB_PORT,
  database : process.env.DB_DATABASE,
  pool	   : true
 });
connection.connect(function(err) {
  if(!err)
    console.log('Database is connected!');
else
    console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
});
module.exports=connection;