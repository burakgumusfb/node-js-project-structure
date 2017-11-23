var json = require('./config.json')[process.env.NODE_ENV];

class RedisConfig {
    static get GET_REDIS_HOST_ADDRESS() {
        return GET_REDIS_IP_ADDRESS;
    }
    static get GET_REDIS_PORT() {
        return GET_REDIS_PORT;
    }
}
function GET_REDIS_IP_ADDRESS() {
    return json.REDIS_IP_ADDRESS;
}
function GET_REDIS_PORT() {
    return json.REDIS_PORT;
}
module.exports = {
    ConfiguratioManager: RedisConfig
}