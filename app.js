require("express-async-errors")
const express = require("express");
const app = express();

app.json();

app.get('/', (req, res) => {
  res.send('Hello');
})

module.exports = app;