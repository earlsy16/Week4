const PORT = 3000;
const express = require('express');
const app = express();

const path = require("path");

const http = require('http').Server(app);
var fs = require('fs');
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist/my-app/')));

// User authentication route
const authRoute = require('./routes/auth.js');
app.use('/api/auth', authRoute);

// Start server listening on port 3000. Output message to console
require('./listen.js')(http,PORT);