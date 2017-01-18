const express = require('express');
const cacheManifest = require('connect-cache-manifest');
const app = express();

const config = require('./config')();

const { port } = config;

app.use(cacheManifest({
  manifestPath: '/application.manifest',
  cdn: ['http://yui.yahooapis.com/pure/0.5.0/pure-min.css'],
  files: [{
    file: __dirname + '/public/js/foo.js',
    path: '/js/foo.js'
  }, {
    dir: __dirname + '/public/css',
    prefix: '/css/'
  }, {
    dir: __dirname + '/views',
    prefix: '/html/',
    ignore: function(x) { return /\.bak$/.test(x); },
    replace: function(x) { return x.replace(/\.jade$/, '.html'); }
  }],
  networks: ['*'],
  fallbacks: []
}));

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
