var context = require("./../../data/context");

class Redis {
    static Get(key, callback) {
        context.Redis.Repository.GetValue(key, function (err, result) {
            if (err) callback(err, err)
            callback(null, result);
        });
    }
    static Set(key, value, callback) {
        context.Redis.Repository.SetValue(key, value, function (err, result) {
            if (err) callback(err, err)
            callback(null, result);
        });
    }
    static HmSet(key, value, callback) {
        context.Redis.Repository.HmSet(key, value, function (err, result) {
            if (err) callback(err, err)
            callback(null, result);
        });
    }
}
module.exports =
    {
        Redis: Redis
    }