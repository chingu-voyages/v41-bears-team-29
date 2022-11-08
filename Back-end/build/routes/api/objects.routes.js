"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var objects_controller_1 = require("../../controllers/objects.controller");
var AuthToken_middleware_1 = require("../../middlewares/AuthToken.middleware");
var objectsRoutes = (0, express_1.Router)();
objectsRoutes.route('/objects')
    .get(AuthToken_middleware_1.validateAuthToken, objects_controller_1.getAllObjects)
    .post(AuthToken_middleware_1.validateAuthToken, objects_controller_1.createObject);
objectsRoutes.route('/objects/:id')
    .get(AuthToken_middleware_1.validateAuthToken, objects_controller_1.getObject)
    .delete(AuthToken_middleware_1.validateAuthToken, objects_controller_1.deleteObject);
objectsRoutes.route('/objects/kid/:kid_id')
    .get(AuthToken_middleware_1.validateAuthToken, objects_controller_1.getKidObjects);
exports.default = objectsRoutes;
