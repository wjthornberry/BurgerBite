// Requires the following npm packages
var express        = require('express'),
    methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    // Express configuration to set up the basic properties of the server
    app            = express(),
    // Sets the server port
    PORT            = process.env.PORT || 3000;
    // Sets up bodyParser, which allows the server to interpret the data sent to it
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));     