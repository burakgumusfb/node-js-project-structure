var context = require('./../../../data/context');
var model = require('./../../../models/models');

class Users {
    static findAll(callback) {
        context.MongoDB.Repository.findAll(function (err, result) {
            callback(null, result);
        });
    }
    static findById(id, callback) {
        context.MongoDB.Repository.findById(id, function (err, result) {
            callback(null, result);
        });
    }

    static add(req, callback) {
        var users = new model.UsersModel.USERS(req.FULLNAME, req.EMAIL, req.PASSWORD);
        context.MongoDB.Repository.add(users, function (err, result) {
            callback(null, result);
        });
    }

    static addSubDocumentById(id, req, callback) {
        model = { "CITY": req.CITY, "DISTRICT": req.DISTRICT };
        context.MongoDB.Repository.addSubDocument(id, model, function (err, result) {
            if (err)
                callback(err, err);
            callback(null, result);
        });
    }


    static updateSubDocumentById(id, req, callback) {
        var model = { "CITY": req.CITY };
        context.MongoDB.Repository.updateSubDocumentById(id, model, function (err, result) {
            if (err)
                callback(err, err);
            callback(null, result);
        });
    }
    static updateSubDocumentInArrayById(id, req, callback) {
        var model = { "PHONE": req.PHONE };
        context.MongoDB.Repository.updateSubDocumentInArrayById(id, model, function (err, result) {
            if (err)
                callback(err, err);
            callback(null, result);
        });
    }

    static removeById(id, callback) {
        context.MongoDB.Repository.removeById(id, function (err, result) {
            if (err)
                callback(err, err)
            callback(null, result);
        });
    };

    static removeSubDocumentInArrayById(id, req, callback) {
        var id = req.id;
        var model = { "PHONE": req.PHONE };
        context.MongoDB.Repository.removeSubDocumentInArrayById(id, model, function (err, result) {
            if (err)
                callback(err, err);
            callback(null, result);
        });
    }
}

module.exports =
    {
        Users: Users
    }