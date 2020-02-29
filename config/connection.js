var mysql = require("mysql");
var localConnection = {
  host: "localhost",
  port: 3306,
  user: process.env.user,
  password: process.env.db,
  database: "burgers_db"
}
var connection = mysql.createConnection(process.env.JAWSDB_URL || localConnection);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
