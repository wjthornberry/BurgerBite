// Imports the ORM to create functions that will interact with the database
var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    create: function(vals, cb) {
        orm.insertOne('burgers', vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('burgers', condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;