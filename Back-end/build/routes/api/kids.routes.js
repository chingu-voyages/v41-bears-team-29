"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var kids_controller_1 = require("../../controllers/kids.controller");
var AuthToken_middleware_1 = require("../../middlewares/AuthToken.middleware");
var kidsRoutes = (0, express_1.Router)();
kidsRoutes.route('/kids')
    .get(AuthToken_middleware_1.validateAuthToken, kids_controller_1.getAllKids)
    .post(AuthToken_middleware_1.validateAuthToken, kids_controller_1.createKid);
kidsRoutes.route('/kids/:id')
    .get(AuthToken_middleware_1.validateAuthToken, kids_controller_1.getKid)
    .put(AuthToken_middleware_1.validateAuthToken, kids_controller_1.updateKid)
    .delete(AuthToken_middleware_1.validateAuthToken, kids_controller_1.deleteKid);
kidsRoutes.route('/kids/user/:user_id')
    .get(AuthToken_middleware_1.validateAuthToken, kids_controller_1.getKidByUser);
exports.default = kidsRoutes;
