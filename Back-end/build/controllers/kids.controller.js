"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKid = exports.updateKid = exports.createKid = exports.getKidByUser = exports.getKid = exports.getAllKids = void 0;
var users_model_1 = require("../models/users.model");
var kids_model_1 = require("../models/kids.model");
var objects_model_1 = require("../models/objects.model");
var formidable_1 = __importDefault(require("formidable"));
var config_1 = __importDefault(require("../config"));
var usersModel = new users_model_1.UsersModel();
var kidsModel = new kids_model_1.KidsModel();
var objectsModel = new objects_model_1.ObjectsModel();
var getAllKids = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var kids, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, kidsModel.index()];
            case 1:
                kids = _a.sent();
                if (kids.length) {
                    response.status(200).json({
                        status: 'Success',
                        data: __spreadArray([], kids, true),
                        message: 'Kids got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'No kids got saved yet'
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllKids = getAllKids;
var getKid = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, kid, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = request.params.id;
                return [4 /*yield*/, kidsModel.show(id)];
            case 1:
                kid = _a.sent();
                if (kid) {
                    response.status(200).json({
                        status: 'Success',
                        data: __assign({}, kid),
                        message: 'Kid got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'No kid with that id'
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getKid = getKid;
var getKidByUser = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, kids, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = request.params.user_id;
                return [4 /*yield*/, kidsModel.showByUser(userId)];
            case 1:
                kids = _a.sent();
                if (kids.length) {
                    response.status(200).json({
                        status: 'Success',
                        data: __spreadArray([], kids, true),
                        message: 'User kids got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'No kids for that user id yet'
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getKidByUser = getKidByUser;
var createKid = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var kid_1, form;
    return __generator(this, function (_a) {
        try {
            kid_1 = { name: '', image: '', userId: '' };
            form = new formidable_1.default.IncomingForm();
            form.parse(request, function (err, fields, files) { return __awaiter(void 0, void 0, void 0, function () {
                var userId, checkUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            userId = fields.userId;
                            return [4 /*yield*/, usersModel.show(userId)];
                        case 1:
                            checkUser = _a.sent();
                            if (!checkUser) {
                                response.status(409).json({
                                    status: 'Failed',
                                    message: 'There is no user for that user id'
                                });
                                return [2 /*return*/];
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
            form.on('fileBegin', function (name, file) {
                var filePath = "".concat(file.originalFilename);
                kid_1.image = "".concat(config_1.default.url, "/").concat(filePath);
                file.filepath = "".concat(__dirname, "/../../uploads/").concat(filePath);
            }).on('field', function (name, value) {
                if (name === 'name') {
                    kid_1.name = value;
                }
                else if (name === 'userId') {
                    kid_1.userId = value;
                }
            }).on('end', function () { return __awaiter(void 0, void 0, void 0, function () {
                var newKid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, kidsModel.create(kid_1.name, kid_1.image, kid_1.userId)];
                        case 1:
                            newKid = _a.sent();
                            response.status(201).json({
                                status: 'Success',
                                data: __assign({}, newKid),
                                message: 'New kid got created successfully'
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (error) {
            next(error);
        }
        return [2 /*return*/];
    });
}); };
exports.createKid = createKid;
var updateKid = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var kid_2, showKid, form, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                kid_2 = { id: request.params.id, name: '', image: '' };
                return [4 /*yield*/, kidsModel.show(kid_2.id)];
            case 1:
                showKid = _a.sent();
                if (!showKid) {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'There is no kid with that id'
                    });
                    return [2 /*return*/];
                }
                form = new formidable_1.default.IncomingForm();
                form.parse(request, function (error, fields, files) { return __awaiter(void 0, void 0, void 0, function () {
                    var file, filePath, updatedKid;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (files.hasOwnProperty('image')) {
                                    file = files.image;
                                    filePath = "".concat(file.originalFilename);
                                    kid_2.image = "".concat(config_1.default.url, "/").concat(filePath);
                                    file.filepath = "".concat(__dirname, "/../../uploads/").concat(filePath);
                                }
                                if (fields.name) {
                                    kid_2.name = fields.name;
                                }
                                return [4 /*yield*/, kidsModel.update(kid_2.id, kid_2.name, kid_2.image)];
                            case 1:
                                updatedKid = _a.sent();
                                response.status(200).json({
                                    status: 'Success',
                                    data: __assign({}, updatedKid),
                                    message: 'Kid got updated successfully'
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateKid = updateKid;
var deleteKid = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, checkKid, deletedObjects, deletedKid, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = request.params.id;
                return [4 /*yield*/, kidsModel.show(id)];
            case 1:
                checkKid = _a.sent();
                if (!checkKid) {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'Kid is not exist'
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, objectsModel.showByKid(id)];
            case 2:
                deletedObjects = _a.sent();
                return [4 /*yield*/, kidsModel.delete(id)];
            case 3:
                deletedKid = _a.sent();
                response.status(202).json({
                    status: 'Success',
                    message: 'Kid got deleted successfully'
                });
                return [3 /*break*/, 5];
            case 4:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteKid = deleteKid;
