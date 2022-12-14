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
exports.KidsModel = void 0;
var database_1 = __importDefault(require("../database"));
var KidsModel = /** @class */ (function () {
    function KidsModel() {
    }
    KidsModel.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT *\n                   FROM kids";
                        return [4 /*yield*/, connect.query(sql)];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Unable to get all kids, ".concat(error_1.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KidsModel.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT *\n                   FROM kids\n                   WHERE id = $1";
                        return [4 /*yield*/, connect.query(sql, [id])];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Unable to get kid by id, ".concat(error_2.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KidsModel.prototype.showByUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT *\n                   FROM kids\n                   WHERE user_id = $1";
                        return [4 /*yield*/, connect.query(sql, [userId])];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Unable to get kids by user id, ".concat(error_3.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KidsModel.prototype.create = function (name, image, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "INSERT INTO kids (name, image, user_id)\n                   VALUES ($1, $2, $3)\n                   RETURNING *";
                        return [4 /*yield*/, connect.query(sql, [name, image, userId])];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows[0]];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Unable to create new kid, ".concat(error_4.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KidsModel.prototype.update = function (id, name, image) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, select, sql, results, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        return [4 /*yield*/, connect.query("SELECT *\n                                          FROM kids\n                                          WHERE id = $1", [id])];
                    case 2:
                        select = _a.sent();
                        sql = "UPDATE kids\n                   SET name=$1,\n                       image=$2\n                   WHERE id = $3\n                   RETURNING *";
                        return [4 /*yield*/, connect.query(sql, [
                                name ? name : select.rows[0].name,
                                image ? image : select.rows[0].image,
                                id
                            ])];
                    case 3:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows[0]];
                    case 4:
                        error_5 = _a.sent();
                        throw new Error("Unable to update kid, ".concat(error_5.message));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    KidsModel.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, results, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "DELETE\n                   FROM kids\n                   WHERE id = $1\n                   RETURNING *";
                        return [4 /*yield*/, connect.query(sql, [id])];
                    case 2:
                        results = _a.sent();
                        connect.release();
                        return [2 /*return*/, results.rows[0]];
                    case 3:
                        error_6 = _a.sent();
                        throw new Error("Unable to delete kid by id, ".concat(error_6.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return KidsModel;
}());
exports.KidsModel = KidsModel;
