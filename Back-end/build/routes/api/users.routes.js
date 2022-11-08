"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthToken_middleware_1 = require("../../middlewares/AuthToken.middleware");
var users_controller_1 = require("../../controllers/users.controller");
var usersRoutes = (0, express_1.Router)();
usersRoutes.route('/users')
    .get(AuthToken_middleware_1.validateAuthToken, users_controller_1.getAllUsers)
    .post(users_controller_1.createUser);
usersRoutes.route('/users/:id')
    .get(AuthToken_middleware_1.validateAuthToken, users_controller_1.getUser);
usersRoutes.route('/users/auth')
    .post(users_controller_1.authenticateUser);
usersRoutes.route('/users/auth/session')
    .get(users_controller_1.userSession);
usersRoutes.route('/users/auth/logout')
    .get(AuthToken_middleware_1.validateAuthToken, users_controller_1.deleteUserSession);
exports.default = usersRoutes;
