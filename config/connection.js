// Sets up the MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

// Makes the connection
connection.connect(function (err) {
    if (err) {
        console.log(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

// Exports the above connection to our ORM to use
module.exports = connection;