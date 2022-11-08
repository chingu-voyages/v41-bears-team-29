"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = exports.redisClient = void 0;
var express_session_1 = __importDefault(require("express-session"));
var ioredis_1 = __importDefault(require("ioredis"));
var connect_redis_1 = __importDefault(require("connect-redis"));
var config_1 = __importDefault(require("../config"));
exports.redisClient = new ioredis_1.default();
var RedisStore = (0, connect_redis_1.default)(express_session_1.default);
exports.sessionMiddleware = (0, express_session_1.default)({
    secret: config_1.default.cookieSecret,
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({ client: exports.redisClient }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: config_1.default.env === 'production' ? true : 'auto',
        httpOnly: true,
        sameSite: config_1.default.env === 'production' ? 'none' : 'lax'
    }
});
