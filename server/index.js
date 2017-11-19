const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const port = process.env.PORT || 3001

const app = express();

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/michaelburton.co/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/michaelburton.co/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/michaelburton.co/chain.pem')
};

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(resolve(__dirname, '../build')));


app.get('*', (req, res) => {
  res.redirect('/');
})

https.createServer(options, app).listen(3443);

module.exports = app;
