// Express server and mongoose application
// Require node-modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');
const app = express();

// DB setup
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:auth/auth';
mongoose.createConnection(dbUrl);

// Application
app.use(morgan('combined')); // log debugger
app.use(cors());
app.use(bodyParser.json({ type: '*/*' })); // always parse response to json
// To router
router(app);

// Server
const port = process.env.PORT || 4030;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('server is listening at ', port);
});
