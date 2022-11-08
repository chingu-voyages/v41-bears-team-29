"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
var database_1 = __importDefault(require("../database"));
var bcrypt_1 = require("bcrypt");
var config_1 = __importDefault(require("../config"));
var UsersModel = /** @class */ (function () {
    function UsersModel() {
    }
    UsersModel.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT id, username, email, image\n                   FROM users";
                        return [4 /*yield*/, connect.query(sql)];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Unable to get all users, ".concat(error_1.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersModel.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT id, username, email, image\n                   FROM users\n                   WHERE id = $1";
                        return [4 /*yield*/, connect.query(sql, [id])];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Unable to show user by id, ".concat(error_2.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersModel.prototype.showByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT\n                   FROM users\n                   WHERE email = $1";
                        return [4 /*yield*/, connect.query(sql, [email])];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        if (results.rows.length) {
                            return [2 /*return*/, results.rows[0]];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Unable to show user by email, ".concat(error_3.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersModel.prototype.create = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, password, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "INSERT INTO users (username, email, image, password)\n                   VALUES ($1, $2, $3, $4)\n                   RETURNING id, username, email, image";
                        password = (0, bcrypt_1.hashSync)(user.password + config_1.default.pepper, config_1.default.salt);
                        return [4 /*yield*/, connect.query(sql, [user.username, user.email, user.image, password])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Unable to create new user, ".concat(error_4.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersModel.prototype.deleteByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "DELETE\n                   FROM users\n                   WHERE email = $1\n                   RETURNING id,username, email, image";
                        return [4 /*yield*/, connect.query(sql, [email])];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows[0]];
                    case 3:
                        error_5 = _a.sent();
                        throw new Error("Unable to delete user by email, ".concat(error_5.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersModel.prototype.authenticate = function (email, userPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, password, isPasswordValid, _a, id, username, email_1, image, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _b.sent();
                        sql = "SELECT *\n                   FROM users\n                   WHERE email = $1";
                        return [4 /*yield*/, connect.query(sql, [email])];
                    case 2:
                        results = _b.sent();
                        connect.release();
                        password = results.rows[0].password;
                        isPasswordValid = (0, bcrypt_1.compareSync)(userPassword + config_1.default.pepper, password);
                        if (isPasswordValid) {
                            _a = results.rows[0], id = _a.id, username = _a.username, email_1 = _a.email, image = _a.image;
                            return [2 /*return*/, { id: id, username: username, email: email_1, image: image }];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _b.sent();
                        throw new Error("Unable to authenticate user, ".concat(error_6.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsersModel;
}());
exports.UsersModel = UsersModel;
