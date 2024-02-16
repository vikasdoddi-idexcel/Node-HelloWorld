'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/healthCheck', (req, res) => {
  res.send('Rest API HealthCheck Success!!!');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);