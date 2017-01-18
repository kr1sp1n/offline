const express = require('express');
const cacheManifest = require('connect-cache-manifest');
const app = express();

const config = require('./config')();

const { port } = config;

app.use(cacheManifest({
  manifestPath: '/application.manifest',
  cdn: ['http://yui.yahooapis.com/pure/0.5.0/pure-min.css'],
  files: [],
  networks: ['*'],
  fallbacks: []
}));

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
