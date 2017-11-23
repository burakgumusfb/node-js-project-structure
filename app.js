process.env.NODE_ENV = require("./package.json")["env"]
var express = require('express');
var controller = require("./controller/controller");
var model = require('./models/models');
var async = require('async');

var usersApi = require('./src/api/users');
var index = require('./src/www/index');
var session = require('express-session');
var auth = require('./middleware/auth/auth');
var logger = require('./middleware/logger/logger');
var app = express();
var bodyParser = require('body-parser');

app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: false
  }));

app.use(function (req, res, next) {
    logger.WriteLog(req, res, next);
});

app.use(function (req, res, next) {
    auth.authChecker(req, res, next);
});
app.set('view engine', 'ejs');

controller.UsersMongoDBController.Users.findAll(function (err, result) {
    controller.RedisController.Redis.Set("USERS", JSON.stringify(result), function (err, result) {
    });
});

app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', usersApi);
app.use('/index', index);

app.listen(3100);