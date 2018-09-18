var express = require('express');

// Create a new express.js web app:

var app = express();

// Configure express with the settings found in
// our config.js file

require('./config')(app);

// Add the routes that the app will react to,
// as defined in our routes.js file

require('./routes')(app);

// This file has been called directly with
// `node index.js`. Start the server!

app.listen(8080);
console.log('Your application is running on http://localhost:8080');