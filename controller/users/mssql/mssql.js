var context = require("./../../../data/context");
var model = require('./../../../models/models');

class Users {
    static findAll(callback) {
        context.Mssql.Repository.findAll(function name(err, result) {
            if (err) callback(err, err);
            callback(null, result);
        });
    }

    static add(req, callback) {
        var model = new model.UsersModel.USERS(req.FULLNAME, req.EMAIL, req.PASSWORD);
        context.Mssql.Repository.add(model, function (err, result) {
            if (err) callback(err, err);
            callback(null, result);
        });
    }

    static update(req, callback) {
        var model = new model.UsersModel.USERS(req.FULLNAME, req.EMAIL, req.PASSWORD);
        context.Mssql.Repository.update(model, function (err, result) {
            if (err) callback(err, err);
            callback(null, result);
        });
    }
    static delete(req, callback) {
        var model = { "EMAIL": req.EMAIL };
        context.Mssql.Repository.delete(model, function (err, result) {
            if (err) callback(err, err);
            callback(null, result);
        });
    }
}
module.exports =
    {
        Users: Users
    }