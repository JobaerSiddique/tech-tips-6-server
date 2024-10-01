"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const globalHandlerError_1 = __importDefault(require("./app/middleware/globalHandlerError"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hurry Tech-Tips server is Started');
});
app.use('/api/v1', routes_1.default);
// use route
app.use(globalHandlerError_1.default);
// not found route
app.use(notFound_1.default);
exports.default = app;
