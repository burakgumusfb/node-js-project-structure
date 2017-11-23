var express = require('express');
var router = express.Router();
var controller = require('./../../controller/controller');
var async = require('async');

router.get('/', function (req, res, next) {

    async.parallel({
        GetUsersMongoDb: function (callback) {
            controller.UsersMongoDBController.Users.findAll(function (err, result) {
                if (err) callback(err, err);
                callback(null, result);
            });
        },
        GetUsersRedis: function (callback) {
            controller.RedisController.Redis.Get('USERS', function (err, result) {
                if (err) callback(err, err);
                callback(null, result);
            });
        },
        GetUsersMssql: function (callback) {
            controller.UsersMssqlController.Users.findAll(function (err, result) {
                if (err) callback(err, err);
                callback(null, result);
            })
        }
    }, function (err, results) {
        res.render(__dirname + '/index', {
            usersMongoDb: results["GetUsersMongoDb"],
            usersRedis: JSON.parse(results["GetUsersRedis"]),
            usersMssql : results["GetUsersMssql"].recordset
        });
    });
});

module.exports = router;