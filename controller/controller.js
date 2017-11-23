var UsersController = require('./users/mongodb/mongodb');
var RedisController = require('./redis/redis');
var MssqlController = require('./users/mssql/mssql');
module.exports =
    {
        RedisController: RedisController,
        UsersMongoDBController: UsersController,
        UsersMssqlController: MssqlController
    }