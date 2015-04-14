var express = require('express'),
    http = require('http'),
    app = express(),
    opts = require(__dirname + '/server/config/opts.js');

// Load express configuration
require(__dirname + '/server/config/env.js')(express, app);

// Load routes
require(__dirname + '/server/routes')(app);

// Start the server
http.createServer(app).listen(opts.port, function () {
    console.log("Express server listening on port %d in %s mode",
                opts.port, app.settings.env);
});
