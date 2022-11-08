"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
var errorMiddleware = function (error, request, response, next) {
    var status = error.status || 500;
    var message = error.message || 'Something went wrong ';
    response.status(status).json({
        status: 'Failed',
        message: message
    });
};
exports.errorMiddleware = errorMiddleware;
