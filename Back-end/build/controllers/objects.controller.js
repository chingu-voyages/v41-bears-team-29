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
exports.deleteObject = exports.createObject = exports.getKidObjects = exports.getObject = exports.getAllObjects = void 0;
var objects_model_1 = require("../models/objects.model");
var kids_model_1 = require("../models/kids.model");
var formidable_1 = __importDefault(require("formidable"));
var config_1 = __importDefault(require("../config"));
var kidsModel = new kids_model_1.KidsModel();
var objectsModel = new objects_model_1.ObjectsModel();
var getAllObjects = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var objects, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, objectsModel.index()];
            case 1:
                objects = _a.sent();
                if (objects.length) {
                    response.status(200).json({
                        status: 'Success',
                        data: __spreadArray([], objects, true),
                        message: 'All objects got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'There is no objects yet'
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
exports.getAllObjects = getAllObjects;
var getObject = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, object, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = request.params.id;
                return [4 /*yield*/, objectsModel.show(id)];
            case 1:
                object = _a.sent();
                if (object) {
                    response.status(200).json({
                        status: 'Success',
                        data: __assign({}, object),
                        message: 'Object got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'There is no object with that id'
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
exports.getObject = getObject;
var getKidObjects = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var kidId, objects, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                kidId = request.params.kid_id;
                return [4 /*yield*/, objectsModel.showByKid(kidId)];
            case 1:
                objects = _a.sent();
                if (objects.length) {
                    response.status(200).json({
                        status: 'Success',
                        data: __spreadArray([], objects, true),
                        message: 'Kid objects got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'There is no objects for that kid id'
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
exports.getKidObjects = getKidObjects;
var createObject = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var object_1, form;
    return __generator(this, function (_a) {
        try {
            object_1 = { name: '', image: '', kidId: '' };
            form = new formidable_1.default.IncomingForm();
            form.parse(request, function (error, fields, files) { return __awaiter(void 0, void 0, void 0, function () {
                var kidId, checkKid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            kidId = fields.kidId;
                            return [4 /*yield*/, kidsModel.show(kidId)];
                        case 1:
                            checkKid = _a.sent();
                            if (!checkKid) {
                                response.status(409).json({
                                    status: 'Failed',
                                    message: 'There is no kid with that id'
                                });
                                return [2 /*return*/];
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
            form.on('fileBegin', function (name, file) {
                var filePath = "".concat(file.originalFilename);
                object_1.image = "".concat(config_1.default.url, "/").concat(filePath);
                file.filepath = "".concat(__dirname, "/../../uploads/").concat(filePath);
            }).on('field', function (name, value) {
                if (name === 'name') {
                    object_1.name = value;
                }
                else if (name === 'kidId') {
                    object_1.kidId = value;
                }
            }).on('end', function () { return __awaiter(void 0, void 0, void 0, function () {
                var newObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, objectsModel.create(object_1.name, object_1.image, object_1.kidId)];
                        case 1:
                            newObject = _a.sent();
                            response.status(201).json({
                                status: 'Success',
                                data: __assign({}, newObject),
                                message: 'Object got created successfully'
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
exports.createObject = createObject;
var deleteObject = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, checkObject, deletedObject, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = request.params.id;
                return [4 /*yield*/, objectsModel.show(id)];
            case 1:
                checkObject = _a.sent();
                if (!checkObject) {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'Object is not exist'
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, objectsModel.delete(id)];
            case 2:
                deletedObject = _a.sent();
                response.status(202).json({
                    status: 'Success',
                    message: 'Object got created successfully'
                });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteObject = deleteObject;
