var MongoDB = require("./users/mongodb/mongodb");
var Redis = require("./redis/redis");
var Mssql = require("./users/mssql/mssql");

module.exports = {
    MongoDB: MongoDB,
    Redis: Redis,
    Mssql: Mssql
}