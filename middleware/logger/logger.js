var fs = require('fs');

function WriteLog(req, res, next) {
    fs.appendFile('log.txt', req.connection.remoteAddress + "\n", function (err,fd) {
        if (err) throw err;
    });
    next();
}
module.exports =
    {
        WriteLog: WriteLog
    }

