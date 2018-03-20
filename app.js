const express = require('express');
const heart = require('./heartbeat');
const app = express();

app.use(heart.endpoint);

module.exports = {
  app
};