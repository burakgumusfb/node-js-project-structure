var express = require('express');
var router = express.Router();

var controller = require("./../../controller/controller");
var model = require('./../../models/models');
var async = require('async');

router.get('/', function (req, res, next) {
    controller.UsersMongoDBController.Users.findAll(function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.get('/:id', function (req, res, next) {
    controller.UsersMongoDBController.Users.findById(req.params.id, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.post('/', function (req, res, next) {
    controller.UsersMongoDBController.Users.add(req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.post('/address', function (req, res, next) {
    controller.UsersMongoDBController.Users.addSubDocumentById(req.body.id, req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.put('/address', function (req, res, next) {
    controller.UsersMongoDBController.Users.updateSubDocumentById(req.body.id, req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.put('/details', function (req, res, next) {
    controller.UsersMongoDBController.Users.updateSubDocumentInArrayById(req.body.id, req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);

    });
});

router.delete('/', function (req, res, next) {
    controller.UsersMongoDBController.Users.removeById(req.body.id, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.delete('/details', function (req, res, next) {
    controller.UsersMongoDBController.Users.removeSubDocumentInArrayById(req.body.id, req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.post('/mssql', function (req, res, next) {
    controller.UsersMssqlController.Users.add(req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.put('/mssql', function (req, res, next) {
    controller.UsersMssqlController.Users.update(req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});

router.delete('/mssql', function (req, res, next) {
    controller.UsersMssqlController.Users.delete(req.body, function (err, result) {
        if (err) res.send(err);
        else
            res.send(result);
    });
});
module.exports = router;