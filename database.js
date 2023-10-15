const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
})

connection.connect(function(err) {
  if(!connection) {
    console.log("There was an erro with this connection: ",err);
  }else {
    console.log("Connection established");
  }
});

module.exports = connection;