var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var bcrypt = require('bcryptjs');
var app = express();
var api = require('./routes/api');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [process.env.KEY]
}));
app.use('/api', api);

app.set('views', __dirname+'/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res, next) {
  res.render('index.html')
});
app.get('*', function (req, res, next) {
  res.render('index.html')
});


app.listen(process.env.PORT || 4000);

module.exports = app;
