var json = require('./config.json')[process.env.NODE_ENV];

class MssqlConfig {
    static get GET_CONNECTION_STRING() {
        return GET_MSSQL_IP_ADDRESS() + "" + GET_MSSQL_DATABASE_NAME() + "" + GET_MSSQL_USER_NAME() + GET_MSSQL_PASSWORD();
    }
    static get GET_IP_ADDRESS() {
        return GET_MSSQL_IP_ADDRESS();
    }
    static get GET_DATABASE_NAME() {
        return GET_MSSQL_DATABASE_NAME();
    }
    static get GET_USER() {
        return GET_MSSQL_USER();
    }
    static get GET_PASSWORD() {
        return GET_MSSQL_PASSWORD();
    }
}

function GET_MSSQL_IP_ADDRESS() {
    return json.MSSQL_IP_ADDRESS;
}
function GET_MSSQL_DATABASE_NAME() {
    return json.MSSQL_DATABASE_NAME;
}
function GET_MSSQL_USER() {
    return json.MSSQL_USER_NAME;
}
function GET_MSSQL_PASSWORD() {
    return json.MSSQL_PASSWORD;
}
module.exports =
    {
        ConfiguratioManager: MssqlConfig
    }