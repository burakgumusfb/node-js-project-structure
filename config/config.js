var MongoDBConfig = require("./mongodb/mongodb");
var RedisConfig = require('./redis/redis');
var MssqlConfig = require('./mssql/mssql');

module.exports = 
{
    MongoDB:MongoDBConfig,
    Redis:RedisConfig,
    Mssql:MssqlConfig
}