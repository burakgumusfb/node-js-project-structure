var config = require('./../../config/config');
var redis = require('redis');
var client = redis.createClient
                (
                config.Redis.ConfiguratioManager.GET_REDIS_PORT,
                config.Redis.ConfiguratioManager.GET_REDIS_HOST_ADDRESS,
                {no_ready_check: true}
                );

class RedisRepository {
    static SetValue(key, value, callback) {
        client.set(key, value, function (err, result) {
            if (err, result)
                callback(err, err);
            callback(null, result);
        });
    }
    static GetValue(key, callback) {
        client.get(key, function (err, result) {
            if (err) callback(err, err)
            callback(null, result);
        });
    }
    static HmSet(key, value, callback) {
        client.hmset(key, value, function (err, result) {
            if (err) callback(err, err);
            callback(null, result);
        })
    }
}

module.exports =
    {
        Repository: RedisRepository
    }