"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Error_middleware_1 = require("./middlewares/Error.middleware");
var PageNotFound_middleware_1 = require("./middlewares/PageNotFound.middleware");
var Session_middleware_1 = require("./middlewares/Session.middleware");
var morgan_1 = __importDefault(require("morgan"));
var config_1 = __importDefault(require("./config"));
var routes_1 = __importDefault(require("./routes"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var PORT = config_1.default.port || 3000;
// create an instance server
var app = (0, express_1.default)();
// HTTP request logger middleware
app.use((0, morgan_1.default)('short'));
// Secure headers to express app
app.use((0, helmet_1.default)());
// Open cors for frontend
app.use((0, cors_1.default)({
    origin: 'exp://192.168.8.142:19000',
    credentials: true
}));
app.use(express_1.default.static('uploads'));
// Save user credentials in cookie
app.use(Session_middleware_1.sessionMiddleware);
// Parse any json data
app.use(express_1.default.json());
// use routes
app.use('/', routes_1.default);
// add routing for / path
app.get('/', function (req, res) {
    res.json({
        message: 'Hello World 🌍'
    });
});
// Error middleware to send error status and message in json data
app.use(Error_middleware_1.errorMiddleware);
// Send 404 if page not found
app.use(PageNotFound_middleware_1.pageNotFoundMiddleware);
// start express server
app.listen(PORT, function () {
    console.log("Server is starting at http://localhost:".concat(PORT));
});
exports.default = app;
