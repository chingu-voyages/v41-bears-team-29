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
exports.authenticateUser = exports.deleteUserSession = exports.userSession = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
var users_model_1 = require("../models/users.model");
var kids_model_1 = require("../models/kids.model");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var usersModel = new users_model_1.UsersModel();
var kidsModel = new kids_model_1.KidsModel();
var getAllUsers = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, usersModel.index()];
            case 1:
                users = _a.sent();
                if (users.length) {
                    response.status(200).json({
                        status: 'Success',
                        data: __spreadArray([], users, true),
                        message: 'All users got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'No users yet'
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
exports.getAllUsers = getAllUsers;
var getUser = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = request.params.id;
                return [4 /*yield*/, usersModel.show(id)];
            case 1:
                user = _a.sent();
                if (user) {
                    response.status(200).json({
                        status: 'Success',
                        data: __assign({}, user),
                        message: 'User got retrieved successfully'
                    });
                }
                else {
                    response.status(404).json({
                        status: 'Failed',
                        message: 'No user with that id'
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
exports.getUser = getUser;
var createUser = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, email, password, newUser, checkEmail, user, token, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = request.body, username = _a.username, email = _a.email, password = _a.password;
                newUser = { username: username, email: email.toLowerCase(), image: "".concat(config_1.default.url, "/person.svg"), password: password };
                return [4 /*yield*/, usersModel.showByEmail(email)];
            case 1:
                checkEmail = _b.sent();
                if (checkEmail) {
                    response.status(409).json({
                        status: 'Failed',
                        message: 'This email is already used'
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, usersModel.create(newUser)];
            case 2:
                user = _b.sent();
                token = jsonwebtoken_1.default.sign({ user: user }, config_1.default.token);
                request.session.user = __assign(__assign({}, user), { token: token });
                response.status(201).json({
                    status: 'Success',
                    data: { user: __assign(__assign({}, user), { token: token }) },
                    message: 'User got created successfully'
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var userSession = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        try {
            user = request.session.user;
            if (user) {
                response.status(200).json({
                    status: 'Success',
                    data: __assign({}, user),
                    message: 'User session got retrieved successfully'
                });
                return [2 /*return*/];
            }
        }
        catch (error) {
        }
        return [2 /*return*/];
    });
}); };
exports.userSession = userSession;
var deleteUserSession = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            request.session.user = null;
            response.status(202).json({
                status: 'Success',
                message: 'User session got deleted successfully'
            });
        }
        catch (error) {
            next(error);
        }
        return [2 /*return*/];
    });
}); };
exports.deleteUserSession = deleteUserSession;
var authenticateUser = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, checkEmail, authenticatedUser, token, kids, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 9]);
                _a = request.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, usersModel.showByEmail(email.toLowerCase())];
            case 1:
                checkEmail = _b.sent();
                if (!checkEmail) return [3 /*break*/, 6];
                return [4 /*yield*/, usersModel.authenticate(email.toLowerCase(), password)];
            case 2:
                authenticatedUser = _b.sent();
                if (!!authenticatedUser) return [3 /*break*/, 3];
                response.status(401).json({
                    status: 'Failed',
                    message: 'Wrong email or password'
                });
                return [2 /*return*/];
            case 3:
                token = jsonwebtoken_1.default.sign({ user: authenticatedUser }, config_1.default.token);
                return [4 /*yield*/, kidsModel.showByUser(authenticatedUser.id)];
            case 4:
                kids = _b.sent();
                request.session.user = __assign(__assign({}, authenticatedUser), { token: token });
                response.status(200).json({
                    status: 'Success',
                    data: { user: __assign(__assign({}, authenticatedUser), { token: token }), kids: __spreadArray([], kids, true) },
                    message: 'User got authenticated successfully'
                });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                response.status(404).json({
                    status: 'Failed',
                    message: 'This email is not used, Sign up instead'
                });
                _b.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                error_4 = _b.sent();
                next(error_4);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.authenticateUser = authenticateUser;
