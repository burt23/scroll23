const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const port = process.env.PORT || 3001

const app = express();

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(resolve(__dirname, '../build')));


app.get('*', (req, res) => {
  res.redirect('/');
})

app.listen(port, () => {
  console.log('App is listening to port ' + port);
})

module.exports = app;