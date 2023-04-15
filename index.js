'use strict';
require('dotenv').config();
const server = require('./server');
const { db } = require('./models/index');

db.sync().then(() => {

}).catch(console.error);

server.start(process.env.PORT || 3001)