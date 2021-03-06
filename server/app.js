const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(
  path.join(__dirname, '/../build')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/../index.html')));

app.listen(3000);