// Express server and mongoose application
// Require modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// Application
app.use(morgan('combined')); // log debugger
app.use(bodyParser.json({ type: '*/*' })); // always parse response to json

// Server
const port = process.env.PORT || 4030;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('server is listening at ', port);
});
