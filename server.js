// Requires the following npm packages
var express        = require('express'),
    methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    exphbs         = require('express-handlebars'),
    routes         = require('./controllers/burgers_controllers.js');
    // Express configuration to set up the basic properties of the server
    app            = express(),
    // Sets the server port
    PORT            = process.env.PORT || 3000;
    // Sets up bodyParser, which allows the server to interpret the data sent to it
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));   
    
    // Serves static content from the public directory in the app
    app.use(express.static('public');

    // override with POST having ?_method=DELETE
    app.use(methodOverride('_method'));

    app.use('/', routes);

    // Sets Handlebars as the default templating engine
    app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.listen(PORT, function() {
        console.log(`Burger app is listening on port ${PORT}`);
    });


