const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

module.exports = app;
