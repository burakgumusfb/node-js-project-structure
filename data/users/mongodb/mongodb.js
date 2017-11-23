var config = require('./../../../config/config');
var mongodb = require('mongodb');

class MongoDBRepository {

    static findAll(callback) {
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection("USERS").find().toArray(function (err, result) {
                if (err)
                    callback(err, err);
                callback(null, result);
            });
            db.close();
        });
    }

    static findById(id, callback) {
        var id = mongodb.ObjectID(id);
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection("USERS").find({ "_id": id }).toArray(function (err, result) {
                if (err)
                    callback(err, err);
                callback(null, result);
            });
            db.close();
        });
    }

    static add(model, callback) {
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection("USERS").insertOne(model, function (err, result) {
                if (err)
                    callback(err, err);
                callback(null, result);
            });
            db.close();
        });
    }

    static addSubDocumentById(id, model, callback) {
        var id = mongodb.ObjectId(id);
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection('USERS').updateOne(
                { "_id": id },
                { "$push": { "address": model } },
                function (err, result) {
                    if (err)
                        callback(err, err);
                    callback(null, result);
                }
            );
            db.close();
        });
    }

    static updateSubDocumentById(id, model, callback) {
        var id = mongodb.ObjectID(id);
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection('USERS').update(
                { "_id": id },
                { "$set": { "address.CITY": model.CITY } },
                function (err, result) {
                    if (err)
                        callback(err, result);
                    callback(null, result);
                }
            )
            db.close();
        });
    }

    static updateSubDocumentInArrayById(id, model, callback) {
        var id = mongodb.ObjectID(id);
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection('USERS').update(
                { "_id": id },
                { "$set": { "details.1.PHONE": model.PHONE } },
                function (err, result) {
                    if (err)
                        callback(err, result);
                    callback(null, result);
                }
            )
            db.close();
        });
    }

    static removeById(id, callback) {
        var id = mongodb.ObjectID(id);
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection('USERS').deleteOne({ "_id": id }, function (err, result) {
                if (err)
                    callback(err, result);
                callback(null, result);
            });
            db.close();
        });
    }

    static removeSubDocumentInArrayById(id, model, callback) {
        var id = mongodb.ObjectID(id);
        mongodb.MongoClient.connect(config.MongoDB.ConfiguratioManager.GET_CONNECTION_STRING, function (err, db) {
            db.collection('USERS').update(
                { "_id": id },
                { "$pull": { "details": { PHONE: model.PHONE } } },
                function (err, result) {
                    if (err)
                        callback(err, result);
                    callback(null, result);
                }
            )
            db.close();
        });
    }

}
module.exports =
    {
        Repository: MongoDBRepository
    }

