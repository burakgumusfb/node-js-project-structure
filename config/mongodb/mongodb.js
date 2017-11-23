var json = require("./config.json")[process.env.NODE_ENV];

class MongoDbConfig {

    static get GET_CONNECTION_STRING() {
        return "mongodb://" + GET_MONGODB_IP_ADDRESS() + ":" + GET_MONGODB_PORT() + "/" + GET_MONGODB_DATABASE_NAME();
    }

}

function GET_MONGODB_IP_ADDRESS() {
    return json.MONGODB_IP_ADDRESS;
}
function GET_MONGODB_PORT() {
    return json.MONGODB_PORT;
}
function GET_MONGODB_DATABASE_NAME() {
    return json.MONGODB_DATABASE_NAME;
}


module.exports = {
    ConfiguratioManager: MongoDbConfig
}