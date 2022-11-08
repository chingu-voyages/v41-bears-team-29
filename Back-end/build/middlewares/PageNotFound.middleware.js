"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotFoundMiddleware = void 0;
var pageNotFoundMiddleware = function (request, response, next) {
    response.status(404).json({
        status: 'Failed',
        message: 'Page not found'
    });
};
exports.pageNotFoundMiddleware = pageNotFoundMiddleware;
