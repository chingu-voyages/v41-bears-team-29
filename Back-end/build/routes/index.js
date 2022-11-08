"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("./api/users.routes"));
var kids_routes_1 = __importDefault(require("./api/kids.routes"));
var objects_routes_1 = __importDefault(require("./api/objects.routes"));
var routes = (0, express_1.Router)();
routes.use('/api', users_routes_1.default);
routes.use('/api', kids_routes_1.default);
routes.use('/api', objects_routes_1.default);
routes.get('/api', function (request, response) {
    response.send('Hello from api');
});
exports.default = routes;
