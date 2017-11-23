const sql = require('mssql');
var config = require('./../../../config/config');

var config = {
    user: config.Mssql.ConfiguratioManager.GET_USER,
    password: config.Mssql.ConfiguratioManager.GET_PASSWORD,
    server: config.Mssql.ConfiguratioManager.GET_IP_ADDRESS,
    database: config.Mssql.ConfiguratioManager.GET_DATABASE_NAME
};

class MssqlDBRepository {

    static findAll(callback) {


        sql.connect(config, function (err) {

            if (err) callback(err, err);

            var request = new sql.Request();

            // query to the database and get the records
            request.query('SELECT * FROM USERS', function (err, result) {
                sql.close();
                if (err) callback(err, err);
                callback(null, result);

            });

        });
    }

    static add(model, callback) {
        sql.connect(config, function (err) {
            if (err) (err, err);

            var request = new sql.Request()
                .input('EMAIL', sql.VarChar(50), model.EMAIL)
                .input("FULLNAME", sql.VarChar(50), model.FULLNAME)
                .input("PASSWORD", sql.VarChar(50), model.PASSWORD);

            request.query("INSERT INTO USERS (EMAIL,FULLNAME,PASSWORD) VALUES (@EMAIL,@FULLNAME,@PASSWORD)", function (err, result) {
                sql.close();
                if (err) callback(err, result);
                callback(null, result);
            });
        });
    }
    
    static update(model, callback) {
        sql.connect(config, function (err) {
            if (err) (err, err);

            var request = new sql.Request()
                .input('EMAIL', sql.VarChar(50), model.EMAIL)
                .input("FULLNAME", sql.VarChar(50), model.FULLNAME)
                .input("PASSWORD", sql.VarChar(50), model.PASSWORD)

            request.query("UPDATE USERS SET FULLNAME = @FULLNAME , PASSWORD = @PASSWORD WHERE EMAIL = @EMAIL", function (err, result) {
                sql.close();
                if (err) callback(err, result);
                callback(null, result);
            });
        });
    }

    static delete(model, callback) {
        sql.connect(config, function (err) {
            if (err) (err, err);

            var request = new sql.Request()
                .input('EMAIL', sql.VarChar(50), model.EMAIL)

            request.query("DELETE FROM USERS WHERE EMAIL = @EMAIL", function (err, result) {
                sql.close();
                if (err) callback(err, result);
                callback(null, result);
            });
        });
    }
}

module.exports =
    {
        Repository: MssqlDBRepository
    }
