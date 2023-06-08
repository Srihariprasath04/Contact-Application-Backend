const constants = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400 :
            res.json({title : "Validation error", message : err.message, stackTrace : err.stack});
            //break;
        case 404:
            res.json({title : "Value not found",message : err.message , stackTrace : err.stack});
        case 401:
            res.json({title : "Unauthorized error",message : err.message , stackTrace : err.stack});
        case 403:
            res.json({title : "Forbidden",message : err.message , stackTrace : err.stack});
        case 500:
            res.json({title : "Server error",message : err.message , stackTrace : err.stack});
        //default:
            //console.log("No error all good ");
            break;
    }
}

module.exports = errorHandler;