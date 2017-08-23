var express = require('express'),
    router  = express.Router(),
    // Import the model (burger.js) to use its database functions
    burger  = require('../models/burger.js');

// Creates routes and sets up logic within those routes where required.
router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject); 
    });
});

router.post('/', function(req, res) {
    burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }, function () {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    var condition = `id = ${req.params.id}`;
    burger.update({devoured: req.body.devoured}, condition, function() {
        res.redirect('/');
    });
});

router.delete('/:id', function(req, res) {
    var condition = `id = ${req.params.id}`;
    burger.delete(condition, function() {
        res.redirect('/');
    });
});

// Exports routes for server.js to use
module.exports = router;


   