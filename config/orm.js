// Imports the MySQL connection
var connection = require('../config/connection.js');

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// Helper function for SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            // Does this work?
            arr.push(`${key} = ${ob[key]}`);
        }
    }
    return arr.toString();
}

// Object for all of the SQL statement functions
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        });
    },
    insertOne: function(tableInput, userInput, cb) {
        var queryString = `INSERT INTO ${tableInput} SET ?`;
        connection.query(queryString, {burger_name: userInput.burger_name, devoured: false}, function(err, result) {
            if (err) throw err;
            
            console.log('Entry added.');
            cb(result);
        });
    },
    // An example of objColVals would be {name: burger, eaten: true}
    updateOne: function(tableInput, objColVals, condition, cb) {
        var queryString = `UPDATE ${tableInput} SET ${objToSql(objColVals)} WHERE ${condition}`;
        
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } 
            cb (result);
        });
    }, 
    delete: function(tableInput, condition, cb) {
        var querySTring = `DELETE FROM ${tableInput} WHERE ${condition}`;
        connection.query(querySTring, function (err, result) {
            if (err) {
                throw err;
            } 
            cb (result);
        });
    }
};

module.exports = orm; 